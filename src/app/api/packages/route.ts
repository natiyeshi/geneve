import { NextResponse } from "next/server";
import Package from "@/app/api/(models)/package";

// GET all packages
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const category = searchParams.get("category");
    const sortBy = searchParams.get("sortBy") || "featured";

    let filter: any = {};

    // Apply search filter if query exists
    if (query) {
      filter = {
        $or: [
          { name: { $regex: query, $options: "i" } },
          { tagline: { $regex: query, $options: "i" } },
          { locations: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } }
        ]
      };
    }

    // Apply category filter if category exists
    if (category) {
      filter.category = category;
    }

    // Build sort object based on sortBy parameter
    let sort: any = {};
    switch (sortBy) {
      case "price-low":
        sort = { "pricing.pricePerPerson": 1 };
        break;
      case "price-high":
        sort = { "pricing.pricePerPerson": -1 };
        break;
      case "duration-short":
        sort = { duration: 1 };
        break;
      case "duration-long":
        sort = { duration: -1 };
        break;
      case "featured":
      default:
        sort = { featured: -1 };
        break;
    }

    const packages = await Package.find(filter).sort(sort);
    return NextResponse.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}

// POST new package
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newPackage = await Package.create(data);
    return NextResponse.json(
      { message: "Package created successfully!", newPackage },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: (err as any)?.message ?? "Server Error", error: err },
      { status: 500 }
    );
  }
} 