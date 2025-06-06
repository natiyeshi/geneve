
import Product from "../../(models)/product.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const product = await Product.findByIdAndDelete(params.id);
  
      if (!product) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}