import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AttractionCardShow } from "@/components/attraction-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import attractionLanding from "@/../public/assets/image/attraction-landing.jpg"

import gmel from "@/../public/images/gmel.jpg"


import uk from "@/../public/assets/image/attraction/uk.jpg"
import ireland from "@/../public/assets/image/attraction/ireland.jpg"
import europe from "@/../public/assets/image/attraction/europe.jpg"
import africa from "@/../public/assets/image/attraction/africa.jpg"
import america from "@/../public/assets/image/attraction/america.jpg"
import asia from "@/../public/assets/image/attraction/asia.jpg"
import islands from "@/../public/assets/image/attraction/iceland.jpg"
import polar from "@/../public/assets/image/attraction/polar.jpg"
import Link from "next/link"

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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-center">
              Let Geneve open up a world of wonders and create magical memories that will stay with you far beyond your
              travels. Whatever your travel preference may be, whether you are looking for a cultural city break, a
              child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover, we
              are here to create a seamless experience while handcrafting your bespoke journey.
            </p>
          </div>

          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-12">Featured Attractions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AttractionCardShow title="Ireland" imageSrc={ireland} href="/attractions?q=ireland" large />
            <AttractionCardShow title="UK" imageSrc={uk} href="/attractions?q=uk" large />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AttractionCardShow title="Classic Europe" imageSrc={europe} href="/attractions?q=europe" />
            <AttractionCardShow title="Africa" imageSrc={africa} href="/attractions?q=africa" />
            <AttractionCardShow title="The Americas" imageSrc={america} href="/attractions?q=americas" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AttractionCardShow title="Asia" imageSrc={asia} href="/attractions?q=asia" />
            <AttractionCardShow title="Exotic Islands" imageSrc={islands} href="/attractions?q=islands" />
            <AttractionCardShow title="Polar Regions" imageSrc={polar} href="/attractions?q=polar" />
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

      {/* Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
