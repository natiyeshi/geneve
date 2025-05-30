import React from "react";
import AdminNav from "../_components/AdminNav";
import Blogs from "./_components/Blogs";
import { ICBlog } from "@/interfaces/blog.interface";

const Page = async () => {
  let blogs: ICBlog[] = [];
  blogs = await getBlogs();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Blogs initialBlogs={blogs} />
    </div>
  );
};

async function getBlogs(): Promise<ICBlog[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const blogs: ICBlog[] = await res.json();
    return blogs;
  } catch (error) {
    return [];
  }
}

export default Page;
