import Image from "next/image"
import Link from "next/link"

interface AttractionCardProps {
  title: string
  imageSrc: any
  href: string
  large?: boolean
}

export function AttractionCard({ title, imageSrc, href, large = false }: AttractionCardProps) {
  return (
    <Link href={href} className="group block relative overflow-hidden">
      <div className={`relative ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image
          src={imageSrc || "/placeholder.svg?height=600&width=800"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-serif">{title}</h3>
      </div>
    </Link>
  )
}

export function AttractionCardShow({ title, imageSrc, href, large = false }: AttractionCardProps) {
  return (
    <div className="group block relative overflow-hidden">
      <div className={`relative ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image
          src={imageSrc || "/placeholder.svg?height=600&width=800"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-serif">{title}</h3>
      </div>
    </div>
  )
}

