"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AttractionCardShow } from "@/components/attraction-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import { useTranslation } from "react-i18next"
import attractionLanding from "@/../public/assets/image/attraction-landing.jpg"
import gmel from "@/../public/images/gmel.jpg"

// Import new attraction images
import dubai from "@/../public/images/ni/SaudiArabia.jpg" // Using Saudi image for Dubai temporarily
import china from "@/../public/images/ni/china.jpg"
import istanbul from "@/../public/images/ni/Istanbul.jpg" // Using Istanbul image for Turkey temporarily
import usa from "@/../public/images/ni/USA.jpg"
import jerusalem from "@/../public/images/ni/Jerusalem.jpg"
import saudiArabia from "@/../public/images/ni/SaudiArabia.jpg"
import france from "@/../public/images/ni/france.jpeg"

import Link from "next/link"
import { motion } from "framer-motion"

// Create a client component for the attractions content
function AttractionsContent() {
  const searchParams = useSearchParams();
  const destination = searchParams?.get('q') || null;
  const { t } = useTranslation();
  const [attractions, setAttractions] = useState<{ name: string; image: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAttractions() {
      try {
        const res = await fetch("/api/attractions");
        if (res.ok) {
          const data = await res.json();
          setAttractions(data);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchAttractions();
  }, []);

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-center">
            {t('attractions.intro')}
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-3xl font-serif font-light text-[#09163A] mb-12"
        >
          {t('attractions.featuredTitle')}
        </motion.h2>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading attractions...</div>
        ) : attractions.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No attractions found.</div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          >
            {attractions.map((attr, idx) => (
              <motion.div
                key={attr.name + idx}
                id={`attraction-${attr.name.toLowerCase().replace(/\s+/g, "-")}`}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.5, type: "spring" }}
                className=""
              >
                <AttractionCardShow
                  title={attr.name}
                  imageSrc={attr.image}
                  href={`/attractions?q=${encodeURIComponent(attr.name.toLowerCase().replace(/\s+/g, "-"))}`}
                  large={idx < 2}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-light text-[#09163A] mb-8"
          >
            {t('attractions.cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            {t('attractions.cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white">{t('attractions.cta.buttonText')}</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main page component
export default function AttractionsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={gmel}
          alt={t('attractions.hero.title')}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09163A]/60 to-[#09163A]/30" />

        {/* Header */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="max-w-4xl px-4 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">{t('attractions.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('attractions.hero.subtitle')}
            </p>
          </motion.div>
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
