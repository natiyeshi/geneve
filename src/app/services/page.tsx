import Footer from "@/components/custom/Footer";
import Services from "./_components/Services";
import Hero from "./_components/Hero";
import Contact from "@/components/custom/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services ",
};
export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Footer />
      <Contact />
    </>
  );
}
