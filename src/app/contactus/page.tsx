import Footer from "@/components/custom/Footer";
import ContactUs from "./_components/ContactUs";
import Hero from "./_components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us ",
};
export default function Page() {
  return (
    <>
      <Hero />
      <ContactUs />
      <Footer />
    </>
  );
}
