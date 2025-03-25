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
  const t = [
    {
      content:
        "As a company that requires durable and professional uniforms, we were impressed by Gaber Wear's craftsmanship. The uniforms are stylish, comfortable, and built to last. Our employees love them, and we highly recommend Gaber Wear",
      topic:
        "Tesfaye, Owner and Managing Director, New Generation Logistics and HR PLC",
    },
    {
      content:
        "Gaber Wear transformed our team's look with high-quality branded apparel. Their attention to detail and ability to capture our brand identity made a huge difference. We’ve received numerous compliments, and we couldn’t be happier with the results!",
      topic: "Solomon, Marketing Director, United Beverages",
    },
    {
      content:
        "I love that Gaber Wear is not just about fashion but also about empowering women. Their designs are elegant, and the quality is top-notch. Every time I wear their apparel, I feel both stylish and inspired by their mission.",
      topic: "Lina G., Entrepreneur & Loyal Customer",
    },
    {
      content:
        "This is an amazing store, The items appeal to be hand made locally in ethipia. Quality and individuality at its best",
      topic: "Calvin Perkins- Shop customer",
    },
  ];
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
        {t.map((d) => (
          <Testimony name={d.topic} content={d.content} />
        ))}
      </div>
    </Section>
  );
};

const Testimony = ({ name, content }: { name: string; content: string }) => {
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
      <p>{content}</p>
      <div className="font-semibold mt-auto">{name}</div>
    </div>
  );
};

export default Testimonials;
