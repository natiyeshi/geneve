import Image from "next/image"
import Link from "next/link"

interface ExperienceCardProps {
  title: string
  description: string
  imageSrc: string
  href?: string
}

export function ExperienceCard({ title, description, imageSrc, href = "#" }: ExperienceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src={imageSrc || "/placeholder.svg?height=600&width=800"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-serif mb-2 group-hover:underline">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}
