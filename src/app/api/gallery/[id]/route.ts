
import Gallery from "../../(models)/Gallery.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const gallery = await Gallery.findByIdAndDelete(params.id);
  
      if (!gallery) {
        return NextResponse.json({ message: "Gallery not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Gallery deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}