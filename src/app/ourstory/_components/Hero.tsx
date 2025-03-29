import Nav from "@/components/custom/Nav";
import Pattern from "@/components/custom/Pattern";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/custom/Section";
export default function Page() {
  return (
    <Section h={false} className="relative min-h-[70vh] bg-gradient-to-b w-full from-background via-background to-white text-white">
      <Pattern />
      <Nav />
      <div className="relative z-10 flex flex-col items-center capitalize max-md:px-3">
        <h2 className="text-[70px] max-md:py-4 max-lg:text-[50px] max-md:text-[40px] mt-5 ">
          <span className="text-primary me-4">Our</span>
          Story
        </h2>
        <div className="text-center max-w-[500px]">
          Innovating for You, Delivering Solutions That Make a Difference!
        </div>
      </div>
    </Section>
  );
}
