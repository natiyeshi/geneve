"use client";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Blogs() {
  const types = ["All", "Branded Apparels", "Workwear", "Retail Brand"];

  return (
    <Section className="pt-12 pb-6">
      <div className="flex justify-center relative gap-5">
        {types.map((t) => (
          <Button onClick={() => alert(t)} variant={"outline"} key={t}>
            {t}
          </Button>
        ))}
      </div>
      <div className="flex mx-auto mt-4 max-w-[70%] gap-5">
        <Input placeholder="search..." className="border" />
        <Button>Search</Button>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration={`1000`}
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        className="grid grid-cols-3 mt-12 px-12 gap-12"
      >
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </Section>
  );
}

const Blog = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="https://picsum.photos/200/300"
        className="rounded-lg w-full h-[250px] object-cover"
        width={100}
        height={100}
        alt=""
      />
      <div className="text-lg mt-2">Blog Title</div>
      <p className="text-sm mt-2">
        Whether you are preparing for a corporate gathering or looking for
        custom apparel.
      </p>
      <Button className="mt-4 w-fit" variant={"outline"}>
        Read
      </Button>
    </div>
  );
};
