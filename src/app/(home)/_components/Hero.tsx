import Nav from "@/components/custom/Nav";
import Pattern from "@/components/custom/Pattern";
import { Button } from "@/components/ui/button";
import Carousel from "./Carousel";
import { Section } from "@/components/custom/Section";
export default function Page() {
  return (
    <Section className="relative bg-gradient-to-b w-full from-background via-background to-white text-white">
      <Pattern />
      <Nav />
      <div className="relative z-10 flex flex-col items-center capitalize">
        <h1 className="text-2xl text-primary mt-5">Gaber Wear</h1>
        <h2 className="text-[70px] max-md:py-4 max-lg:text-[50px] max-md:text-[40px] mt-5 italic">
          Sewed With
          <span className="text-primary"> passion</span>
        </h2>
        <div className="text-center max-w-[500px]">
          Transform your creative ideas into reality and start your journey
          today!
        </div>
        <Button variant={"primary"} className="py-4  mt-5 rounded-full z-20">
          Explore Products
        </Button>
      </div>
      <div className="relative z-10 mt-8 max-md:mt-12 w-full">
        <Carousel />
      </div>
    </Section>
  );
}
