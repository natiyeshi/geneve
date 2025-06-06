"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  _id: string;
  name: string;
  message: string;
}

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonial')
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials')
        }
        const data = await response.json()
        setTestimonials(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load testimonials')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-16">Client Experiences</h2>
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 w-8 bg-gray-200 rounded-full mx-auto mb-8"></div>
              <div className="h-32 bg-gray-200 rounded mb-8"></div>
              <div className="h-6 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
              <div className="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-16">Client Experiences</h2>
          <div className="max-w-4xl mx-auto text-center text-red-500">
            {error}
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-light text-center text-[#09163A] mb-16">Client Experiences</h2>
          <div className="max-w-4xl mx-auto text-center text-gray-500">
            No testimonials available at the moment.
          </div>
        </div>
      </section>
    )
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
              <p className="text-lg md:text-xl leading-relaxed italic text-gray-700">&ldquo;{currentTestimonial.message}&rdquo;</p>
            </blockquote>

            <div className="mb-8">
              <p className="text-xl font-serif text-[#09163A]">{currentTestimonial.name}</p>
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
