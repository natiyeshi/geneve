
import Partner from "../../(models)/Partner.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const partner = await Partner.findByIdAndDelete(params.id);
  
      if (!partner) {
        return NextResponse.json({ message: "Partner not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Partner deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}