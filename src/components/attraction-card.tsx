import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface AttractionCardProps {
  title: string
  imageSrc: any
  href: string
  large?: boolean
}

export function AttractionCard({ title, imageSrc, href, large = false }: AttractionCardProps) {
  return (
    <Link href={href} className="group block relative overflow-hidden">
      <motion.div
        className={`relative ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}
        whileHover={{ scale: 1.06, rotate: -2, boxShadow: "0 8px 32px 0 rgba(30,30,60,0.18)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={imageSrc || "/placeholder.svg?height=600&width=800"}
          alt={title}
          fill
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 p-6 text-white"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <h3 className="text-2xl font-serif drop-shadow-lg">{title}</h3>
      </motion.div>
    </Link>
  )
}

export function AttractionCardShow({ title, imageSrc, href, large = false }: AttractionCardProps) {
  return (
    <div className="group block relative overflow-hidden" style={{ height: 320 }}>
      <motion.div
        className="relative w-full h-full "
        whileHover={{ scale: 1.06, rotate: -2, boxShadow: "0 8px 32px 0 rgba(30,30,60,0.18)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ height: "100%" }}
      >
        <Image
          src={imageSrc || "/placeholder.svg?height=600&width=800"}
          alt={title}
          fill
          className="object-cover"
          style={{ objectFit: "cover" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 p-6 text-white"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
      >
        <h3 className="text-2xl font-serif drop-shadow-lg">{title}</h3>
      </motion.div>
    </div>
  )
}

