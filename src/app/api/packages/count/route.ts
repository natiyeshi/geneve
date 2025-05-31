import { NextResponse } from "next/server";
import Package from "@/app/api/(models)/package";

export async function GET() {
  try {
    const count = await Package.countDocuments();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error counting packages:", error);
    return NextResponse.json(
      { error: "Failed to count packages" },
      { status: 500 }
    );
  }
} 