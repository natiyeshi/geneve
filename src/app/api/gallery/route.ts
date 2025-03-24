import Gallery from "../(models)/Gallery.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const galleryData = body.formData;      
      const newGallery = await Gallery.create(galleryData);
      return NextResponse.json(
        { message: "Gallery created successfully!" , newGallery },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }

export async function GET(req: any) {
    try {
      const gallerys = await Gallery.find();
      return NextResponse.json(gallerys, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    