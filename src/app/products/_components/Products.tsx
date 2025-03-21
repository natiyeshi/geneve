"use client";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Products() {
  const types = ["All", "Branded Apparels", "Workwear", "Retail Brand"];

  return (
    <Section className="pt-12 pb-6 relative">
      <div className="flex justify-center max-md:mb-4 overflow-auto relative gap-10">
        {types.map((t) => (
          <div
            role="button"
            className="italic georgiaFont text-background text-lg font-semibold whitespace-nowrap"
            onClick={() => alert(t)}
            key={t}
          >
            {t}
          </div>
        ))}
      </div>
      <div className=" flex mx-auto mt-4 px-2 md:max-w-[70%] max-md:w-full gap-5 ">
        <Input placeholder="search..." className="border" />
        <Button>Search</Button>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-12 px-12 max-md:px-4 gap-12">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Section>
  );
}

const Product = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="https://picsum.photos/200/300"
        className="rounded-lg w-full h-[250px] object-cover"
        width={100}
        height={100}
        alt=""
      />
      <div className="text-lg mt-2">Product Name</div>
      <p className="text-sm mt-2">
        Whether you are preparing for a corporate gathering or looking for
        custom apparel.
      </p>
    </div>
  );
};
