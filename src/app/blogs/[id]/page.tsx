"use client";
import Footer from "@/components/custom/Footer";
import Nav from "@/components/custom/Nav";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/custom/Section";
import { blogs } from "@/components/custom/datas";
import React from "react";
import BlogCarousel from "@/app/(home)/_components/BlogCarousel";

function decodeUrl(encodedStr: string): string {
  return decodeURIComponent(encodedStr);
}

const Page = () => {
  const params = useParams();
  const topic = decodeUrl(Array.isArray(params.id) ? params.id[0] : params.id);
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchBlog = async () => {
    const response = await fetch(`/api/blog/${topic}`);
    setIsLoading(false);
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    return response.json();
  };

  const [blog, setBlog] = React.useState<any>(null);

  React.useEffect(() => {
    fetchBlog()
      .then((data) => setBlog(data))
      .catch((error) => console.error(error));
  }, [topic]);

  if (!blog && isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[40px] pt-12 pb-6">Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Nav />
      <Section pixelate className="w-full min-h-screen" childClassName="flex flex-col">
        {blog ? (
          <div className="flex flex-col mt-6 max-w-[800px] mx-auto">
            <h1 className="text-[40px] pt-12 pb-6">{blog.topic}</h1>
            <div className="pb-6 pt-3">{blog.desc}</div>
            <Image
              width={100}
              height={100}
              unoptimized
              src={blog.image}
              alt=""
              className="object-contain w-full"
            />
            <div
              className="py-12 flex flex-col gap-5"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[40px] pt-12 pb-6">Blog Not Found</h1>
          </div>
        )}
        <BlogCarousel />
      </Section>
      <Footer />
    </>
  );
};

export default Page;
