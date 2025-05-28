import Image from "next/image"
import Link from "next/link"
import { ExternalLink, MapPin, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import hotel from "@/../public/images/hotel.png"

export default function RovePartnerSection() {
  return (
    <section className="w-full container py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-light font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            Our Trusted Partner
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We are proud to partner with industry leaders who share our commitment to exceptional experiences
          </p>
        </div>

        {/* Partner Showcase */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Partner Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">ROVE HOTELS</h3>
                  <p className="text-secondary font-medium">Premium Hospitality Partner</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Rove Hotels represents the blank page for your wanderlust story - your gateway to the path less
                travelled. With their modern approach to hospitality, they create homey, fun, and different experiences
                for every guest.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border-primary/20">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <h4 className="font-semibold text-primary">Multiple Locations</h4>
                  <p className="text-sm text-muted-foreground">Strategic hotel placements</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <h4 className="font-semibold text-primary">Guest Focused</h4>
                  <p className="text-sm text-muted-foreground">Exceptional service standards</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <h4 className="font-semibold text-primary">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">Award-winning hospitality</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="http://www.rovehotels.com/" target="_blank" rel="noopener noreferrer">
                  Visit Rove Hotels
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
             
            </div>
          </div>

          {/* Partner Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={hotel}
                alt="Rove Hotels - Modern hospitality experience"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-1">The Rove Experience</h4>
                  <p className="text-sm text-muted-foreground mb-3">Homey • Fun • Different</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-primary">5.0 Partner Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Partnership Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Partnership</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Guests</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Hotel Locations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
