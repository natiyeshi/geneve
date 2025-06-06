"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "react-i18next"

import mountain from "@/../public/assets/image/mountain-1.jpg"
import mountain2 from "@/../public/assets/image/mountain-2.jpg"

export function ExperienceDesigners() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-square w-4/5">
              <Image src={mountain} alt="Northern Lights" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 aspect-square -mb-12 -mr-4 md:mb-0 md:mr-0">
              <Image
                src={mountain2}
                alt="Mountain landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <div className="uppercase tracking-wider text-[#EE1D46] mb-4">{t('experienceDesigners.subtitle')}</div>
            <h2 className="text-4xl font-serif font-light text-[#09163A] mb-8 whitespace-pre-line">
              {t('experienceDesigners.title')}
            </h2>
            <p className="text-lg mb-8">
              {t('experienceDesigners.description')}
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="uppercase tracking-wider border-[#09163A] text-[#09163A] hover:bg-[#09163A] hover:text-white"
                asChild
              >
                {t('experienceDesigners.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
