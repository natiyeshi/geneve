"use client"

import { useState, useEffect, Suspense } from "react"
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
import { Hotel, Utensils, Plane } from "lucide-react"

// Define a proper interface for the package data with optional properties
interface Package {
  id: string;
  name?: string;
  tagline?: string;
  locations?: string[];
  mapUrl?: string;
  duration?: string;
  inclusions?: {
    flights?: boolean;
    accommodation?: string;
    airportTransfers?: boolean;
    guidedTours?: boolean;
    meals?: string;
    travelInsurance?: boolean;
  };
  exclusions?: string[];
  itinerary?: Array<{ day: number; description: string }>;
  pricing?: {
    pricePerPerson?: number;
    doubleOccupancy?: number;
    tripleOccupancy?: number;
    earlyBirdDiscount?: number;
    groupDiscount?: number;
    paymentPlans?: string[];
  };
  bookingInfo?: {
    bookingMethods?: string[];
    consultantName?: string;
    officeAddress?: string;
    bookingLink?: string;
  };
  termsAndConditions?: {
    cancellationPolicy?: string;
    refundPolicy?: string;
    passportRequirements?: string;
    visaRequirements?: string;
  };
  images?: any[];
  activityIcons?: string[];
  category?: string;
  featured?: boolean;
}

// Update the package data with proper typing
export const allPackages: Package[] = [
  {
    id: "italian-splendor",
    name: "Italian Splendor",
    tagline: "Experience the Art, Culture, and Cuisine of Italy",
    locations: ["Rome", "Florence", "Venice", "Amalfi Coast"],
    mapUrl: "https://maps.google.com/...",
    duration: "14 Days / 13 Nights",
    inclusions: {
      flights: true,
      accommodation: "5-Star Luxury Hotels",
      airportTransfers: true,
      guidedTours: true,
      meals: "Breakfast & Dinner",
      travelInsurance: true
    },
    exclusions: [
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    itinerary: [
      { day: 1, description: "Arrival in Rome, Welcome Dinner" },
      { day: 2, description: "Vatican City & Colosseum Tour" },
      { day: 3, description: "Roman Forum & City Exploration" },
      { day: 4, description: "Transfer to Florence, Uffizi Gallery" }
    ],
    pricing: {
      pricePerPerson: 12500,
      doubleOccupancy: 11500,
      tripleOccupancy: 10500,
      earlyBirdDiscount: 1000,
      groupDiscount: 1500,
      paymentPlans: ["Full Payment", "50% Deposit + Balance"]
    },
    bookingInfo: {
      bookingMethods: ["Website", "Phone", "Email"],
      consultantName: "Sarah Johnson",
      officeAddress: "123 Travel Street, New York",
      bookingLink: "https://booking.example.com/italian-splendor"
    },
    termsAndConditions: {
      cancellationPolicy: "Free cancellation up to 30 days before departure",
      refundPolicy: "Full refund minus processing fees",
      passportRequirements: "Valid passport with 6 months validity",
      visaRequirements: "Schengen visa required for non-EU citizens"
    },
    images: [packageLanding],
    activityIcons: ["culture", "food", "history", "shopping"],
    category: "cultural",
    featured: true
  },
  {
    id: "african-safari",
    name: "African Safari Adventure",
    tagline: "Experience the magic of East Africa",
    locations: ["Kenya", "Tanzania"],
    mapUrl: "https://maps.google.com/...",
    duration: "10 Days / 9 Nights",
    inclusions: {
      flights: true,
      accommodation: "Luxury Safari Lodges",
      airportTransfers: true,
      guidedTours: true,
      meals: "Full Board",
      travelInsurance: true
    },
    exclusions: [
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    itinerary: [
      { day: 1, description: "Arrival in Nairobi" },
      { day: 2, description: "Transfer to Masai Mara" }
    ],
    pricing: {
      pricePerPerson: 9800,
      doubleOccupancy: 8800,
      tripleOccupancy: 7800,
      earlyBirdDiscount: 800,
      groupDiscount: 1200,
      paymentPlans: ["Full Payment", "50% Deposit + Balance"]
    },
    bookingInfo: {
      bookingMethods: ["Website", "Phone", "Email"],
      consultantName: "John Smith",
      officeAddress: "123 Travel Street, New York",
      bookingLink: "https://booking.example.com/african-safari"
    },
    termsAndConditions: {
      cancellationPolicy: "Free cancellation up to 30 days before departure",
      refundPolicy: "Full refund minus processing fees",
      passportRequirements: "Valid passport with 6 months validity",
      visaRequirements: "East African visa required"
    },
    images: [packageLanding],
    activityIcons: ["safari", "wildlife", "adventure"],
    category: "adventure",
    featured: false
  },
  {
    id: "japan-journey",
    name: "Japan Journey",
    tagline: "Discover the perfect balance of ancient traditions and modern wonders",
    locations: ["Tokyo", "Kyoto", "Hakone"],
    mapUrl: "https://maps.google.com/...",
    duration: "12 Days / 11 Nights",
    inclusions: {
      flights: true,
      accommodation: "4-Star Hotels & Ryokan",
      airportTransfers: true,
      guidedTours: true,
      meals: "Breakfast & Select Dinners",
      travelInsurance: true
    },
    exclusions: [
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    itinerary: [
      { day: 1, description: "Arrival in Tokyo" },
      { day: 2, description: "Tokyo City Tour" }
    ],
    pricing: {
      pricePerPerson: 10500,
      doubleOccupancy: 9500,
      tripleOccupancy: 8500,
      earlyBirdDiscount: 900,
      groupDiscount: 1300,
      paymentPlans: ["Full Payment", "50% Deposit + Balance"]
    },
    bookingInfo: {
      bookingMethods: ["Website", "Phone", "Email"],
      consultantName: "Emma Wilson",
      officeAddress: "123 Travel Street, New York",
      bookingLink: "https://booking.example.com/japan-journey"
    },
    termsAndConditions: {
      cancellationPolicy: "Free cancellation up to 30 days before departure",
      refundPolicy: "Full refund minus processing fees",
      passportRequirements: "Valid passport with 6 months validity",
      visaRequirements: "Visa-free for most countries"
    },
    images: [packageLanding],
    activityIcons: ["culture", "food", "history"],
    category: "cultural",
    featured: false
  },
  {
    id: "greek-islands",
    name: "Greek Islands Escape",
    tagline: "Indulge in the beauty of the Greek Islands",
    locations: ["Athens", "Santorini", "Mykonos"],
    mapUrl: "https://maps.google.com/...",
    duration: "9 Days / 8 Nights",
    inclusions: {
      flights: true,
      accommodation: "Luxury Boutique Hotels",
      airportTransfers: true,
      guidedTours: true,
      meals: "Breakfast & Select Dinners",
      travelInsurance: true
    },
    exclusions: [
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    itinerary: [
      { day: 1, description: "Arrival in Athens" },
      { day: 2, description: "Athens City Tour" }
    ],
    pricing: {
      pricePerPerson: 8900,
      doubleOccupancy: 7900,
      tripleOccupancy: 6900,
      earlyBirdDiscount: 700,
      groupDiscount: 1100,
      paymentPlans: ["Full Payment", "50% Deposit + Balance"]
    },
    bookingInfo: {
      bookingMethods: ["Website", "Phone", "Email"],
      consultantName: "Michael Brown",
      officeAddress: "123 Travel Street, New York",
      bookingLink: "https://booking.example.com/greek-islands"
    },
    termsAndConditions: {
      cancellationPolicy: "Free cancellation up to 30 days before departure",
      refundPolicy: "Full refund minus processing fees",
      passportRequirements: "Valid passport with 6 months validity",
      visaRequirements: "Schengen visa required for non-EU citizens"
    },
    images: [packageLanding],
    activityIcons: ["beach", "culture", "relaxation"],
    category: "wellness",
    featured: false
  },
  {
    id: "peruvian-expedition",
    name: "Peruvian Expedition",
    tagline: "Journey through Peru's most iconic destinations",
    locations: ["Lima", "Cusco", "Machu Picchu"],
    mapUrl: "https://maps.google.com/...",
    duration: "11 Days / 10 Nights",
    inclusions: {
      flights: true,
      accommodation: "Boutique Hotels & Luxury Lodge",
      airportTransfers: true,
      guidedTours: true,
      meals: "Breakfast & Select Meals",
      travelInsurance: true
    },
    exclusions: [
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    itinerary: [
      { day: 1, description: "Arrival in Lima" },
      { day: 2, description: "Lima City Tour" }
    ],
    pricing: {
      pricePerPerson: 7900,
      doubleOccupancy: 6900,
      tripleOccupancy: 5900,
      earlyBirdDiscount: 600,
      groupDiscount: 1000,
      paymentPlans: ["Full Payment", "50% Deposit + Balance"]
    },
    bookingInfo: {
      bookingMethods: ["Website", "Phone", "Email"],
      consultantName: "David Lee",
      officeAddress: "123 Travel Street, New York",
      bookingLink: "https://booking.example.com/peruvian-expedition"
    },
    termsAndConditions: {
      cancellationPolicy: "Free cancellation up to 30 days before departure",
      refundPolicy: "Full refund minus processing fees",
      passportRequirements: "Valid passport with 6 months validity",
      visaRequirements: "Visa-free for most countries"
    },
    images: [packageLanding],
    activityIcons: ["adventure", "culture", "history"],
    category: "adventure",
    featured: false
  },
  {
    id: "thai-wellness",
    name: "Thai Wellness Retreat",
    tagline: "Rejuvenate your mind, body, and soul",
    locations: ["Bangkok", "Chiang Mai", "Phuket"],
    mapUrl: "https://maps.google.com/...",
    duration: "13 Days / 12 Nights",
    inclusions: {
      flights: true,
      accommodation: "Luxury Wellness Resorts",
      airportTransfers: true,
      guidedTours: true,
      meals: "Full Board with Wellness Menu",
      travelInsurance: true
    },
    exclusions: [
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    itinerary: [
      { day: 1, description: "Arrival in Bangkok" },
      { day: 2, description: "Bangkok Temple Tour" }
    ],
    pricing: {
      pricePerPerson: 9200,
      doubleOccupancy: 8200,
      tripleOccupancy: 7200,
      earlyBirdDiscount: 800,
      groupDiscount: 1200,
      paymentPlans: ["Full Payment", "50% Deposit + Balance"]
    },
    bookingInfo: {
      bookingMethods: ["Website", "Phone", "Email"],
      consultantName: "Lisa Chen",
      officeAddress: "123 Travel Street, New York",
      bookingLink: "https://booking.example.com/thai-wellness"
    },
    termsAndConditions: {
      cancellationPolicy: "Free cancellation up to 30 days before departure",
      refundPolicy: "Full refund minus processing fees",
      passportRequirements: "Valid passport with 6 months validity",
      visaRequirements: "Visa-free for most countries"
    },
    images: [packageLanding],
    activityIcons: ["wellness", "spa", "relaxation"],
    category: "wellness",
    featured: false
  }
]

// Create a client component for the search functionality
function PackageSearch() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const [sortOption, setSortOption] = useState("featured")
  const [displayedPackages, setDisplayedPackages] = useState<Package[]>(allPackages)

  // Filter and sort packages based on query and sort option
  useEffect(() => {
    let filtered = [...allPackages]

    // Filter by search query if present
    if (query) {
      const searchTerms = query.toLowerCase()
      filtered = filtered.filter(
        (pkg) =>
          pkg.name?.toLowerCase().includes(searchTerms) ||
          pkg.locations?.some((location) => location.toLowerCase().includes(searchTerms)) ||
          pkg.tagline?.toLowerCase().includes(searchTerms) ||
          pkg.category?.toLowerCase().includes(searchTerms)
      )
    }

    // Sort packages
    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => (a.pricing?.pricePerPerson ?? 0) - (b.pricing?.pricePerPerson ?? 0))
        break
      case "price-high":
        filtered.sort((a, b) => (b.pricing?.pricePerPerson ?? 0) - (a.pricing?.pricePerPerson ?? 0))
        break
      case "duration-short":
        filtered.sort((a, b) => {
          const aDays = parseInt(a.duration?.split(" ")[0] ?? "0")
          const bDays = parseInt(b.duration?.split(" ")[0] ?? "0")
          return aDays - bDays
        })
        break
      case "duration-long":
        filtered.sort((a, b) => {
          const aDays = parseInt(a.duration?.split(" ")[0] ?? "0")
          const bDays = parseInt(b.duration?.split(" ")[0] ?? "0")
          return bDays - aDays
        })
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
    <div className="container mx-auto">
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

      {/* Featured Package */}
      {!query && featuredPackage && (
        <div className="mb-20 slide-up">
          <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8">Featured Package</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 relative aspect-[16/9] lg:aspect-auto">
              <Image
                src={featuredPackage.images?.[0] || "/placeholder.svg"}
                alt={featuredPackage.name || "Featured Package"}
                fill
                className="object-cover rounded-md"
              />
              <Badge className="absolute top-4 left-4 bg-[#EE1D46]">Featured</Badge>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif text-[#09163A] mb-2">{featuredPackage.name || "Featured Package"}</h3>
              <p className="text-[#EE1D46] font-medium mb-2">{featuredPackage.duration || "Duration not specified"}</p>
              <p className="text-gray-600 italic mb-4">{featuredPackage.tagline || "No tagline available"}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPackage.locations?.map((location, index) => (
                  <Badge key={index} variant="outline" className="border-[#09163A] text-[#09163A]">
                    {location}
                  </Badge>
                ))}
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Hotel className="h-5 w-5 text-[#EE1D46] mr-3" />
                  <span>{featuredPackage.inclusions?.accommodation || "Accommodation not specified"}</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="h-5 w-5 text-[#EE1D46] mr-3" />
                  <span>{featuredPackage.inclusions?.meals || "Meals not specified"}</span>
                </div>
                {featuredPackage.inclusions?.flights && (
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 text-[#EE1D46] mr-3" />
                    <span>Flights Included</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">Starting from</span>
                  <p className="text-2xl font-serif text-[#09163A]">
                    ${featuredPackage.pricing?.pricePerPerson?.toLocaleString() ?? 0} per person
                  </p>
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
      {/* {!query && (
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
      )} */}

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
              name={pkg.name}
              tagline={pkg.tagline}
              locations={pkg.locations}
              duration={pkg.duration}
              pricing={pkg.pricing}
              images={pkg.images}
              id={pkg.id}
              inclusions={pkg.inclusions}
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
  )
}

export default function PackagesPage() {
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
        <Suspense fallback={<div>Loading...</div>}>
          <PackageSearch />
        </Suspense>
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
  name?: string;
  tagline?: string;
  locations?: string[];
  duration?: string;
  pricing?: Package['pricing'];
  images?: any[];
  id: string;
  inclusions?: Package['inclusions'];
}

// Update the PackageCard component to handle optional props
function PackageCard({ 
  name = "Package Name", 
  tagline = "Package Description", 
  locations = [], 
  duration = "Duration not specified", 
  pricing = { pricePerPerson: 0 }, 
  images = [], 
  id,
  inclusions = {} 
}: PackageCardProps) {
  return (
    <Card className="overflow-hidden hover-lift">
      <div className="relative aspect-[4/3]">
        <Image src={images?.[0] || "/placeholder.svg"} alt={name} fill className="object-cover" />
        {inclusions?.flights && (
          <Badge className="absolute top-4 right-4 bg-[#EE1D46]">Flights Included</Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-serif text-[#09163A]">{name}</CardTitle>
        <CardDescription>
          <p className="text-[#EE1D46] font-medium mb-2">{duration}</p>
          <p className="text-gray-600 italic">{tagline}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {locations.map((location, index) => (
              <Badge key={index} variant="outline" className="border-[#09163A] text-[#09163A]">
                {location}
              </Badge>
            ))}
          </div>
          <div className="space-y-2">
            {inclusions?.accommodation && (
              <div className="flex items-center">
                <Hotel className="h-4 w-4 text-[#EE1D46] mr-2" />
                <span className="text-sm">{inclusions.accommodation}</span>
              </div>
            )}
            {inclusions?.meals && (
              <div className="flex items-center">
                <Utensils className="h-4 w-4 text-[#EE1D46] mr-2" />
                <span className="text-sm">{inclusions.meals}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">From</span>
          <p className="text-lg font-serif text-[#09163A]">
            ${pricing?.pricePerPerson?.toLocaleString() ?? 0} per person
          </p>
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
  );
}
