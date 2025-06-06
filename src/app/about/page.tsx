"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { CTASection } from "@/components/cta-section";
import { SisterCompany } from "@/components/sister-company";
import Team from "./Team";
import { useTranslation } from "react-i18next";

import abay from "@/../public/images/abay.jpg";

import img from "@/../public/assets/image/landing.jpg";
import img3 from "@/../public/assets/image/blog-3.jpg";
import img2 from "@/../public/assets/image/blog-2.jpg";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[75vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#09163A]/30 to-[#09163A]/30" />

        {/* Header */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 fade-in">
              {t('about.hero.title')}
            </h1>
            <p
             className="text-xl text-white/90 max-w-2xl mx-auto slide-up">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      {/* <div className="w-full bg-black">
        <video
          className="w-full h-[60vh] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Our Story */}
      <section className="py-20 bg-white" id="story">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8">
                {t('about.story.title')}
              </h2>
              <p className="text-lg mb-6">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-lg mb-6">
                {t('about.story.paragraph2')}
              </p>
              <p className="text-lg">
                {t('about.story.paragraph3')}
              </p>
            </div>
            <div className="relative h-[500px] slide-in-right">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-gray-200 rounded-md overflow-hidden shadow-lg">
                <Image
                  src={img2}
                  alt="Luxury travel experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-gray-300 rounded-md overflow-hidden shadow-lg">
                <Image
                  src={img3}
                  alt="Geneve founders"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8 text-center slide-up">
            {t('about.services.title')}
          </h2>
          <p
            className="text-lg text-center max-w-3xl mx-auto mb-12 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t('about.services.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.services.items.flights.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.services.items.flights.description')}
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
                  <path d="M2 20h20" />
                  <path d="M5 20V8.2a3 3 0 0 1 .87-2.13l6.5-6.5a1 1 0 0 1 1.27 0l6.5 6.5A3 3 0 0 1 21 8.2V20" />
                  <path d="M9 20V8h8v12" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.services.items.hotels.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.services.items.hotels.description')}
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-md shadow-sm hover-lift slide-up"
              style={{ animationDelay: "0.4s" }}
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.services.items.visa.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.services.items.visa.description')}
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-md shadow-sm hover-lift slide-up"
              style={{ animationDelay: "0.5s" }}
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
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.services.items.transfers.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.services.items.transfers.description')}
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-md shadow-sm hover-lift slide-up"
              style={{ animationDelay: "0.6s" }}
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
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.services.items.packages.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.services.items.packages.description')}
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-md shadow-sm hover-lift slide-up"
              style={{ animationDelay: "0.7s" }}
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
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.services.items.cargo.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.services.items.cargo.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white" id="values">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-12 text-center slide-up">
            {t('about.features.title')}
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EE1D46]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
                {t('about.features.global.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.features.global.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#EE1D46]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
                {t('about.features.response.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.features.response.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#EE1D46]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
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
                {t('about.features.support.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.features.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8 text-center slide-up">
            {t('about.audience.title')}
          </h2>
          <p
            className="text-lg text-center max-w-3xl mx-auto mb-12 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t('about.audience.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.audience.business.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.audience.business.description')}
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
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-[#09163A] mb-4">
                {t('about.audience.vacationers.title')}
              </h3>
              <p className="text-gray-700">
                {t('about.audience.vacationers.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <Team />

      <CTASection />

      <SisterCompany />

      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
