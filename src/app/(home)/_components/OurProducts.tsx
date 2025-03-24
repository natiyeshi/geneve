"use client";
import React, { useState } from "react";
import leftPattern from "@/../public/assets/patterns/whitepattern.svg";
import clothImg from "@/../public/assets/images/random/clothImg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";

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


const OurProducts: React.FC = () => {
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
  const [curr, setCurr] = useState("All");
  return (
    <Section className="pt-32  min-h-screen flex flex-col">
      <Topic
        child={
          <>
            <span className="text-primary">Our </span> Products
          </>
        }
      />
      <div className="flex max-lg:flex-col gap-14 flex-1 px-12 max-lg:px-4 mt-8 relative">
        <div
          data-aos="fade-up-right"
          data-aos-offset="120"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          className="flex  z-10 overflow-auto lg:flex-col md:gap-3 gap-10 max-md:w-full md:sticky top-0 h-full pt-4"
        >
          {types.map((type, key) => (
            <div
              key={key}
              role="button"
              className={`capitalize georgiaFont font-semibold italic text-lg ${
                type === "All" ? "text-primary" : "text-background"
              }`}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="flex-1 w-full items-center py-3 mb-12 grid grid-cols-3 max-sm:grid-cols-1 max-xl:grid-cols-2 gap-4">
          {products.map((pr, ind) => (
            <Product key={ind} img={pr} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurProducts;

const Product = ({ img }: { img: any }) => {
  return (
    <div className="flex h-fit gap-3  flex-col ">
      <div className="flex relative">
        <Image
          src={img}
          alt="left pattern"
          className="w-full h-[300px] object-cover rounded-xl"
        />
      </div>
      <div className="font-semibold break-words whitespace-normal">
        Product Name
      </div>
      <div className="whitespace-normal">
        Little description about the product goes here.
      </div>
    </div>
  );
};
