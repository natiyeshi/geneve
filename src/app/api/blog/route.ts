import blogValidation from "@/validation/blog.validation";
import Blog from "../(models)/Blog.model";
import { NextResponse } from "next/server";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const blogData = body.formData;
      await blogValidation.validate(blogData);
      const newBlog = await Blog.create(blogData);
      return NextResponse.json(
        { blog: "Blog created successfully!" , newBlog },
        { status: 200 }
      );
    } catch (err) {
      console.log(err,"++++++++++++++")
      return NextResponse.json(
        { blog: (err as any)?.blog ?? "Server Error", error: err },
        { status: 500 }
      );
    }
  }

export async function GET(req: any) {
    try {
      const blogs = await Blog.find();
      return NextResponse.json(blogs, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { blog: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    