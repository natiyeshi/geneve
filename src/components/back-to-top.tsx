"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#09163A] text-white flex items-center justify-center hover:bg-[#EE1D46] focus:outline-none z-50"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
