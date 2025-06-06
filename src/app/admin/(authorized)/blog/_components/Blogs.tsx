"use client";

import { useState } from "react";
import { IBlog } from "@/interfaces/blog.interface";
import BlogForm from "./AddBlog";
import Blog from "./Blog";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialBlogs: IBlog[];
}

const Blogs = ({ initialBlogs }: Props) => {
  const [blogs, setBlogs] = useState<IBlog[]>(initialBlogs);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setBlogs((prev) => prev.filter((data) => data._id !== id));
        return true;
      }
      toast({
        description: "Error deleting blog ",
      });
    } catch (error) {
      toast({
        description: "Error deleting blog ",
      });
    }
    return false;
  };

  const handleEdit = (updatedBlog: IBlog) => {
    setBlogs((prev) => prev.map((blog) => (blog._id === updatedBlog._id ? updatedBlog : blog)));
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Blogs</div>
        <BlogForm setBlogs={setBlogs} />
      </div>
      <div className=" text-adminText capitalize">Available Blogs</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {blogs.map((blog) => (
          <Blog
            key={blog._id}
            blog={blog}
            onDelete={() => handleDelete(blog._id)}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
