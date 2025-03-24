import React from "react";

import bluepattern from "@/../public/assets/patterns/bluepattern.svg";
import clothImg from "@/../public/assets/images/random/clothImg.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong, FaQuoteRight } from "react-icons/fa6";
import { Section } from "@/components/custom/Section";
import { TopicBlue } from "@/components/custom/Topic";

interface TestimonialProps {
  author: string;
  text: string;
}

const Testimonials: React.FC = () => {
  return (
    <Section className="flex flex-col bg-background text-white max-md:mt-[20rem]">
      <TopicBlue
        className="mt-14"
        child={
          <>
            <span className="text-primary">Our </span> Testimonials
          </>
        }
      />
      <div className="mt-14 grid grid-cols-2 max-md:grid-cols-1 pb-8 gap-12 px-12 max-md:px-4 ">
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
    </Section>
  );
};

const Testimony = () => {
  return (
    <div
      data-aos="fade-up-top"
      data-aos-offset="150"
      data-aos-delay="30"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      className="border border-white rounded-lg px-3 py-2 flex flex-col gap-3"
    >
      <FaQuoteRight className="text-primary text-[3rem]" />
      <div className="font-semibold">Client Name</div>
      <p>
        “Gaber Wear transformed our team’s look Gaber Wear transformed our
        team’s look look Gaber Wear transformed our team’s look look Gaber Wear
        transformed our team’s look look Gaber Wear transformed our team’s look
        look Gaber Wear transformed our team’s look look Gaber Wear transformed
        our team’s look”
      </p>
      <Link href={"/"} className="text-primary flex gap-2 items-center">
        <div>Site Link</div>
        <FaArrowRightLong className="-rotate-[30deg]" />
      </Link>
    </div>
  );
};

export default Testimonials;
