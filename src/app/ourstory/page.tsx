import Footer from "@/components/custom/Footer";
import Hero from "./_components/Hero";
import About from "./_components/About";
import BlogCarousel from "../(home)/_components/BlogCarousel";
import Contact from "@/components/custom/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story ",
};
export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <BlogCarousel />
      <Footer />
      <Contact />
      
    </>
  );
}
