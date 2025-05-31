"use client";

import { useState } from "react";
import { ICBlog } from "@/interfaces/blog.interface";
import AddBlog from "./AddBlog";
import Blog from "./Blog";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialBlogs: ICBlog[];
}

const Blogs = ({ initialBlogs }: Props) => {
  const [blogs, setBlogs] = useState<ICBlog[]>(initialBlogs);

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
        setBlogs((test) => test.filter((data) => data._id != id));
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

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Blogs</div>
        <AddBlog setBlogs={setBlogs} />
      </div>
      <div className=" text-adminText capitalize">Available Blogs</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {blogs.map((blog) => (
          <Blog
            key={blog._id}
            blog={blog}
            onDelete={() => handleDelete(blog._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
