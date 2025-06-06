"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { IBlog } from "@/interfaces/blog.interface"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  imageSrc: string | any
  href: string
  className?: string
  style?: React.CSSProperties
}

function BlogCard({ title, excerpt, date, category, imageSrc, href, className, style }: BlogCardProps) {
  const { t } = useTranslation()
  
  return (
    <div className={`group hover-lift ${className}`} style={style}>
      <Link href={href} className="block relative aspect-[4/3] mb-4 rounded-md overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="mb-2">
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3 className="text-xl font-serif text-[#09163A] group-hover:text-[#EE1D46] mb-2">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <Link href={href} className="text-[#09163A] font-medium hover:text-[#EE1D46] inline-flex items-center">
        {t('blog.readMore')}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

interface BlogContentProps {
  blogs: IBlog[]
}

export function BlogContent({ blogs }: BlogContentProps) {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-light text-[#09163A] mb-12 slide-up">{t('blog.latestArticles')}</h2>

        {/* All Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any, index) => (
            <BlogCard
              key={blog._id}
              title={blog.topic}
              excerpt={blog.desc}
              date={new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              category={t('blog.categories.travel')}
              imageSrc={blog.image}
              href={`/blog/${blog.link}`}
              className={`slide-up`}
              style={{ animationDelay: `${0.1 * index}s` }}
            />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('blog.noPosts')}</p>
          </div>
        )}
      </div>
    </div>
  )
} 