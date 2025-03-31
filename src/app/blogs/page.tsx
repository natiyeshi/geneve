import Footer from "@/components/custom/Footer";
import Blogs from "./_components/Blogs";
import Hero from "./_components/Hero";
import Contact from "@/components/custom/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog ",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Blogs />
      <Footer />
      <Contact />
      
    </>
  );
}
