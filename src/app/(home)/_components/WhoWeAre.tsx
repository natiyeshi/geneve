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
      <div className="pt-14  flex flex-col ">
        <Topic
          child={
            <>
              Who <span className="text-primary">We </span> Are
            </>
          }
        />
        <div className="flex w-full px-12 max-md:px-4 max-md:flex-col gap-0 flex-1">
          <div className="flex relative flex-1 mt-24  ">
            <Image
              className="md:absolute  2xl:w-[400px] max-2xl:-left-20 z-10 rounded-3xl  w-[550px]  md:-rotate-[8.31deg] shadow-primary"
              src={img}
              style={{
                boxShadow: "20px 20px 40px rgba(225, 168, 39, 1)",
              }}
              alt="abcd"
            />
            {/* <div className="absolute top-[80px] -left-[1rem] w-[580px] h-[360px] rounded-[50px] bg-primary -rotate-[8.31deg]"></div> */}
          </div>
          <div className="mt-32 max-md:12 md:pe-12 flex-1 ">
            <p className="lg:max-w-lg  w-full mb-5">
              As a woman owned company established in 2016, women empowerment is
              at the core of what we do. We hire on average 150 employees of
              which 85% are women and some are in managerial positions.
            </p>
            <Link href={"/aboutus"}>
              <Button>About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhoWeAre;
