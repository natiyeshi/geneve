import BlogCarousel from "./_components/BlogCarousel";
import Footer from "../../components/custom/Footer";
import Hero from "./_components/Hero";
import HotPicks from "./_components/HotPicks";
import OurClients from "../../components/custom/OurClients";
import OurProducts from "./_components/OurProducts";
import Testimonials from "./_components/Testimonials";
import WhoWeAre from "./_components/WhoWeAre";

export default async function Home() {
  return (
    <div className="relative">
      <Hero />
      <WhoWeAre />
      <OurProducts />
      <HotPicks />
      <Testimonials />
      <OurClients />
      <BlogCarousel />
      <Footer /> 
      {/* 
      */}
    </div>
  );
}
