"use client";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ICBlog } from "@/interfaces/blog.interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const fetchBlogs = async () => {
  const response = await fetch("/api/blog");
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
};
export default function Blogs() {
  // const types = ["All", "Branded Apparels", "Workwear", "Retail Brand"];
  const [blogs, setBlogs] = useState<ICBlog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blog`
        );
        const data: ICBlog[] = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <Section className="pt-12 pb-6">
      {/* <div className="flex justify-center relative gap-5 overflow-auto">
        {types.map((t) => (
          <Button onClick={() => alert(t)} variant={"outline"} key={t}>
            {t}
          </Button>
        ))}
      </div> */}
      {/* <div className="flex mx-auto mt-4 max-w-[70%] gap-5">
        <Input placeholder="search..." className="border" />
        <Button>Search</Button>
      </div> */}
      <div
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration={`1000`}
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        className="grid grid-cols-3 max-md:grid-cols-1 mt-12 px-12 max-md:px-4 gap-12"
      >
        {blogs.map((blog, ind) => (
          <Blog key={ind} blog={blog} />
        ))}
      </div>
    </Section>
  );
}

const Blog = ({ blog }: { blog: ICBlog }) => {
  return (
    <Link href={"/blogs/" + blog.link} className="flex flex-col">
      <div className="h-[250px] overflow-hidden  rounded-lg">
        <Image
          src={blog.image}
          className="rounded-lg w-full h-[250px] object-cover hover:scale-110 duration-300"
          width={100}
          height={100}
          unoptimized
          alt=""
        />
      </div>
      <div className="text-lg mt-2">{blog.topic}</div>
      <p className="text-sm mt-2 ">
        {blog.desc.split(" ").slice(0, 20).join(" ")}...
      </p>
      <Button className="mt-4 w-fit" variant={"outline"}>
        Read
      </Button>
    </Link>
  );
};
