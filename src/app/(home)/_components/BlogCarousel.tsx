"use client";
import { IoArrowBackOutline } from "react-icons/io5";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";

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
  return (
    <Section className="min-h-[70vh] px-12 pb-12 max-md:px-4 ">
      <div className="flex justify-between">
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
            {[...Array(8)].map((b, key) => (
              <Blog />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
const Blog = () => {
  return (
    <div className="w-fit flex-[0_0_100%] basis-1/4 max-md:basis-1/2 max-lg:basis-1/3 max-sm:basis-full min-w-0 p-1 rounded-lg flex flex-col gap-2 select-none">
      <Image
        src="https://picsum.photos/200/300"
        alt="Random"
        className="rounded-lg w-full h-[250px] object-cover"
        width={100}
        height={100}
      />
      <div className="font-semibold">Blog Title</div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, Sed cursus ante dapibus diam.
      </p>
      <Button variant={"outline"} className="w-fit">
        Read
      </Button>
    </div>
  );
};

export default BlogCarousel;
