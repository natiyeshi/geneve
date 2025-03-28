
import Service from "../../(models)/Service.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const service = await Service.findByIdAndDelete(params.id);
  
      if (!service) {
        return NextResponse.json({ message: "Service not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Service deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}