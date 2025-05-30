import Package from "../(models)/package.model";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "../auth/[...nextauth]/options";

// Validation schema for packages
const packageValidation = {
  validate: async (data: any) => {
    if (!data.name || !data.description || !data.price || !data.duration || !data.features || !data.image) {
      throw new Error("All fields are required");
    }
    if (data.price < 0) {
      throw new Error("Price must be positive");
    }
    if (!Array.isArray(data.features) || data.features.length === 0) {
      throw new Error("Features must be a non-empty array");
    }
    return true;
  }
};

export async function POST(req: any) {
  try {
    const session = await getServerSession(options);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const packageData = body.formData;
    await packageValidation.validate(packageData);
    
    const newPackage = await Package.create(packageData);
    return NextResponse.json(
      { message: "Package created successfully!", package: newPackage },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: (err as any)?.message ?? "Server Error", error: err },
      { status: 500 }
    );
  }
}

export async function GET(req: any) {
  try {
    const packages = await Package.find().sort({ createdAt: -1 });
    return NextResponse.json(packages, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err },
      { status: 500 }
    );
  }
} 