"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PartnerLogos } from "@/components/partner-logos";
import { ExperienceButton } from "@/components/experience-button";
import { AttractionCard } from "@/components/attraction-card";
import { TestimonialSection } from "@/components/testimonial-section";
import NewsSection from "@/components/news-section";
import { ExperienceDesigners } from "@/components/experience-designers";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { SearchDialog } from "@/components/search-dialog";
import { SiteHeader } from "@/components/site-header";
import { HeroCarousel } from "@/components/hero-carousel";
import { FAQSection } from "@/components/faq-section";
import { 
  AnimatedSection, 
  AnimatedText, 
  AnimatedImage, 
  AnimatedCard,
  AnimatedWrapper 
} from "@/components/animated-wrapper";
import { motion } from "framer-motion";

import gmel from "@/../public/images/gmel.jpg"

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

import dubai from "@/../public/images/ni/SaudiArabia.jpg" // Using Saudi image for Dubai temporarily
import china from "@/../public/images/ni/china.jpg"
import istanbul from "@/../public/images/ni/Istanbul.jpg" // Using Istanbul image for Turkey temporarily
import usa from "@/../public/images/ni/USA.jpg"
import jerusalem from "@/../public/images/ni/Jerusalem.jpg"
import saudiArabia from "@/../public/images/ni/SaudiArabia.jpg"
import france from "@/../public/images/ni/france.jpeg"

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { t } = useTranslation();
  const [attractions, setAttractions] = useState<{ name: string; image: string }[]>([]);
  const [loadingAttractions, setLoadingAttractions] = useState(true);

  useEffect(() => {
    async function fetchAttractions() {
      try {
        const res = await fetch("/api/attractions");
        if (res.ok) {
          const data = await res.json();
          setAttractions(data);
        }
      } finally {
        setLoadingAttractions(false);
      }
    }
    fetchAttractions();
  }, []);

  const heroImages = [
    { src: gmel, alt: "Luxury travel destination" },
    { src: landingImage, alt: "Luxury travel destination" },
    { src: axum, alt: "Travel experience 1" },
    { src: abay, alt: "Travel experience 2" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <HeroCarousel images={heroImages} interval={5000} />

        {/* Header/Navigation */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto text-center pt-16 md:pt-0">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="d uppercase text-3xl md:text-6xl font-serif font-light text-white mb-6 fade-in"
            >
              {t('home.hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="d text-2xl text-white/90 max-w-2xl mx-auto mb-12 slide-up"
            >
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center mt-12 gap-6"
            >
              <ExperienceButton label={t('home.cta.packages')} href="/packages" />
              <ExperienceButton
                label={t('home.cta.contact')}
                href="/contact"
                active={true}
              />
            </motion.div>
          </div>
        </div>

        {/* Partner Logos */}
        {/* <div className="absolute bottom-12 left-0 right-0 hidden md:block">
          <PartnerLogos />
        </div> */}
      </div>

      {/* About Geneve Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedImage delay={0.2}>
            <Image
              src={ertu}
              alt="Scenic travel destination"
              width={800}
              height={600}
              className="object-cover rounded-sm shadow-lg"
            />
          </AnimatedImage>
          <div className="max-w-xl">
            <AnimatedText delay={0.3}>
              <h2 className="text-4xl font-serif font-light text-[#09163A] mb-8">
                {t('home.about.title')}
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <p className="text-lg mb-6">
                {t('home.about.paragraph1')}
              </p>
            </AnimatedText>
            <AnimatedText delay={0.5}>
              <p className="text-lg mb-8">
                {t('home.about.paragraph2')}
              </p>
            </AnimatedText>
            <AnimatedWrapper delay={0.6}>
              <Button
                variant="outline"
                className="uppercase tracking-wider border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white"
                asChild
              >
                <Link href="/about">{t('home.about.cta')}</Link>
              </Button>
            </AnimatedWrapper>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Services */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText delay={0.2}>
                <h2 className="text-4xl font-serif font-light text-[#09163A] mb-8">
                  {t('home.services.title')}
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <p className="text-lg mb-8 max-w-xl">
                  {t('home.services.subtitle')}
                </p>
              </AnimatedText>
              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.4
                    }
                  }
                }}
                className="space-y-4 mb-8"
              >
                {[
                  t('home.services.items.flights'),
                  t('home.services.items.packages'),
                  t('home.services.items.hotels'),
                  t('home.services.items.visa'),
                  t('home.services.items.transport')
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start"
                  >
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
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <AnimatedWrapper delay={0.8}>
                <Button
                  variant="outline"
                  className="uppercase tracking-wider border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white"
                  asChild
                >
                  <Link href="/services">{t('home.services.cta')}</Link>
                </Button>
              </AnimatedWrapper>
            </div>
            <AnimatedImage delay={0.4} className="relative h-[500px]">
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
            </AnimatedImage>
          </div>
        </div>
      </AnimatedSection>

      {/* Luxury Attractions */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto">
          <AnimatedText delay={0.2}>
            <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-12">
              {t('home.attractions.title')}
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-16">
              {t('home.attractions.description')}
            </p>
          </AnimatedText>

          {loadingAttractions ? (
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
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            >
              {attractions.map((attr, idx) => (
                <motion.div
                  key={attr.name + idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 30 },
                    visible: { opacity: 1, scale: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <AttractionCard
                    title={attr.name}
                    imageSrc={attr.image}
                    href={`/attractions?q=${encodeURIComponent(attr.name.toLowerCase().replace(/\s+/g, "-"))}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </AnimatedSection>

      {/* Experience Designers Section */}
      <ExperienceDesigners />

      <RovePartnerSection />

      {/* What Sets Us Apart */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedText delay={0.2}>
            <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-12">
              {t('home.features.title')}
            </h2>
          </AnimatedText>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: (
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
                ),
                title: t('home.features.global.title'),
                description: t('home.features.global.description')
              },
              {
                icon: (
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
                ),
                title: t('home.features.response.title'),
                description: t('home.features.response.description')
              },
              {
                icon: (
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
                ),
                title: t('home.features.support.title'),
                description: t('home.features.support.description')
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-md shadow-sm hover-lift"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-[#EE1D46]/10 rounded-full flex items-center justify-center mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-serif text-[#09163A] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <TestimonialSection />

      {/* News Section */}
      <NewsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
