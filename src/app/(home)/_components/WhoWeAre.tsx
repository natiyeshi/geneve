import React from "react";
import leftPattern from "@/../public/assets/patterns/whitepattern.svg";
import img from "@/../public/assets/images/random/movie-card (1).png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";
import Topic from "@/components/custom/Topic";
import Link from "next/link";

const WhoWeAre: React.FC = () => {
  return (
    <Section className="mt-12 max-md:mt-4 ">
      <div className="pt-14  flex flex-col p">
        <Topic
          child={
            <>
              Who <span className="text-primary">We </span> Are
            </>
          }
        />
        <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1">
          <div className="flex relative flex-1 mt-24  pb-12">
            <Image
              className="  2xl:w-[400px]  z-10 rounded-3xl  w-[450px]   shadow-primary"
              src={img}
              alt="abcd"
            />
            <div className="border-[1.5px] max-md:hidden border-black w-[450px] rounded-3xl h-[330px] absolute top-7 left-7  "></div>
          </div>
          <div className="mt-32 max-md:12 md:pe-12 flex-1 ">
            <p className="lg:max-w-lg pt-12 w-full mb-5">
              As a woman owned company established in 2016, women empowerment is
              at the core of what we do. We hire on average 150 employees of
              which 85% are women and some are in managerial positions.
            </p>
            <Link href={"/ourstory"}>
              <Button>Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhoWeAre;
