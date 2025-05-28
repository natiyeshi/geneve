"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PartnerLogos } from "@/components/partner-logos";
import { ExperienceButton } from "@/components/experience-button";
import { AttractionCard } from "@/components/attraction-card";
import { TestimonialSection } from "@/components/testimonial-section";
import { NewsSection } from "@/components/news-section";
import { ExperienceDesigners } from "@/components/experience-designers";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { SearchDialog } from "@/components/search-dialog";
import { SiteHeader } from "@/components/site-header";
import { HeroCarousel } from "@/components/hero-carousel";

import landingImage from "@/../public/images/fasil.jpg";
import ertu from "@/../public/images/ertu.jpg";
import fuafuate from "@/../public/images/fafuate.png";
import axum from "@/../public/images/axum.png";
import abay from "@/../public/images/abay.jpg";
import dashen from "@/../public/images/dashen.png";

// import landingImage from "@/../public/images/land.jpg";
import travel1 from "@/../public/assets/image/travel-1.png";
import travel2 from "@/../public/assets/image/travel-2.png";
import travel3 from "@/../public/assets/image/travel-3.jpg";
import travel4 from "@/../public/assets/image/travel-4.jpg";
import travel5 from "@/../public/assets/image/travel-5.jpg";



import uk from "@/../public/assets/image/attraction/uk.jpg";
import ireland from "@/../public/assets/image/attraction/ireland.jpg";
import europe from "@/../public/assets/image/attraction/europe.jpg";
import africa from "@/../public/assets/image/attraction/africa.jpg";
import america from "@/../public/assets/image/attraction/america.jpg";

import RovePartnerSection from "@/components/Pr";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  const heroImages = [
    { src: landingImage, alt: "Luxury travel destination" },
    { src: axum, alt: "Travel experience 1" },
    { src: abay, alt: "Travel experience 2" },
    { src: dashen, alt: "Travel experience 3" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <HeroCarousel images={heroImages} interval={6000} />

        {/* Header/Navigation */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto text-center pt-16 md:pt-0">
            <h1 className="d uppercase text-3xl md:text-6xl font-serif font-light text-white mb-6 fade-in">
              Geneve Getaway
            </h1>
            <p
              className="d text-2xl text-white/90 max-w-2xl mx-auto mb-12 slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Your passport to the extraordinary
            </p>
            <div className="flex flex-wrap justify-center mt-12 gap-6">
              <ExperienceButton label="OUR PACKAGES" href="/packages" />
              <ExperienceButton
                label="CONTACT US"
                href="/contact"
                active={true}
              />
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        {/* <div className="absolute bottom-12 left-0 right-0 hidden md:block">
          <PartnerLogos />
        </div> */}
      </div>

      {/* Rest of the page content remains the same */}
      {/* About Geneve Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <Image
              src={ertu}
              alt="Scenic travel destination"
              width={800}
              height={600}
              className="object-cover rounded-sm shadow-lg"
            />
          </div>
          <div className="max-w-xl slide-in-right">
            <h2 className="text-4xl font-serif font-light text-[#09163A] mb-8">
              The Spirit of Geneva,
              <br />
              The Art of Travel
            </h2>
            <p className="text-lg mb-6">
              The name Geneve is inspired by the city of Geneva, a global center
              for diplomacy and international cooperation. Known as the
              &ldquo;Peace Capital,&rdquo; Geneva represents unity, excellence,
              and internationalism.
            </p>
            <p className="text-lg mb-8">
              Our vision is to build a large-scale, peaceful, and
              high-performing company that reflects the spirit of Geneva itself.
              We provide comprehensive travel services with a modern approach
              that communicates peace, movement, and exploration.
            </p>
            <Button
              variant="outline"
              className="uppercase tracking-wider border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white"
              asChild
            >
              <Link href="/about">LEARN MORE ABOUT US</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-4xl font-serif font-light text-[#09163A] mb-8">
                Comprehensive
                <br />
                Travel Services
              </h2>
              <p className="text-lg mb-8 max-w-xl">
                Geneve Getaway provides a comprehensive range of domestic and
                international travel services, including:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#EE1D46] mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Domestic and international flight booking</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#EE1D46] mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>
                    Tailored travel packages for weddings, exhibitions, and
                    vacations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#EE1D46] mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Hotel reservations and bookings</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#EE1D46] mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Visa facilitation services</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#EE1D46] mr-2 mt-1"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Airport shuttle and transport services</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="uppercase tracking-wider border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white"
                asChild
              >
                <Link href="/services">EXPLORE OUR SERVICES</Link>
              </Button>
            </div>
            <div className="relative h-[500px] slide-in-right">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-gray-200 rounded-md shadow-lg overflow-hidden">
                <Image
                  src={travel4}
                  alt="Luxury hotel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-gray-300 rounded-md shadow-lg overflow-hidden">
                <Image
                  src={fuafuate}
                  alt="Airport transfer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Attractions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-12 slide-up">
            Luxury Attractions
          </h2>
          <p
            className="text-lg text-center max-w-3xl mx-auto mb-16 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Let Geneve open up a world of wonders and create magical memories
            that will stay with you far beyond your travels. Whatever your
            travel preference may be, whether you are looking for a cultural
            city break, a child friendly family holiday, unlimited adventure, a
            romantic getaway or just to escape and uncover, we are here to
            create a seamless experience while handcrafting your bespoke
            journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <AttractionCard
              title="Ireland"
              imageSrc={ireland}
              href="/attractions?q=ireland"
              large
            />
            <AttractionCard
              title="UK"
              imageSrc={uk}
              href="/attractions?q=uk"
              large
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <AttractionCard
              title="Classic Europe"
              imageSrc={europe}
              href="/attractions?q=europe"
            />
            <AttractionCard
              title="Africa"
              imageSrc={africa}
              href="/attractions?q=africa"
            />
            <AttractionCard
              title="The Americas"
              imageSrc={america}
              href="/attractions?q=americas"
            />
          </div>
        </div>
      </section>

      {/* Experience Designers Section */}
      <ExperienceDesigners />

      <RovePartnerSection />

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-12 slide-up">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="bg-white p-8 rounded-md shadow-sm hover-lift slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-16 h-16 bg-[#EE1D46]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#EE1D46]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                Global Presence
              </h3>
              <p className="text-gray-700">
                Our international offices enhance global support, ensuring you
                have assistance wherever your travels take you.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-md shadow-sm hover-lift slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-[#EE1D46]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#EE1D46]"
                >
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                Immediate Response
              </h3>
              <p className="text-gray-700">
                Prompt and immediate response to any issues during ticketing or
                flight processes, ensuring peace of mind throughout your
                journey.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-md shadow-sm hover-lift slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-16 h-16 bg-[#EE1D46]/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#EE1D46]"
                >
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                  <path d="M12 13v8" />
                  <path d="M12 3v3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-700">
                Strong 24/7 online presence ensuring continuous customer support
                whenever and wherever you need assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* News Section */}
      <NewsSection />

      {/* Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
