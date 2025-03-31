"use client";
import React, { useState, useEffect } from "react";
import { Section } from "@/components/custom/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Product } from "@/app/(home)/_components/OurProducts";
import { IProduct } from "@/interfaces/product.interface";
import { Skeleton } from "@/components/ui/skeleton";

export default function Products() {
  const types = ["All", "Branded Apparels", "Workwear", "Retail Brand"];
  const [curr, setCurr] = useState("All");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/product/`
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
    <Section className="pt-12 pb-6 relative">
      <div className="flex justify-center max-md:mb-8 overflow-auto relative gap-10 max-md:ps-3 ">
        {types.map((t) => (
          <div
            role="button"
            className={`capitalize georgiaFont font-semibold italic text-lg whitespace-nowrap ${
              t === curr ? "text-primary" : "text-background"
            }`}
            onClick={() => setCurr(t)}
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
        className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mt-12 px-12 max-md:px-4 gap-4"
      >
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
    </Section>
  );
}
