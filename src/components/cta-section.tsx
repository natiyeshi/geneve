import Image from "next/image"
import { Button } from "@/components/ui/button"
import img from "@/../public/assets/image/blog-1.jpg"

interface CTASectionProps {
  backgroundImage?: any
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}


export function CTASection({
  backgroundImage,
  title = "Ready to Start Your Journey?",
  description = "Contact our team of experienced travel designers to begin planning your next extraordinary adventure.",
  buttonText = "Contact Us",
  buttonHref = "/contact"
}: CTASectionProps) {
  return (
    <section className="relative py-20 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage ?? img}
          alt="CTA Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-10 slide-up">
        <h2 className="text-3xl font-serif font-light mb-6">{title}</h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <Button 
          className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white"
          asChild
        >
          <a href={buttonHref}>{buttonText}</a>
        </Button>
      </div>
    </section>
  )
} 