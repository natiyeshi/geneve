"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AttractionCardShow } from "@/components/attraction-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import attractionLanding from "@/../public/assets/image/attraction-landing.jpg"
import gmel from "@/../public/images/gmel.jpg"

// Import new attraction images
import dubai from "@/../public/images/ni/SaudiArabia.jpg" // Using Saudi image for Dubai temporarily
import china from "@/../public/images/ni/china.jpg"
import istanbul from "@/../public/images/ni/Istanbul.jpg"
import usa from "@/../public/images/ni/USA.jpg"
import jerusalem from "@/../public/images/ni/Jerusalem.jpg"
import saudiArabia from "@/../public/images/ni/SaudiArabia.jpg"
import france from "@/../public/images/ni/france.jpeg"

import Link from "next/link"

// Create a client component for the attractions content
function AttractionsContent() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('q');

  useEffect(() => {
    if (destination) {
      const element = document.getElementById(`attraction-${destination}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a highlight effect
        element.classList.add('highlight-attraction');
        setTimeout(() => {
          element.classList.remove('highlight-attraction');
        }, 2000);
      }
    }
  }, [destination]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-center">
            Let Geneve open up a world of wonders and create magical memories that will stay with you far beyond your
            travels. Whether you&apos;re seeking cultural experiences, luxury shopping, historical landmarks, or modern
            marvels, we are here to create a seamless experience while handcrafting your bespoke journey to these
            extraordinary destinations.
          </p>
        </div>

        <h2 className="text-3xl font-serif font-light text-[#09163A] mb-12">Featured Attractions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div id="attraction-dubai">
            <AttractionCardShow title="Dubai" imageSrc={dubai} href="/attractions?q=dubai" large />
          </div>
          <div id="attraction-usa">
            <AttractionCardShow title="USA" imageSrc={usa} href="/attractions?q=usa" large />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div id="attraction-china">
            <AttractionCardShow title="China" imageSrc={china} href="/attractions?q=china" />
          </div>
          <div id="attraction-istanbul">
            <AttractionCardShow title="Istanbul" imageSrc={istanbul} href="/attractions?q=istanbul" />
          </div>
          <div id="attraction-jerusalem">
            <AttractionCardShow title="Jerusalem" imageSrc={jerusalem} href="/attractions?q=jerusalem" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div id="attraction-saudi-arabia">
            <AttractionCardShow title="Saudi Arabia" imageSrc={saudiArabia} href="/attractions?q=saudi-arabia" />
          </div>
          <div id="attraction-france">
            <AttractionCardShow title="France" imageSrc={france} href="/attractions?q=france" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8">Ready to Explore?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our travel designers are ready to craft your perfect journey to any of our luxury attractions.
          </p>
          <Link href="/contact">
            <Button className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main page component
export default function AttractionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={gmel}
          alt="Luxury attractions"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09163A]/60 to-[#09163A]/30" />

        {/* Header */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">Luxury Attractions</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover handpicked destinations that offer unique and authentic experiences
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Suspense */}
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <AttractionsContent />
      </Suspense>

      {/* Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

// Add this CSS to your global styles or create a new style block
const styles = `
  @keyframes highlight {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }

  .highlight-attraction {
    animation: highlight 1s ease-in-out;
    box-shadow: 0 0 20px rgba(238, 29, 70, 0.3);
    border-radius: 8px;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
