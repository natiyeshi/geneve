
import Blog from "../../(models)/blog.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const blog = await Blog.findByIdAndDelete(params.id);
  
      if (!blog) {
        return NextResponse.json({ blog: "Blog not found" }, { status: 404 });
      }
  
      return NextResponse.json({ blog: "Blog deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ blog: (err as any).blog ?? "Server Error" }, { status: 500 });
    }
}


export async function GET(req: any, { params }: { params: { id: string } }) {
  try {
    const blog = await Blog.findOne({ link : params.id});

    if (!blog) {
      return NextResponse.json({ blog: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ blog: (err as any).blog ?? "Server Error" }, { status: 500 });
  }
}