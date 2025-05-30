import Product from "../(models)/product.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";
import productValidationSchema from "@/validation/product.validation";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const productData = body.formData;
      await productValidationSchema.validate(productData);
      const newProduct = await Product.create(productData);
      return NextResponse.json(
        { message: "Product created successfully!" , newProduct },
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
      const products = await Product.find();
      return NextResponse.json(products, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    