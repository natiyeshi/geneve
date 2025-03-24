"use client";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import pr1 from "@/../public/assets/images/product/IMG_0659.jpg";
import pr3 from "@/../public/assets/images/product/IMG_0661.jpg";
import pr4 from "@/../public/assets/images/product/IMG_0662.jpg";
import pr5 from "@/../public/assets/images/product/IMG_0664.jpg";
import pr6 from "@/../public/assets/images/product/IMG_0665.jpg";
import pr9 from "@/../public/assets/images/product/IMG_0668.jpg";
import pr15 from "@/../public/assets/images/product/IMG_0674.jpg";
import pr16 from "@/../public/assets/images/product/IMG_0675.jpg";
import pr17 from "@/../public/assets/images/product/IMG_0676.jpg";
import pr18 from "@/../public/assets/images/product/IMG_0686.jpg";
import pr19 from "@/../public/assets/images/product/IMG_0688.jpg";
import pr20 from "@/../public/assets/images/product/IMG_0693.jpg";

export default function Products() {
  const types = ["All", "Branded Apparels", "Workwear", "Retail Brand"];
  const products = [
    pr1,
    pr3,
    pr4,
    pr5,
    pr6,
    pr9,
    pr15,
    pr16,
    pr17,
    pr18,
    pr19,
    pr20,
  ];
  return (
    <Section className="pt-12 pb-6 relative">
      <div className="flex justify-center max-md:mb-8 overflow-auto relative gap-10 max-md:ps-3 ">
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
      <div
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="30"
        data-aos-duration={`1000`}
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-12 px-12 max-md:px-4 gap-12"
      >
        {products.map((pr, ind) => (
          <Product key={ind} img={pr} />
        ))}
      </div>
    </Section>
  );
}

const Product = ({ img }: { img: any }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={img}
        className="rounded-lg w-full h-[250px] object-cover"
        width={100}
        height={100}
        unoptimized
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
