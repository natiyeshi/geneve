import Nav from "@/components/custom/Nav";
import Pattern from "@/components/custom/Pattern";
import { Button } from "@/components/ui/button";
import Carousel from "./Carousel";
import { Section } from "@/components/custom/Section";
import Link from "next/link";
export default function Page() {
  return (
    <Section className="relative bg-gradient-to-b w-full from-background via-background to-white text-white overflow-hidden">
      <Pattern />
      <Nav />
      <div className="relative z-10 flex flex-col items-center capitalize max-md:px-2">
        <h2 className="text-[50px] text-center text-primary max-md:py-4 max-lg:text-[50px] max-md:text-[40px] mt-5 italic">
          Sewed With
          <span className=""> passion For You</span>
        </h2>
        <div className="text-center max-w-[500px]">
          Transform your creative ideas into reality and start your journey
          today!
        </div>
        <Link href={"/products"}>
          <Button variant={"primary"} className="py-4  mt-5 rounded-full z-20">
            Explore Products
          </Button>
        </Link>
      </div>
      <div className="relative z-10 mt-8 max-md:mt-12 w-full">
        <Carousel />
      </div>
    </Section>
  );
}
