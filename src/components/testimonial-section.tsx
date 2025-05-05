"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Our journey through Ireland was nothing short of magical. The private castle stay arranged by Geneve was the highlight of our trip. Every detail was meticulously planned, from the chauffeur service to the personalized tours. We felt like royalty throughout our stay.",
    author: "James & Elizabeth Thompson",
    location: "New York, USA",
  },
  {
    quote:
      "Geneve created an African safari experience that exceeded all our expectations. The accommodations were luxurious, the guides were incredibly knowledgeable, and the wildlife encounters were breathtaking. It truly was the adventure of a lifetime.",
    author: "Michael & Sarah Johnson",
    location: "Sydney, Australia",
  },
  {
    quote:
      "Our family trip to Italy was flawlessly organized by the Geneve team. From private tours of the Vatican to cooking classes in Tuscany, every experience was authentic and tailored to our interests. The children still talk about it as their favorite vacation.",
    author: "The Williams Family",
    location: "London, UK",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-16">Client Experiences</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8 flex justify-center">
            <div className="bg-[#EE1D46] p-4 rounded-full">
              <Quote className="h-8 w-8 text-white" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <blockquote className="mb-8">
              <p className="text-lg md:text-xl leading-relaxed italic text-gray-700">&ldquo;{currentTestimonial.quote}&rdquo;</p>
            </blockquote>

            <div className="mb-8">
              <p className="text-xl font-serif text-[#09163A]">{currentTestimonial.author}</p>
              <p className="text-gray-500">{currentTestimonial.location}</p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-[#09163A] flex items-center justify-center hover:bg-[#09163A] hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-[#09163A] flex items-center justify-center hover:bg-[#09163A] hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#EE1D46]" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
