import { NextResponse } from "next/server";
import Package from "@/app/api/(models)/package";

// GET single package
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const packageData = await Package.findById(params.id);
    
    if (!packageData) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(packageData);
  } catch (error) {
    console.error("Error fetching package:", error);
    return NextResponse.json(
      { error: "Failed to fetch package" },
      { status: 500 }
    );
  }
}

// PUT update package
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    const updatedPackage = await Package.findByIdAndUpdate(
      params.id,
      data,
      { new: true, runValidators: true }
    );
    
    if (!updatedPackage) {
      return NextResponse.json(
        { message: "Package not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: "Package updated successfully!", updatedPackage },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: (err as any)?.message ?? "Server Error", error: err },
      { status: 500 }
    );
  }
}

// DELETE package
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedPackage = await Package.findByIdAndDelete(params.id);
    
    if (!deletedPackage) {
      return NextResponse.json(
        { message: "Package not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: "Package deleted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 }
    );
  }
} 