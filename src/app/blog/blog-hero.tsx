"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

export function BlogHero() {
  const { t } = useTranslation()

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image/blog-1.jpg"
          alt="Blog Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
          {t('blog.hero.title')}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {t('blog.hero.subtitle')}
        </p>
      </div>
    </section>
  )
} 