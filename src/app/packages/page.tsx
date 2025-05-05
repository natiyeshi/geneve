"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import packageLanding from "@/../public/assets/image/package-landing.jpg"

// Sample package data
const allPackages = [
  {
    id: "italian-splendor",
    title: "Italian Splendor",
    location: "Rome, Florence, Venice",
    duration: "14 Days",
    description:
      "Experience the best of Italy on this comprehensive luxury journey through Rome, Florence, Venice, and the Amalfi Coast.",
    price: "$12,500",
    imageSrc: packageLanding,
    category: "cultural",
    featured: true,
  },
  {
    id: "african-safari",
    title: "African Safari Adventure",
    location: "Kenya & Tanzania",
    duration: "10 Days",
    description:
      "Experience the magic of East Africa on this unforgettable safari adventure through Kenya and Tanzania's most iconic wildlife reserves.",
    price: "$9,800",
    imageSrc: packageLanding,
    category: "adventure",
    featured: false,
  },
  {
    id: "japan-journey",
    title: "Japan Journey",
    location: "Tokyo, Kyoto, Hakone",
    duration: "12 Days",
    description:
      "Discover the perfect balance of ancient traditions and modern wonders on this comprehensive tour of Japan.",
    price: "$10,500",
    imageSrc: packageLanding,
    category: "cultural",
    featured: false,
  },
  {
    id: "greek-islands",
    title: "Greek Islands Escape",
    location: "Athens, Santorini, Mykonos",
    duration: "9 Days",
    description:
      "Indulge in the beauty of the Greek Islands with this luxury escape to Athens, Santorini, and Mykonos.",
    price: "$8,900",
    imageSrc: packageLanding,
    category: "wellness",
    featured: false,
  },
  {
    id: "peruvian-expedition",
    title: "Peruvian Expedition",
    location: "Lima, Cusco, Machu Picchu",
    duration: "11 Days",
    description:
      "Journey through Peru's most iconic destinations, from the vibrant capital of Lima to the ancient ruins of Machu Picchu.",
    price: "$7,900",
    imageSrc: packageLanding,
    category: "adventure",
    featured: false,
  },
  {
    id: "thai-wellness",
    title: "Thai Wellness Retreat",
    location: "Bangkok, Chiang Mai, Phuket",
    duration: "13 Days",
    description:
      "Rejuvenate your mind, body, and soul on this wellness-focused journey through Thailand's most serene destinations.",
    price: "$9,200",
    imageSrc: packageLanding,
    category: "wellness",
    featured: false,
  },
]

export default function PackagesPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [sortOption, setSortOption] = useState("featured")
  const [displayedPackages, setDisplayedPackages] = useState(allPackages)

  // Filter and sort packages based on query and sort option
  useEffect(() => {
    let filtered = [...allPackages]

    // Filter by search query if present
    if (query) {
      const searchTerms = query.toLowerCase()
      filtered = filtered.filter(
        (pkg) =>
          pkg.title.toLowerCase().includes(searchTerms) ||
          pkg.location.toLowerCase().includes(searchTerms) ||
          pkg.description.toLowerCase().includes(searchTerms) ||
          pkg.category.toLowerCase().includes(searchTerms),
      )
    }

    // Sort packages
    switch (sortOption) {
      case "price-low":
        filtered.sort(
          (a, b) => Number.parseInt(a.price.replace(/\D/g, "")) - Number.parseInt(b.price.replace(/\D/g, "")),
        )
        break
      case "price-high":
        filtered.sort(
          (a, b) => Number.parseInt(b.price.replace(/\D/g, "")) - Number.parseInt(a.price.replace(/\D/g, "")),
        )
        break
      case "duration-short":
        filtered.sort((a, b) => Number.parseInt(a.duration) - Number.parseInt(b.duration))
        break
      case "duration-long":
        filtered.sort((a, b) => Number.parseInt(b.duration) - Number.parseInt(a.duration))
        break
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    setDisplayedPackages(filtered)
  }, [query, sortOption])

  // Get featured package
  const featuredPackage = allPackages.find((pkg) => pkg.featured)

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
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 fade-in">Travel Packages</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto slide-up">
              Curated luxury journeys to the world&apos;s most remarkable destinations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-16 slide-up">
            <p className="text-lg text-center">
              Our expertly crafted travel packages combine the finest accommodations, exclusive experiences, and
              personalized service to create unforgettable journeys. While each package can be customized to your
              preferences, they offer a curated starting point for your luxury travel experience.
            </p>
          </div>

          {/* Search Results */}
          {query && (
            <div className="mb-12 slide-up">
              <h2 className="text-3xl font-serif font-light text-[#09163A] mb-6">Search Results for &ldquo;{query}&rdquo;</h2>
              {displayedPackages.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-lg text-gray-600">No packages found matching your search criteria.</p>
                  <Button className="mt-4 bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white" asChild>
                    <Link href="/packages">View All Packages</Link>
                  </Button>
                </div>
              ) : (
                <p className="text-gray-600 mb-8">Found {displayedPackages.length} packages matching your search.</p>
              )}
            </div>
          )}

          {/* Featured Package (only show if not searching) */}
          {!query && featuredPackage && (
            <div className="mb-20 slide-up">
              <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8">Featured Package</h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 relative aspect-[16/9] lg:aspect-auto">
                  <Image
                    src={featuredPackage.imageSrc || "/placeholder.svg"}
                    alt={featuredPackage.title}
                    fill
                    className="object-cover rounded-md"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#EE1D46]">Featured</Badge>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-serif text-[#09163A] mb-2">{featuredPackage.title}</h3>
                  <p className="text-[#EE1D46] font-medium mb-4">
                    {featuredPackage.duration} | {featuredPackage.location}
                  </p>
                  <p className="text-gray-700 mb-6">{featuredPackage.description}</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
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
                      <span>Luxury accommodations in 5-star hotels and boutique properties</span>
                    </div>
                    <div className="flex items-start">
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
                      <span>Private guided tours of iconic landmarks and hidden gems</span>
                    </div>
                    <div className="flex items-start">
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
                      <span>Exclusive culinary experiences, including cooking classes and wine tastings</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-2xl font-serif text-[#09163A]">{featuredPackage.price} per person</p>
                    </div>
                    <Button className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white" asChild>
                      <Link href={`/packages/${featuredPackage.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Package Categories (only show if not searching) */}
          {!query && (
            <div className="mb-16 slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link
                  href="/packages?q=cultural"
                  className="group block relative aspect-[4/3] overflow-hidden rounded-md hover-lift"
                >
                  <Image
                    src={packageLanding}
                    alt="Cultural Journeys"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-serif">Cultural Journeys</h3>
                  </div>
                </Link>
                <Link
                  href="/packages?q=adventure"
                  className="group block relative aspect-[4/3] overflow-hidden rounded-md hover-lift"
                >
                  <Image
                    src={packageLanding}
                    alt="Adventure Expeditions"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-serif">Adventure Expeditions</h3>
                  </div>
                </Link>
                <Link
                  href="/packages?q=wellness"
                  className="group block relative aspect-[4/3] overflow-hidden rounded-md hover-lift"
                >
                  <Image
                    src={packageLanding}
                    alt="Wellness Retreats"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-serif">Wellness Retreats</h3>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* All Packages */}
          <div className="slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif font-light text-[#09163A]">
                {query ? "Matching Packages" : "All Packages"}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  className="border border-gray-300 rounded-sm p-2 text-sm"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration-short">Duration: Shortest to Longest</option>
                  <option value="duration-long">Duration: Longest to Shortest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  title={pkg.title}
                  location={pkg.location}
                  duration={pkg.duration}
                  description={pkg.description}
                  price={pkg.price}
                  imageSrc={pkg.imageSrc}
                  id={pkg.id}
                />
              ))}
            </div>

            {/* Pagination - only show if we have enough packages */}
            {displayedPackages.length > 6 && (
              <div className="flex justify-center mt-12">
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
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center slide-up">
          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-6">Looking for Something Unique?</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Our travel designers can create a completely customized package tailored to your specific preferences,
            interests, and travel style.
          </p>
          <Link href="/contact">
            <Button className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white">Create Custom Package</Button>
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

interface PackageCardProps {
  title: string
  location: string
  duration: string
  description: string
  price: string
  imageSrc: any
  id: string
}

// Update the PackageCard component to link to the detail page
function PackageCard({ title, location, duration, description, price, imageSrc, id }: PackageCardProps) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative aspect-[4/3]">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-serif text-[#09163A]">{title}</CardTitle>
        <CardDescription>
          <span className="text-[#EE1D46] font-medium">
            {duration} | {location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center space-x-4">
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
            className="text-[#EE1D46]"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
          <span className="text-sm">Luxury Accommodations</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">From</span>
          <p className="text-lg font-serif text-[#09163A]">{price} per person</p>
        </div>
        <Button
          variant="outline"
          className="border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white"
          asChild
        >
          <Link href={`/packages/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
