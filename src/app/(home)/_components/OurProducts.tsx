import React from "react";
import leftPattern from "@/../public/assets/patterns/whitepattern.svg";
import clothImg from "@/../public/assets/images/random/clothImg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";

const OurProducts: React.FC = () => {
  const types = ["All", "Branded Apparels", "Workwear", "Retail Brand"];
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
        <div className="flex  z-10 overflow-auto lg:flex-col md:gap-3 gap-10 max-md:w-full md:sticky top-0 h-full pt-4">
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
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </Section>
  );
};

export default OurProducts;

const Product = () => {
  return (
    <div className="flex h-fit gap-3  flex-col ">
      <div className="flex relative">
        <Image
          src={clothImg}
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
