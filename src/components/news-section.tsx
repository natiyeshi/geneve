import Image from "next/image"
import Link from "next/link"

import blog1 from "@/../public/assets/image/blog-1.jpg"
import blog2 from "@/../public/assets/image/blog-2.jpg"
import blog3 from "@/../public/assets/image/blog-3.jpg"


export function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-serif font-light text-[#09163A]">News & Press</h2>
          <Link href="/blog" className="text-[#09163A] hover:text-[#EE1D46] font-medium uppercase">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            title="A Dream of One's Own"
            category="Geneve Press"
            imageSrc={blog1}
            href="/blog/dream-of-ones-own"
          />
          <NewsCard
            title="Geneve Offers Luxury Travelers Access to Private Places and Experiences"
            category="Geneve Press"
            imageSrc={blog2}
            href="/blog/luxury-travelers-access"
          />
          <NewsCard
            title="Seven Great Irish Escapes to Rent"
            category="Geneve Press"
            imageSrc={blog3}
            href="/blog/irish-escapes"
          />
        </div>
      </div>
    </section>
  )
}

export interface NewsCardProps {
  title: string
  category: string
  imageSrc: any
  href: string
}

function NewsCard({ title, category, imageSrc, href }: NewsCardProps) {
  return (
    <div className="group">
      <Link href={href} className="block relative aspect-[4/3] overflow-hidden mb-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div>
        <div className="text-sm text-[#09163A] mb-2">{category}</div>
        <Link href={href} className="block">
          <h3 className="text-xl font-serif text-[#09163A] group-hover:text-[#EE1D46]">{title}</h3>
        </Link>
      </div>
      <div className="mt-4">
        <Link href={href} className="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#09163A]"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
