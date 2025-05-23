import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { options } from "../auth/[...nextauth]/options";

// GET /api/contact - Get all contact messages
export async function GET(request: Request) {
  try {
    const session = await getServerSession(options);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    console.log("Fetching messages with params:", { status, page, limit, skip });

    let client;
    try {
      client = await clientPromise;
      const db = client.db();

      const query: any = {};
      if (status) {
        query.status = status;
      }

      console.log("Using query:", query);

      const [messages, total] = await Promise.all([
        db
          .collection("contact_messages")
          .find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .toArray(),
        db.collection("contact_messages").countDocuments(query),
      ]);

      console.log("Found messages:", messages.length);

      return NextResponse.json({
        messages,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      throw dbError;
    }
  } catch (error) {
    console.error("Detailed error in GET /api/contact:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { 
        error: "Failed to fetch contact messages",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

// POST /api/contact - Submit a contact form
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const contactMessage = {
      name,
      email,
      subject,
      message,
      status: "unread",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("contact_messages").insertOne(contactMessage);

    // Here you could also send an email notification to the admin
    // using a service like SendGrid, AWS SES, etc.

    return NextResponse.json({
      message: "Contact message submitted successfully",
      messageId: result.insertedId,
    });
  } catch (error) {
    console.error("Error submitting contact message:", error);
    return NextResponse.json(
      { error: "Failed to submit contact message" },
      { status: 500 }
    );
  }
}

// PUT /api/contact - Update message status
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(options);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { _id, status } = await request.json();

    if (!_id || !status) {
      return NextResponse.json(
        { error: "Message ID and status are required" },
        { status: 400 }
      );
    }

    if (!["unread", "read", "replied", "archived"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection("contact_messages").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Message status updated successfully",
    });
  } catch (error) {
    console.error("Error updating message status:", error);
    return NextResponse.json(
      { error: "Failed to update message status" },
      { status: 500 }
    );
  }
}

// DELETE /api/contact - Delete a message
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(options);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { _id } = await request.json();

    if (!_id) {
      return NextResponse.json(
        { error: "Message ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection("contact_messages").deleteOne({
      _id: new ObjectId(_id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Message deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { error: "Failed to delete message" },
      { status: 500 }
    );
  }
} 