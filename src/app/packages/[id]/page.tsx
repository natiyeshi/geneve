import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import { ImageGallery } from "@/components/image-gallery"
import { Calendar, Clock, MapPin, Users, Utensils, Wifi, Plane, Car, Hotel } from "lucide-react"

import p1 from "@/../public/assets/image/packages/p1.jpg"
import p2 from "@/../public/assets/image/packages/p2.jpg"
import p3 from "@/../public/assets/image/packages/p3.jpg"
import p4 from "@/../public/assets/image/packages/p4.jpg"
import p5 from "@/../public/assets/image/packages/p5.jpg"

// This would typically come from a database or API
const packageData = {
  id: "italian-splendor",
  title: "Italian Splendor",
  subtitle: "14 Days | Rome, Florence, Venice, Amalfi Coast",
  description:
    "Experience the best of Italy on this comprehensive luxury journey. From the ancient ruins of Rome to the Renaissance treasures of Florence, the romantic canals of Venice, and the breathtaking beauty of the Amalfi Coast, this package offers a perfect blend of culture, history, art, and cuisine.",
  longDescription:
    "Immerse yourself in the rich tapestry of Italian culture, history, and cuisine on this meticulously crafted 14-day journey through Italy's most iconic destinations. Begin your adventure in the Eternal City of Rome, where ancient history comes alive as you explore the Colosseum, Roman Forum, and Vatican Museums with your private guide. Then travel to Florence, the birthplace of the Renaissance, where masterpieces by Michelangelo, Botticelli, and Leonardo da Vinci await your discovery. Continue to Venice, the floating city of canals and bridges, where you'll stay in a historic palazzo and enjoy a private gondola ride at sunset. Your journey concludes along the stunning Amalfi Coast, with its colorful cliffside villages, azure waters, and Mediterranean charm. Throughout your travels, you'll enjoy exclusive experiences, from private after-hours museum visits to cooking classes with renowned chefs, all while staying in Italy's finest luxury accommodations.",
  price: "$12,500",
  priceDetail: "per person, based on double occupancy",
  images: [
    { src: p1, alt: "Roman Colosseum at sunset" },
    { src: p2, alt: "Florence Cathedral and cityscape" },
    { src: p3, alt: "Venice Grand Canal with gondolas" },
    { src: p4, alt: "Colorful houses of Positano on Amalfi Coast" },
    { src: p5, alt: "Italian vineyard in Tuscany" },
  ],
  highlights: [
    "Private guided tours of the Vatican Museums, Colosseum, and Roman Forum",
    "Skip-the-line access to the Uffizi Gallery and Accademia in Florence",
    "Private gondola ride through the canals of Venice",
    "Wine tasting experience in a Tuscan vineyard",
    "Private boat tour along the Amalfi Coast",
    "Cooking class with a local chef in a Positano villa",
  ],
  inclusions: [
    "13 nights luxury accommodation",
    "Daily breakfast and select meals",
    "Private transfers throughout",
    "First-class train tickets between cities",
    "Expert local guides",
    "All entrance fees to attractions",
    "24/7 concierge service",
  ],
  itinerary: [
    {
      day: "1-4",
      title: "Rome",
      description:
        "Explore the Eternal City with private guided tours of the Vatican Museums, Sistine Chapel, Colosseum, and Roman Forum. Enjoy exclusive experiences like a private after-hours visit to the Vatican.",
    },
    {
      day: "5-7",
      title: "Florence",
      description:
        "Discover the birthplace of the Renaissance with visits to the Uffizi Gallery, Accademia, and Duomo. Enjoy a day trip to the Tuscan countryside for wine tasting and a farm-to-table lunch.",
    },
    {
      day: "8-10",
      title: "Venice",
      description:
        "Experience the magic of the floating city with a private gondola ride, visits to St. Mark's Basilica and Doge's Palace, and a day trip to the colorful islands of Murano and Burano.",
    },
    {
      day: "11-14",
      title: "Amalfi Coast",
      description:
        "Relax in the stunning coastal setting with a private boat tour, cooking class in a local villa, and time to explore the charming towns of Positano, Ravello, and Amalfi.",
    },
  ],
  accommodations: [
    {
      name: "Hotel de Russie",
      location: "Rome",
      description: "A luxury five-star hotel located near the Spanish Steps with elegant rooms and a beautiful garden.",
    },
    {
      name: "Four Seasons Hotel Firenze",
      location: "Florence",
      description:
        "A Renaissance palazzo with stunning gardens, located just a short walk from Florence's main attractions.",
    },
    {
      name: "Gritti Palace",
      location: "Venice",
      description: "A historic hotel overlooking the Grand Canal, offering opulent rooms and exceptional service.",
    },
    {
      name: "Le Sirenuse",
      location: "Positano",
      description: "A legendary hotel perched on the cliffs of Positano with breathtaking views of the Mediterranean.",
    },
  ],
}

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the package data based on the ID
  // For now, we'll just use our mock data

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src={p1}
          alt={packageData.title}
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
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-4">{packageData.title}</h1>
            <p className="text-xl text-white/90">{packageData.subtitle}</p>
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
              <ImageGallery images={packageData.images} />

              {/* Package Description */}
              <div className="mt-12">
                <h2 className="text-3xl font-serif font-light text-[#09163A] mb-6">Overview</h2>
                <p className="text-lg text-gray-700 mb-8">{packageData.longDescription}</p>

                {/* Highlights */}
                <h3 className="text-2xl font-serif text-[#09163A] mb-4">Highlights</h3>
                <ul className="space-y-2 mb-8">
                  {packageData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-[#EE1D46] mr-2 mt-1">•</div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Itinerary */}
                <h3 className="text-2xl font-serif text-[#09163A] mb-4">Itinerary</h3>
                <div className="space-y-6 mb-8">
                  {packageData.itinerary.map((item, index) => (
                    <div key={index} className="border-l-2 border-[#EE1D46] pl-6">
                      <h4 className="text-xl font-medium text-[#09163A]">
                        Days {item.day}: {item.title}
                      </h4>
                      <p className="text-gray-700 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Accommodations */}
                <h3 className="text-2xl font-serif text-[#09163A] mb-4">Accommodations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {packageData.accommodations.map((accommodation, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-md">
                      <h4 className="text-xl font-medium text-[#09163A]">{accommodation.name}</h4>
                      <p className="text-[#EE1D46] text-sm mb-2">{accommodation.location}</p>
                      <p className="text-gray-700">{accommodation.description}</p>
                    </div>
                  ))}
                </div>

                {/* Inclusions */}
                <h3 className="text-2xl font-serif text-[#09163A] mb-4">What&apos;s Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {packageData.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#EE1D46]/10 flex items-center justify-center mr-3">
                        {index === 0 ? (
                          <Hotel className="h-4 w-4 text-[#EE1D46]" />
                        ) : index === 1 ? (
                          <Utensils className="h-4 w-4 text-[#EE1D46]" />
                        ) : index === 2 ? (
                          <Car className="h-4 w-4 text-[#EE1D46]" />
                        ) : index === 3 ? (
                          <Plane className="h-4 w-4 text-[#EE1D46]" />
                        ) : index === 4 ? (
                          <Users className="h-4 w-4 text-[#EE1D46]" />
                        ) : index === 5 ? (
                          <MapPin className="h-4 w-4 text-[#EE1D46]" />
                        ) : (
                          <Wifi className="h-4 w-4 text-[#EE1D46]" />
                        )}
                      </div>
                      <span>{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 sticky top-8">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-serif text-[#09163A]">{packageData.price}</span>
                    <span className="text-sm text-gray-500 ml-2">{packageData.priceDetail}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-[#EE1D46] mr-3" />
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-gray-700">14 days, 13 nights</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#EE1D46] mr-3" />
                    <div>
                      <p className="text-sm font-medium">Destinations</p>
                      <p className="text-gray-700">Rome, Florence, Venice, Amalfi Coast</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#EE1D46] mr-3" />
                    <div>
                      <p className="text-sm font-medium">Group Size</p>
                      <p className="text-gray-700">Private tour</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-[#EE1D46] mr-3" />
                    <div>
                      <p className="text-sm font-medium">Best Time to Visit</p>
                      <p className="text-gray-700">April to October</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white mb-4">Book This Package</Button>
                </Link>

               

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">Need help planning?</p>
                  <Link href="/contact" className="text-[#09163A] font-medium hover:text-[#EE1D46]">
                    Contact our travel experts
                  </Link>
                </div>
              </div>

              {/* Related Packages */}
              {/* <div className="mt-8">
                <h3 className="text-xl font-serif text-[#09163A] mb-4">You May Also Like</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 h-20 relative">
                      <Image
                        src={"/placeholder.svg?height=80&width=80"}
                        alt="African Safari"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#09163A] hover:text-[#EE1D46]">
                        <Link href="/packages/african-safari">African Safari Adventure</Link>
                      </h4>
                      <p className="text-sm text-[#EE1D46]">10 Days | Kenya & Tanzania</p>
                      <p className="text-sm text-gray-700">From $9,800 per person</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 h-20 relative">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Japan Journey"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#09163A] hover:text-[#EE1D46]">
                        <Link href="/packages/japan-journey">Japan Journey</Link>
                      </h4>
                      <p className="text-sm text-[#EE1D46]">12 Days | Tokyo, Kyoto, Hakone</p>
                      <p className="text-sm text-gray-700">From $10,500 per person</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-20 h-20 relative">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Greek Islands"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#09163A] hover:text-[#EE1D46]">
                        <Link href="/packages/greek-islands">Greek Islands Escape</Link>
                      </h4>
                      <p className="text-sm text-[#EE1D46]">9 Days | Athens, Santorini, Mykonos</p>
                      <p className="text-sm text-gray-700">From $8,900 per person</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
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
