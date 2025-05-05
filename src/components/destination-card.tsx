import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface DestinationCardProps {
  title: string
  description: string
  imageSrc: string
  href?: string
}

export function DestinationCard({ title, description, imageSrc, href = "#" }: DestinationCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden">
        <div className="aspect-[4/5] relative">
          <Image
            src={imageSrc || "/placeholder.svg?height=600&width=800"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-serif mb-2">{title}</h3>
          <p className="text-white/80 mb-4">{description}</p>
          <div className="flex items-center text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
