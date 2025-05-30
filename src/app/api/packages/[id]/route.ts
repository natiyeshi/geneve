import Package from "../../(models)/package.model";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "../../auth/[...nextauth]/options";

export async function GET(req: any, { params }: { params: { id: string } }) {
  try {
    const packageItem = await Package.findById(params.id);
    if (!packageItem) {
      return NextResponse.json({ message: "Package not found" }, { status: 404 });
    }
    return NextResponse.json(packageItem, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 }
    );
  }
}

export async function PUT(req: any, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(options);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const packageData = body.formData;
    
    const updatedPackage = await Package.findByIdAndUpdate(
      params.id,
      { ...packageData, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!updatedPackage) {
      return NextResponse.json({ message: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Package updated successfully!", package: updatedPackage },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: (err as any)?.message ?? "Server Error", error: err },
      { status: 500 }
    );
  }
}

export async function DELETE(req: any, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(options);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const deletedPackage = await Package.findByIdAndDelete(params.id);
    if (!deletedPackage) {
      return NextResponse.json({ message: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Package deleted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 }
    );
  }
} 