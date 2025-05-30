"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import { ImageGallery } from "@/components/image-gallery"
import { Calendar, Clock, MapPin, Users, Utensils, Wifi, Plane, Car, Hotel, Shield, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import p1 from "@/../public/assets/image/packages/p1.jpg"
import p2 from "@/../public/assets/image/packages/p2.jpg"
import p3 from "@/../public/assets/image/packages/p3.jpg"
import p4 from "@/../public/assets/image/packages/p4.jpg"
import p5 from "@/../public/assets/image/packages/p5.jpg"
import { allPackages } from "../page" 
// Updated package data structure
// const packageData = {
//   id: "italian-splendor",
//   name: "Italian Splendor",
//   tagline: "Experience the Art, Culture, and Cuisine of Italy",
//   locations: ["Rome", "Florence", "Venice", "Amalfi Coast"],
//   mapUrl: "https://maps.google.com/...",
//   duration: "14 Days / 13 Nights",
//   inclusions: {
//     flights: true,
//     accommodation: "5-Star Luxury Hotels",
//     airportTransfers: true,
//     guidedTours: true,
//     meals: "Breakfast & Dinner",
//     travelInsurance: true
//   },
//   exclusions: [
//     "Visa fees",
//     "Personal expenses",
//     "Tips and gratuities",
//     "Optional activities"
//   ],
//   itinerary: [
//     { day: 1, description: "Arrival in Rome, Welcome Dinner" },
//     { day: 2, description: "Vatican City & Colosseum Tour" },
//     { day: 3, description: "Roman Forum & City Exploration" },
//     { day: 4, description: "Transfer to Florence, Uffizi Gallery" },
//     { day: 5, description: "Florence Cathedral & City Tour" },
//     { day: 6, description: "Tuscan Wine Tasting Experience" },
//     { day: 7, description: "Transfer to Venice, Grand Canal Tour" },
//     { day: 8, description: "Venice Islands Exploration" },
//     { day: 9, description: "Transfer to Amalfi Coast" },
//     { day: 10, description: "Positano & Ravello Tour" },
//     { day: 11, description: "Amalfi Coast Boat Tour" },
//     { day: 12, description: "Free Day for Optional Activities" },
//     { day: 13, description: "Cooking Class & Farewell Dinner" },
//     { day: 14, description: "Departure" }
//   ],
//   pricing: {
//     pricePerPerson: 12500,
//     doubleOccupancy: 11500,
//     tripleOccupancy: 10500,
//     earlyBirdDiscount: 1000,
//     groupDiscount: 1500,
//     paymentPlans: ["Full Payment", "50% Deposit + Balance"]
//   },
//   bookingInfo: {
//     bookingMethods: ["Website", "Phone", "Email"],
//     consultantName: "Sarah Johnson",
//     officeAddress: "123 Travel Street, New York",
//     bookingLink: "https://booking.example.com/italian-splendor"
//   },
//   termsAndConditions: {
//     cancellationPolicy: "Free cancellation up to 30 days before departure",
//     refundPolicy: "Full refund minus processing fees",
//     passportRequirements: "Valid passport with 6 months validity",
//     visaRequirements: "Schengen visa required for non-EU citizens"
//   },
//   images: [
//     { src: p1, alt: "Roman Colosseum at sunset" },
//     { src: p2, alt: "Florence Cathedral and cityscape" },
//     { src: p3, alt: "Venice Grand Canal with gondolas" },
//     { src: p4, alt: "Colorful houses of Positano on Amalfi Coast" },
//     { src: p5, alt: "Italian vineyard in Tuscany" }
//   ],
//   activityIcons: ["culture", "food", "history", "shopping"]
// };

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const packageData = allPackages.find((p) => p.id === params.id)

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-[#09163A] mb-4">Package Not Found</h1>
          <p className="text-gray-600 mb-6">The package you're looking for doesn't exist.</p>
          <Button className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white" asChild>
            <Link href="/packages">View All Packages</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={packageData.images?.[0]?.src ?? p1}
          alt={packageData.name ?? "Package Image"}
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
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">{packageData.name ?? "Package Name"}</h1>
            <p className="text-xl text-white/90 mb-2">{packageData.tagline ?? "Package Description"}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {packageData.locations?.map((location, index) => (
                <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20">
                  {location}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              {packageData.images && <ImageGallery images={packageData.images} />}

              {/* Package Overview */}
              <div className="mt-12 space-y-12">
                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-serif text-[#09163A] mb-4">What's Included</h3>
                    <div className="space-y-4">
                      {packageData.inclusions?.flights && (
                        <div className="flex items-center">
                          <Plane className="h-5 w-5 text-[#EE1D46] mr-3" />
                          <span>International Flights</span>
                        </div>
                      )}
                      {packageData.inclusions?.accommodation && (
                        <div className="flex items-center">
                          <Hotel className="h-5 w-5 text-[#EE1D46] mr-3" />
                          <span>{packageData.inclusions.accommodation}</span>
                        </div>
                      )}
                      {packageData.inclusions?.airportTransfers && (
                        <div className="flex items-center">
                          <Car className="h-5 w-5 text-[#EE1D46] mr-3" />
                          <span>Airport Transfers</span>
                        </div>
                      )}
                      {packageData.inclusions?.guidedTours && (
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-[#EE1D46] mr-3" />
                          <span>Guided Tours</span>
                        </div>
                      )}
                      {packageData.inclusions?.meals && (
                        <div className="flex items-center">
                          <Utensils className="h-5 w-5 text-[#EE1D46] mr-3" />
                          <span>{packageData.inclusions.meals}</span>
                        </div>
                      )}
                      {packageData.inclusions?.travelInsurance && (
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-[#EE1D46] mr-3" />
                          <span>Travel Insurance</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#09163A] mb-4">What's Not Included</h3>
                    <ul className="space-y-2">
                      {packageData.exclusions?.map((exclusion, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-[#EE1D46] mr-2 mt-1">•</div>
                          <span>{exclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Detailed Itinerary */}
                {packageData.itinerary && packageData.itinerary.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-serif text-[#09163A] mb-6">Detailed Itinerary</h3>
                    <div className="space-y-6">
                      {packageData.itinerary.map((day, index) => (
                        <div key={index} className="border-l-2 border-[#EE1D46] pl-6">
                          <h4 className="text-xl font-medium text-[#09163A]">
                            Day {day.day}
                          </h4>
                          <p className="text-gray-700 mt-2">{day.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Terms & Conditions */}
                {packageData.termsAndConditions && (
                  <div>
                    <h3 className="text-2xl font-serif text-[#09163A] mb-6">Terms & Conditions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {packageData.termsAndConditions.cancellationPolicy && (
                        <div className="bg-gray-50 p-6 rounded-md">
                          <h4 className="font-medium text-[#09163A] mb-2">Cancellation Policy</h4>
                          <p className="text-gray-700">{packageData.termsAndConditions.cancellationPolicy}</p>
                        </div>
                      )}
                      {packageData.termsAndConditions.refundPolicy && (
                        <div className="bg-gray-50 p-6 rounded-md">
                          <h4 className="font-medium text-[#09163A] mb-2">Refund Policy</h4>
                          <p className="text-gray-700">{packageData.termsAndConditions.refundPolicy}</p>
                        </div>
                      )}
                      {packageData.termsAndConditions.passportRequirements && (
                        <div className="bg-gray-50 p-6 rounded-md">
                          <h4 className="font-medium text-[#09163A] mb-2">Passport Requirements</h4>
                          <p className="text-gray-700">{packageData.termsAndConditions.passportRequirements}</p>
                        </div>
                      )}
                      {packageData.termsAndConditions.visaRequirements && (
                        <div className="bg-gray-50 p-6 rounded-md">
                          <h4 className="font-medium text-[#09163A] mb-2">Visa Requirements</h4>
                          <p className="text-gray-700">{packageData.termsAndConditions.visaRequirements}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 sticky top-8">
                <div className="mb-6">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-serif text-[#09163A]">
                      ${packageData.pricing?.pricePerPerson?.toLocaleString() ?? 0}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">per person</span>
                  </div>
                </div>

                {/* Pricing Details */}
                {packageData.pricing && (
                  <div className="space-y-4 mb-6">
                    {packageData.pricing.doubleOccupancy && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Double Occupancy</span>
                        <span className="font-medium">${packageData.pricing.doubleOccupancy.toLocaleString()}</span>
                      </div>
                    )}
                    {packageData.pricing.tripleOccupancy && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Triple Occupancy</span>
                        <span className="font-medium">${packageData.pricing.tripleOccupancy.toLocaleString()}</span>
                      </div>
                    )}
                    {packageData.pricing.earlyBirdDiscount && (
                      <div className="flex justify-between items-center text-[#EE1D46]">
                        <span>Early Bird Discount</span>
                        <span>-${packageData.pricing.earlyBirdDiscount.toLocaleString()}</span>
                      </div>
                    )}
                    {packageData.pricing.groupDiscount && (
                      <div className="flex justify-between items-center text-[#EE1D46]">
                        <span>Group Discount</span>
                        <span>-${packageData.pricing.groupDiscount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Payment Plans */}
                {packageData.pricing?.paymentPlans && packageData.pricing.paymentPlans.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-[#09163A] mb-3">Payment Plans</h4>
                    <div className="space-y-2">
                      {packageData.pricing.paymentPlans.map((plan, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-[#EE1D46] mr-2" />
                          <span className="text-sm">{plan}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Booking Methods */}
                {packageData.bookingInfo?.bookingMethods && packageData.bookingInfo.bookingMethods.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-[#09163A] mb-3">How to Book</h4>
                    <div className="space-y-2">
                      {packageData.bookingInfo.bookingMethods.map((method, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-[#EE1D46] mr-2" />
                          <span className="text-sm">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link href="/contact">
                  <Button className="w-full bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white mb-4">
                    Book This Package
                  </Button>
                </Link>

                {packageData.bookingInfo && (
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 mb-2">Need help planning?</p>
                    {packageData.bookingInfo.consultantName && (
                      <p className="text-sm font-medium text-[#09163A] mb-1">
                        Contact {packageData.bookingInfo.consultantName}
                      </p>
                    )}
                    {packageData.bookingInfo.officeAddress && (
                      <p className="text-sm text-gray-600">{packageData.bookingInfo.officeAddress}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
