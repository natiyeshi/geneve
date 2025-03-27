"use client";
import Footer from "@/components/custom/Footer";
import Nav from "@/components/custom/Nav";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/custom/Section";
import { blogs } from "@/components/custom/datas";

function decodeUrl(encodedStr: string): string {
  return decodeURIComponent(encodedStr);
}

const Page = () => {
  const params = useParams();
  const topic = decodeUrl(Array.isArray(params.id) ? params.id[0] : params.id);
  const blog = blogs.filter((b) => b.link == topic);

  return (
    <>
      <Nav />
      <Section pixelate className="w-full min-h-screen" childClassName="flex">
        {blog.length > 0 ? (
          <div className="flex flex-col mt-6 max-w-[800px] mx-auto">
            <h1 className="text-[40px] pt-12 pb-6">{blog[0].topic}</h1>
            <div className="pb-6 pt-3">{blog[0].desc}</div>
            <Image unoptimized src={blog[0].img} alt="" />
            <div
              className="py-12 flex flex-col gap-5"
              dangerouslySetInnerHTML={{ __html: blog[0].content }}
            ></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-[40px] pt-12 pb-6">Blog Not Found</h1>
          </div>
        )}
      </Section>
      <Footer />
    </>
  );
};

export default Page;
