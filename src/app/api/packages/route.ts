import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET /api/packages
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const packages = await db
      .collection("packages")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    return NextResponse.json(
      { message: "Error fetching packages" },
      { status: 500 }
    );
  }
}

// POST /api/packages
export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { title, description, price, duration, location, images, featured } =
      await req.json();

    if (!title || !description || !price || !duration || !location || !images?.length) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection("packages").insertOne({
      title,
      description,
      price: Number(price),
      duration,
      location,
      images,
      featured: Boolean(featured),
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Package created successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating package:", error);
    return NextResponse.json(
      { message: "Error creating package" },
      { status: 500 }
    );
  }
}

// PUT /api/packages/[id]
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const id = params.id;
    const { title, description, price, duration, location, images, featured } =
      await req.json();

    if (!title || !description || !price || !duration || !location || !images?.length) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection("packages").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          description,
          price: Number(price),
          duration,
          location,
          images,
          featured: Boolean(featured),
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Package updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating package:", error);
    return NextResponse.json(
      { message: "Error updating package" },
      { status: 500 }
    );
  }
}

// DELETE /api/packages/[id]
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const id = params.id;
    const client = await clientPromise;
    const db = client.db();

    const result = await db
      .collection("packages")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Package deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting package:", error);
    return NextResponse.json(
      { message: "Error deleting package" },
      { status: 500 }
    );
  }
} 