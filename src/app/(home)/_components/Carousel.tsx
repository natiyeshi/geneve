"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import bg1 from "@/../public/assets/images/image 13.png";
import bg2 from "@/../public/assets/images/image 14.png";
import bg3 from "@/../public/assets/images/image 16.png";
import bg4 from "@/../public/assets/images/movie-card.png";
import bg5 from "@/../public/assets/images/tg_image_3253265098 1.png";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2000,
      jump: false,
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
  const bgs = [bg1, bg2, bg3, bg4, bg5];
  return (
    <div>
      <div className="max-md:hidden"></div>
      <div className=" overflow-hidden" ref={emblaRef}>
        <div className="flex h-full ">
          {bgs.map((b, ind) => (
            <>
              <Image
                key={ind}
                src={b}
                className="mx-8 max-md:mx-3 w-[400px] relative flex-[0_0_100%] min-w-0 basis-1/4 max-md:basis-1/2  rounded-t-full object-cover"
                alt="a"
                unoptimized
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
