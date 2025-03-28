
import Message from "../../(models)/Message.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const message = await Message.findByIdAndDelete(params.id);
  
      if (!message) {
        return NextResponse.json({ message: "Message not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Message deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: (err as any).message ?? "Server Error" }, { status: 500 });
    }
}