import Partner from "../(models)/Partner.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const partnerData = body.formData;
      const newPartner = await Partner.create(partnerData);
      return NextResponse.json(
        { message: "Partner created successfully!" , newPartner },
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
      const partners = await Partner.find();
      return NextResponse.json(partners, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    