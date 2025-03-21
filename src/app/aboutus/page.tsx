import Footer from "@/components/custom/Footer";
import Hero from "./_components/Hero";
import About from "./_components/About";
import BlogCarousel from "../(home)/_components/BlogCarousel";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <BlogCarousel />
      <Footer />
    </>
  );
}
