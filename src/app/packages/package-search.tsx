"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hotel, Utensils, Plane } from "lucide-react"
import { PackageInf } from "./data"
import { useTranslation } from 'react-i18next'

interface PackageCardProps {
  name?: string;
  tagline?: string;
  locations?: string[];
  duration?: string;
  pricing?: PackageInf['pricing'];
  images?: any[];
  id: string;
  inclusions?: PackageInf['inclusions'];
}

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

export function PackageSearch() {
  const { t } = useTranslation();
  const searchParams = useSearchParams()
  const query = searchParams?.get("q") || ""
  const [sortOption, setSortOption] = useState("featured")
  const [displayedPackages, setDisplayedPackages] = useState<PackageInf[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  // Fetch and filter packages based on query and sort option
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setIsLoading(true)
        setError("")
        
        // Build the API URL with query parameters
        const params = new URLSearchParams()
        if (query) params.append("q", query)
        params.append("sortBy", sortOption)
        
        const response = await fetch(`/api/packages?${params.toString()}`)
        if (!response.ok) {
          throw new Error("Failed to fetch packages")
        }
        
        const data = await response.json()
        setDisplayedPackages(data)
      } catch (err) {
        console.error("Error fetching packages:", err)
        setError("Failed to load packages. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPackages()
  }, [query, sortOption])

  // Get featured package
  const featuredPackage = displayedPackages.find((pkg) => pkg.featured)

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EE1D46] mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading packages...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
          <p className="font-medium">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    )
  }

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
                  <Link href={`/packages/${featuredPackage._id}`}>View Details</Link>
                </Button>
              </div>
            </div>
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
              key={pkg._id}
              name={pkg.name}
              tagline={pkg.tagline}
              locations={pkg.locations}
              duration={pkg.duration}
              pricing={pkg.pricing}
              images={pkg.images}
              id={pkg._id}
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