import { NextRequest, NextResponse } from "next/server";
import Attraction from "@/lib/models/attraction";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const attraction = await Attraction.findById(params.id);
    
    if (!attraction) {
      return NextResponse.json(
        { error: "Attraction not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(attraction);
  } catch (error) {
    console.error("Error fetching attraction:", error);
    return NextResponse.json(
      { error: "Failed to fetch attraction" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, image } = body;

    if (!name || !image) {
      return NextResponse.json(
        { error: "Name and image are required" },
        { status: 400 }
      );
    }

    const attraction = await Attraction.findByIdAndUpdate(
      params.id,
      { name, image },
      { new: true, runValidators: true }
    );

    if (!attraction) {
      return NextResponse.json(
        { error: "Attraction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(attraction);
  } catch (error) {
    console.error("Error updating attraction:", error);
    return NextResponse.json(
      { error: "Failed to update attraction" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const attraction = await Attraction.findByIdAndDelete(params.id);

    if (!attraction) {
      return NextResponse.json(
        { error: "Attraction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Attraction deleted successfully" });
  } catch (error) {
    console.error("Error deleting attraction:", error);
    return NextResponse.json(
      { error: "Failed to delete attraction" },
      { status: 500 }
    );
  }
} 