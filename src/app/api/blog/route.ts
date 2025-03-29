import { blogValidationSchema } from "@/validation/blog.validation";
import Blog from "../(models)/blog.model";
import { NextResponse } from "next/server";

function sanitizeString(input: string): string {
  return input
    .trim() // Remove leading/trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with '-'
    .replace(/[^a-zA-Z0-9-]/g, "") // Remove non-alphanumeric characters except '-'
    .toLowerCase(); // Convert to lowercase (optional)
}

export async function POST(req: any) {
    try {
      const body = await req.json();
      const blogData = body.formData;
      await blogValidationSchema.validate(blogData);
      const link = sanitizeString(blogData.topic)
      console.log(link," - updated one")
      const doesExist = await Blog.findOne({ link: link });
      if(doesExist){
        return NextResponse.json(
          { blog: "Server Error", error: null, messge : "Topic Exists, Try another one." },
          { status: 500 }
        );
      }
      const newBlog = await Blog.create({...blogData,link });
      return NextResponse.json(
        { blog: "Blog created successfully!" , newBlog },
        { status: 200 }
      );
    } catch (err) {
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
    