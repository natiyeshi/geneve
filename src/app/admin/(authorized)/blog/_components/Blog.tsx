"use client"
import { Button } from "@/components/ui/button";
import AreYouSureDelete from "../../_components/AreYouSureDelete";
import img from "@/../public/assets/admin/template.png";
import { ICBlog } from "@/interfaces/blog.interface";
import Image from "next/image";
import Link from "next/link";
import { getMaxString } from "@/utils/helper";

const Blog = ({ blog, onDelete }: { blog: ICBlog; onDelete: Function }) => {
  return (
    <div className="bg-white rounded-xl text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <div className="font-semibold text-lg capitalize">{blog.topic}</div>
      <Image
        src={blog.image}
        className="w-[300px] my-auto rounded-xl h-[200px] object-cover "
        width={100}
        height={100}
        unoptimized
        alt="Image"
      />
      <div className="flex flex-col gap-2 mt-auto">
        <div className="flex flex-col text-sm mt-4">
          <div className="font-semibold">{getMaxString(blog.desc)}</div>
        </div>
        <div className="flex justify-around">
          <Link
            href={"/blogs/" + blog.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="">Read</Button>
          </Link>
          <AreYouSureDelete onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
