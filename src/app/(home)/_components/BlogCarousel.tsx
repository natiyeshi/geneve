"use client";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";
import { blogs, BI } from "@/components/custom/datas";
import { useEffect, useState } from "react";
import { ICBlog } from "@/interfaces/blog.interface";
const fetchBlogs = async () => {
  const response = await fetch("/api/blog");
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return response.json();
};
const BlogCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({
      delay: 3000,
      jump: true,
    }),
  ]);

  const onPrevButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

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
    <Section className=" px-12 pb-12 max-md:px-4 ">
      <div className="flex justify-between  max-md:mt-6">
        <h1 className="text-3xl text-background font-semibold">
          Explore Our Blog Here
        </h1>
        <div className="flex gap-3 my-auto">
          <IoArrowBackOutline role="button" onClick={onPrevButtonClick} />
          <IoArrowBackOutline
            role="button"
            className="rotate-180"
            onClick={onNextButtonClick}
          />
        </div>
      </div>
      <div className="">
        <div
          // className="absolute bg-primary/20  left-0 top-0 right-0 bottom-0 overflow-hidden"
          className=" overflow-hidden mt-12"
          ref={emblaRef}
        >
          <div className="flex h-full ">
            {blogs.map((blog, ind) => (
              <Blog key={ind} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
const Blog = ({ blog }: { blog: ICBlog }) => {
  return (
    <Link
      href={"/blogs/" + blog.link}
      className="w-fit flex-[0_0_100%] basis-1/3 max-md:basis-1/2 max-lg:basis-1/3 max-sm:basis-full min-w-0 p-1 rounded-lg flex flex-col gap-2 select-none"
    >
      <Image
        src={blog.image}
        alt="Random"
        className="rounded-lg w-full h-[250px] object-cover"
        width={100}
        height={100}
        unoptimized
      />
      <div className="font-semibold">{blog.topic}</div>
      <p className="text-sm">
        {blog.desc.split(" ").slice(0, 20).join(" ")}...
      </p>
      <Button variant={"outline"} className="w-fit">
        Read
      </Button>
    </Link>
  );
};

export default BlogCarousel;
