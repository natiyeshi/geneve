"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface HeroCarouselProps {
  images: {
    src: any;
    alt: string;
  }[];
  interval?: number;
}

export function HeroCarousel({ images, interval = 5000 }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: interval,
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

  return (
    <>
      <div className="max-md:hidden">
        <Button
          onClick={onPrevButtonClick}
          className="absolute left-10 z-40 top-1/2 p-3 text-white rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </Button>
        <Button
          onClick={onNextButtonClick}
          className="absolute right-10 z-40 top-1/2 p-3 text-white rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </Button>
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover brightness-75"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#09163A]/40 to-[#09163A]/20" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 