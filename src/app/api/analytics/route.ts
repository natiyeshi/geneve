import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { clientPromise } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// GET /api/analytics - Get analytics data
export async function GET(request: Request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    const client = await clientPromise;
    const db = client.db();

    const query: any = {};
    if (startDate && endDate) {
      query.timestamp = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    // Get total views
    const totalViews = await db.collection("analytics").countDocuments(query);

    // Get views by source
    const viewsBySource = await db
      .collection("analytics")
      .aggregate([
        { $match: query },
        {
          $group: {
            _id: "$source",
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

    // Get views by page
    const viewsByPage = await db
      .collection("analytics")
      .aggregate([
        { $match: query },
        {
          $group: {
            _id: "$page",
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

    // Get daily views
    const dailyViews = await db
      .collection("analytics")
      .aggregate([
        { $match: query },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$timestamp",
              },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ])
      .toArray();

    return NextResponse.json({
      totalViews,
      viewsBySource,
      viewsByPage,
      dailyViews,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}

// POST /api/analytics - Track a page view
export async function POST(request: Request) {
  try {
    const { page, source, referrer } = await request.json();

    if (!page) {
      return NextResponse.json(
        { error: "Page is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const analyticsData = {
      page,
      source: source || "direct",
      referrer: referrer || null,
      timestamp: new Date(),
      userAgent: request.headers.get("user-agent") || null,
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null,
    };

    await db.collection("analytics").insertOne(analyticsData);

    return NextResponse.json({
      message: "Analytics data recorded successfully",
    });
  } catch (error) {
    console.error("Error recording analytics:", error);
    return NextResponse.json(
      { error: "Failed to record analytics" },
      { status: 500 }
    );
  }
} 