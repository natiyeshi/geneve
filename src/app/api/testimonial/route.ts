import Testimonial from "../(models)/Testimonial.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";
import { testimonialValidation } from "@/validation/testimonial.validation";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const testimonialData = body.formData;
      await testimonialValidation.validate(testimonialData);
      const newTestimony = await Testimonial.create(testimonialData);
      return NextResponse.json(
        { message: "Testimonial created successfully!" , newTestimony },
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

export async function GET(req: any) {
    try {
      const testimonials = await Testimonial.find();
      return NextResponse.json(testimonials, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    