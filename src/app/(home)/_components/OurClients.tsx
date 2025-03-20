"use client";
import React from "react";
import leftPattern from "@/../public/assets/patterns/whitepattern.svg";
import Image from "next/image";
import prt1 from "@/../public/assets/partners/image 2.png";
import prt2 from "@/../public/assets/partners/image 3.png";
import prt3 from "@/../public/assets/partners/image 4.png";
import prt4 from "@/../public/assets/partners/image 5.png";
import prt5 from "@/../public/assets/partners/image 6.png";

import prt6 from "@/../public/assets/partners/image 6.png";
import prt7 from "@/../public/assets/partners/image 7.png";
import prt8 from "@/../public/assets/partners/image 8.png";
import prt9 from "@/../public/assets/partners/image 9.png";
import prt10 from "@/../public/assets/partners/image 10.png";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";

const OurClients: React.FC = () => {
  const partners = [prt1, prt2, prt3, prt4, prt5];
  const partners2 = [prt6, prt7, prt8, prt9, prt10];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 2000,
      jump: false,
    }),
  ]);
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 1500,
      jump: false,
    }),
  ]);

  return (
    <Section className="pt-12 flex flex-col">
      <Topic
        child={
          <>
            <span className="text-primary">Our </span> Clients
          </>
        }
      />
      <div
        // className="absolute bg-primary/20  left-0 top-0 right-0 bottom-0 overflow-hidden"
        className=" overflow-hidden mt-12"
        ref={emblaRef}
      >
        <div className="flex h-full ">
          {partners.map((b, key) => (
            <>
              <Image
                key={key}
                src={b}
                className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/5 max-lg:basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                alt="a"
                unoptimized
              />
            </>
          ))}
        </div>
      </div>
      <div
        // className="absolute bg-primary/20  left-0 top-0 right-0 bottom-0 overflow-hidden"
        className=" overflow-hidden mt-12"
        ref={emblaRef2}
      >
        <div className="flex h-full ">
          {partners2.map((b, key) => (
            <>
              <Image
                key={key}
                src={b}
                className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/5 max-lg:basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                alt="a"
                unoptimized
              />
            </>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default OurClients;
