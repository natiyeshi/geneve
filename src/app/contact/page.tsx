"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import { SisterCompany } from "@/components/sister-company"
import contact from "@/../public/assets/image/contact.jpg"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <Image
          src={contact}
          alt="Contact Us"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09163A]/60 to-[#09163A]/30" />

        {/* Header */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 fade-in">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto slide-up">
              Let us help you plan your next extraordinary journey
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-16 slide-up">
            <p className="text-lg text-center">
              Our team of highly experienced travel designers will guide you from beginning to end as you embark on a
              tailor-made journey of distinction, enjoying truly exclusive and authentic cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="slide-in-right">
              <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8">Get in Touch</h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-sm scale-in">
                  <h3 className="font-medium text-lg mb-2">Thank You!</h3>
                  <p>
                    Your message has been sent successfully. One of our travel designers will be in touch with you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I&apos;m interested in*</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tailored">Tailored Experiences</SelectItem>
                        <SelectItem value="attractions">Luxury Attractions</SelectItem>
                        <SelectItem value="rentals">Private Rentals</SelectItem>
                        <SelectItem value="packages">Travel Packages</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message*</Label>
                    <Textarea id="message" rows={5} required />
                  </div>

                  <Button type="submit" className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="slide-in-right" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-[#09163A] mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-[#EE1D46] mr-2" />
                    Our Offices
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-md hover-lift">
                      <p className="font-medium">Addis Ababa, Ethiopia</p>
                      <p>Around Olympia Dembele City Center</p>
                      <p>New building third floor office number 001</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md hover-lift">
                      <p className="font-medium">Dubai, UAE</p>
                      <p>Geneve -Addis LLC - FZ Diera city center</p>
                      <p>Metro station, NGI House, office no. 101-05</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#09163A] mb-4 flex items-center">
                    <Phone className="w-5 h-5 text-[#EE1D46] mr-2" />
                    Phone Numbers
                  </h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+251911205953" 
                      className="text-gray-600 hover:text-[#EE1D46] transition-colors flex items-center"
                    >
                      <span>+251 911 20 5953</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#09163A] mb-4 flex items-center">
                    <Mail className="w-5 h-5 text-[#EE1D46] mr-2" />
                    Email
                  </h3>
                  <a 
                    href="mailto:info@genevegetaway.com" 
                    className="text-gray-600 hover:text-[#EE1D46] transition-colors"
                  >
                    info@genevegetaway.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#09163A] mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-[#EE1D46] mr-2" />
                    Business Hours
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">Online Support: 24/7</p>
                    <p className="text-gray-600">Office Hours: 2:30 PM - 11:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 slide-up">
            <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8 text-center">Find Us</h2>
            <div className="aspect-[21/9] relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3114.624943484835!2d38.762102!3d8.995635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850061b7c073%3A0x1603867a6e7e0cc6!2sGeneve%20Lubricants!5e1!3m2!1sen!2sby!4v1746437647251!5m2!1sen!2sby"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="geneve getaway Office Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <SisterCompany />

      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
