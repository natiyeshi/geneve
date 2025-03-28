import { messageValidation } from "@/validation/message.validation";
import Message from "../(models)/Message.model";
import { NextResponse } from "next/server";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const messageData = body.formData;
      await messageValidation.validate(messageData);
      const newMessage = await Message.create(messageData);
      return NextResponse.json(
        { message: "Message created successfully!" , newMessage },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: (err as any)?.message ?? "Server Error", error: err },
        { status: 500 }
      );
    }
  }

export async function GET(req: any) {
    try {
      const messages = await Message.find();
      return NextResponse.json(messages, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    