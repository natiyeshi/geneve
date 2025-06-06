"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import packageLanding from "@/../public/assets/image/package-landing.jpg"
import { PackageSearch } from "./package-search"
import { Button } from "@/components/ui/button"

export default function PackagesPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={packageLanding}
          alt="Travel Packages"
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
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 fade-in">
              {t('packages.hero.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto slide-up">
              {t('packages.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Suspense fallback={
          <div className="container mx-auto py-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EE1D46] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading packages...</p>
          </div>
        }>
          <PackageSearch />
        </Suspense>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center slide-up">
          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-6">
            {t('packages.customPackage.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            {t('packages.customPackage.description')}
          </p>
          <Link href="/contact">
            <Button className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white">
              {t('packages.customPackage.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
} 