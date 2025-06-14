
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


export async function PUT(req: any, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log(body,"---",params,params.id);
    const blog = await Blog.findByIdAndUpdate(
      params.id,
      { $set: body.formData },
      { new: true, runValidators: true }
    );

    if (!blog) {
      console.log("Blog not found");
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
      console.log("Blog changed successfully found",blog);


    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: (err as any).message ?? "Server Error" },
      { status: 500 }
    );
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