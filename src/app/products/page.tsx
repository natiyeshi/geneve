import Footer from "@/components/custom/Footer";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import OurClients from "@/components/custom/OurClients";
import Contact from "@/components/custom/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products ",
};
export default function Page() {
  return (
    <>
      <Hero />
      <Products />
      <OurClients />
      <Footer />
      <Contact />
    </>
  );
}
