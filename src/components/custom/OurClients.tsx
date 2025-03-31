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
import prt10 from "@/../public/assets/partners/image.png";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";
import { Skeleton } from "@/components/ui/skeleton";

const OurClients: React.FC = () => {
  const [partners, setPartners] = React.useState<string[]>([]);
  const [partners2, setPartners2] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/partner`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();

        const images = data.map((item: { image: string }) => item.image);
        const midIndex = Math.ceil(images.length / 2);

        setPartners(images.slice(0, midIndex));
        setPartners2(images.slice(midIndex));
      } catch (error) {
        console.error("Failed to fetch partners:", error);
      }finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);
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
    <Section className="pt-12 flex flex-col maxmd:py-6">
      <Topic
        child={
          <>
            <span className="text-primary">Our </span> Clients
          </>
        }
      />
      <div className=" overflow-hidden mt-12" ref={emblaRef}>
        <div className="flex h-full ">
          {isLoading ? (
            <>
              {[...Array(10)].map((ind) => (
                <Skeleton
                  key={ind}
                  className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/5 max-lg:basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                />
              ))}
            </>
          ) : (
            partners.map((b, key) => (
              <>
                <Image
                  key={key}
                  src={b}
                  className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/5 max-lg:basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                  alt="a"
                  width={100}
                  height={100}
                  unoptimized
                />
              </>
            ))
          )}
        </div>
      </div>
      <div
        // className="absolute bg-primary/20  left-0 top-0 right-0 bottom-0 overflow-hidden"
        className=" overflow-hidden mt-12"
        ref={emblaRef2}
      >
        <div className="flex h-full ">
          {isLoading ? (
            <>
              {[...Array(10)].map((ind) => (
                <Skeleton
                  key={ind}
                  className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/5 max-lg:basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                />
              ))}
            </>
          ) : (
            partners2.map((b, key) => (
              <>
                <Image
                  key={key}
                  src={b}
                  className="mx-7 w-[150px] h-[150px] object-contain relative  min-w-0 basis-1/5 max-lg:basis-1/4  max-md:basis-1/2 flex-[0_0_100%] "
                  alt="a"
                  width={100}
                  height={100}
                  unoptimized
                />
              </>
            ))
          )}
        </div>
      </div>
    </Section>
  );
};

export default OurClients;
