"use client";

import { useEffect, useState } from "react";
import AdminNav from "../_components/AdminNav";
import Blogs from "./_components/Blogs";
import { ICBlog } from "@/interfaces/blog.interface";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<ICBlog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminNav />
        <main className="p-6 md:p-8">
          <div className="text-center py-12">Loading blogs...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main className="p-6 md:p-8">
        <Blogs initialBlogs={blogs} />
      </main>
    </div>
  );
}
