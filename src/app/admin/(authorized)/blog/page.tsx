import React from "react";
import AdminNav from "../_components/AdminNav";
import Blogs from "./_components/Blogs";
import { IBlog } from "@/interfaces/blog.interface";

const Page = async () => {
  let blogs: IBlog[] = [];
  blogs = await getBlogs();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <Blogs initialBlogs={blogs} />
    </div>
  );
};

async function getBlogs(): Promise<IBlog[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`, {
      // Revalidate every hour
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const blogs: IBlog[] = await res.json();
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default Page;
