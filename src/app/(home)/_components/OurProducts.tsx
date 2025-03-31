"use client";
import React, { useState } from "react";
import leftPattern from "@/../public/assets/patterns/whitepattern.svg";
import clothImg from "@/../public/assets/images/random/clothImg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";

// import pr1 from "@/../public/assets/images/product/IMG_0659.jpg";
// import pr3 from "@/../public/assets/images/product/IMG_0661.jpg";
// import pr4 from "@/../public/assets/images/product/IMG_0662.jpg";
// import pr5 from "@/../public/assets/images/product/IMG_0664.jpg";
// import pr6 from "@/../public/assets/images/product/IMG_0665.jpg";
// import pr9 from "@/../public/assets/images/product/IMG_0668.jpg";
// import pr15 from "@/../public/assets/images/product/IMG_0674.jpg";
// import pr16 from "@/../public/assets/images/product/IMG_0675.jpg";
// import pr17 from "@/../public/assets/images/product/IMG_0676.jpg";
// import pr18 from "@/../public/assets/images/product/IMG_0686.jpg";
// import pr19 from "@/../public/assets/images/product/IMG_0688.jpg";
// import pr20 from "@/../public/assets/images/product/IMG_0693.jpg";
import { PI } from "@/components/custom/datas";
import { useEffect } from "react";
import { IProduct } from "@/interfaces/product.interface";
import { Skeleton } from "@/components/ui/skeleton";

const OurProducts: React.FC = () => {
  const types = ["All", "Branded Apparels", "Workwear", "Retail Brand"];
  const [curr, setCurr] = useState("All");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/product`
        );
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Section className="pt-32  min-h-screen flex flex-col relative">
      <Topic
        child={
          <>
            <span className="text-primary">Our </span> Products
          </>
        }
      />
      <div className="flex max-lg:flex-col gap-14 flex-1 px-12 max-lg:px-4 mt-8 relative">
        <div className="flex  z-10 overflow-auto lg:flex-col md:gap-3 gap-10 max-md:w-full md:sticky top-0 h-full pt-4 max-md:ps-2">
          {types.map((type, key) => (
            <div
              key={key}
              role="button"
              className={`capitalize georgiaFont font-semibold italic text-lg whitespace-nowrap ${
                type === curr ? "text-primary" : "text-background"
              }`}
              onClick={() => setCurr(type)}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="flex-1 w-full items-center py-3 mb-12 grid grid-cols-3 max-sm:grid-cols-1 max-xl:grid-cols-2 gap-4">
          {isLoading ? (
            <>
              {[...Array(10)].map((ind) => (
                <Skeleton key={ind} className="h-[300px] w-full" />
              ))}
            </>
          ) : products.filter((pr) => curr === "All" || pr.group === curr)
              .length > 0 ? (
            products
              .filter((pr) => curr === "All" || pr.group === curr)
              .map((pr, ind) => <Product key={ind} pr={pr} />)
          ) : (
            <div className="text-center col-span-full text-gray-500">
              Nothing found
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default OurProducts;

export const Product = ({ pr }: { pr: IProduct }) => {
  return (
    <div className="flex h-fit gap-3  flex-col ">
      <div className="flex relative h-[300px] rounded-xl overflow-hidden">
        <Image
          src={pr.image}
          className="w-full hover:scale-110 duration-300 h-[300px] object-cover rounded-xl"
          width={100}
          height={100}
          unoptimized
          alt="Image"
        />
        <div className="absolute right-3 top-4 w-fit px-2 rounded-xl text-xs bg-primary text-white py-[2px]">
          {pr.tag}
        </div>
      </div>
    </div>
  );
};
