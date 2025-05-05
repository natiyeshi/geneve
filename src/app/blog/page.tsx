import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"

import blog1 from "@/../public/assets/image/blog-1.jpg"
import blog2 from "@/../public/assets/image/blog-2.jpg"
import blog3 from "@/../public/assets/image/blog-3.jpg"
import blog4 from "@/../public/assets/image/mountain-1.jpg"
import blog5 from "@/../public/assets/image/attraction/iceland.jpg"
import blog6 from "@/../public/assets/image/attraction/africa.jpg"
import blog7 from "@/../public/assets/image/attraction/america.jpg"
import blog8 from "@/../public/assets/image/attraction/asia.jpg"
import blog9 from "@/../public/assets/image/attraction/europe.jpg"

// Sample blog posts data
const blogPosts = [
  {
    id: "hidden-gems-mediterranean",
    title: "The Hidden Gems of the Mediterranean Coast",
    excerpt:
      "Discover the secluded beaches, charming villages, and authentic culinary experiences that make the Mediterranean coast a treasure trove for luxury travelers seeking unique experiences away from the crowds.",
    date: "May 15, 2023",
    category: "Destinations",
    imageSrc: blog1,
    featured: true,
  },
  {
    id: "luxury-safari-tanzania",
    title: "Luxury Safari Experiences in Tanzania",
    excerpt:
      "Explore the Serengeti in style with our curated luxury safari experiences that combine adventure with comfort.",
    date: "April 28, 2023",
    category: "Travel",
    imageSrc: blog2,
    featured: false,
  },
  {
    id: "slow-travel-tuscany",
    title: "The Art of Slow Travel in Tuscany",
    excerpt:
      "Discover the beauty of taking your time and immersing yourself in the culture, cuisine, and landscapes of Tuscany.",
    date: "April 15, 2023",
    category: "Experiences",
    imageSrc: blog3,
    featured: false,
  },
  {
    id: "greek-island-hopping",
    title: "Island Hopping in the Greek Archipelago",
    excerpt:
      "From Santorini to Mykonos, explore the diverse beauty of the Greek islands with our luxury island-hopping guide.",
    date: "March 30, 2023",
    category: "Destinations",
    imageSrc: blog4,
    featured: false,
  },
  {
    id: "flavors-of-japan",
    title: "Culinary Journeys: The Flavors of Japan",
    excerpt:
      "Embark on a gastronomic adventure through Japan, from Tokyo's Michelin-starred restaurants to Kyoto's traditional cuisine.",
    date: "March 12, 2023",
    category: "Culinary",
    imageSrc: blog5,
    featured: false,
  },
  {
    id: "best-luxury-hotels-paris",
    title: "The Best Luxury Hotels in Paris for 2023",
    excerpt:
      "Our curated selection of the most exquisite accommodations in the City of Light, from historic palaces to boutique gems.",
    date: "May 10, 2023",
    category: "Accommodations",
    imageSrc: blog6,
    featured: false,
  },
  {
    id: "safari-guide-africa",
    title: "Ultimate Guide to Safari Experiences in Africa",
    excerpt:
      "Everything you need to know about planning the perfect African safari, from choosing the right season to packing essentials.",
    date: "April 22, 2023",
    category: "Travel Tips",
    imageSrc: blog7,
    featured: false,
  },
  {
    id: "private-islands-getaway",
    title: "Top 10 Private Islands for Your Next Getaway",
    excerpt: "Escape to these exclusive private islands offering unparalleled luxury, privacy, and natural beauty.",
    date: "April 5, 2023",
    category: "Destinations",
    imageSrc: blog8,
    featured: false,
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <Image
          src={blog1}
          alt="Blog and Press"
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
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 fade-in">Blog & Press</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto slide-up">
              Insights, stories, and news from the world of luxury travel
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-light text-[#09163A] mb-12 slide-up">Latest Articles</h2>

            {/* All Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={post.category}
                  imageSrc={post.imageSrc}
                  href={`/blog/${post.id}`}
                  className={`slide-up`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                />
              ))}
            </div>

            {/* Pagination */}
            {/* <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" className="border-[#09163A] text-[#09163A]">
                  Previous
                </Button>
                <Button className="bg-[#09163A] text-white hover:bg-[#09163A]/90">1</Button>
                <Button variant="outline" className="border-[#09163A] text-[#09163A]">
                  2
                </Button>
                <Button variant="outline" className="border-[#09163A] text-[#09163A]">
                  3
                </Button>
                <Button variant="outline" className="border-[#09163A] text-[#09163A]">
                  Next
                </Button>
              </div>
            </div> */}
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

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  imageSrc: string | any
  href: string
  className?: string
  style?: React.CSSProperties
}

function BlogCard({ title, excerpt, date, category, imageSrc, href, className, style }: BlogCardProps) {
  return (
    <div className={`group hover-lift ${className}`} style={style}>
      <Link href={href} className="block relative aspect-[4/3] mb-4 rounded-md overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="mb-2">
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="text-xl font-serif text-[#09163A] group-hover:text-[#EE1D46] mb-2">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <Link href={href} className="text-[#09163A] font-medium hover:text-[#EE1D46] inline-flex items-center">
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
