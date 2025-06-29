import { NextRequest, NextResponse } from "next/server";
import Attraction from "@/lib/models/attraction";

export async function GET() {
  try {
    const attractions = await Attraction.find({}).sort({ createdAt: -1 });
    return NextResponse.json(attractions);
  } catch (error) {
    console.error("Error fetching attractions:", error);
    return NextResponse.json(
      { error: "Failed to fetch attractions" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, image } = body;

    if (!name || !image) {
      return NextResponse.json(
        { error: "Name and image are required" },
        { status: 400 }
      );
    }

    const attraction = await Attraction.create({ name, image });
    return NextResponse.json(attraction, { status: 201 });
  } catch (error) {
    console.error("Error creating attraction:", error);
    return NextResponse.json(
      { error: "Failed to create attraction" },
      { status: 500 }
    );
  }
} 