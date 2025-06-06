
import Testimonial from "../../(models)/Testimonial.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
        console.log(params.id)
      const testimonial = await Testimonial.findByIdAndDelete(params.id);
  
      if (!testimonial) {
        return NextResponse.json({ message: "Testimonial not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Testimonial deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}