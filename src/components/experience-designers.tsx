"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

import mountain from "@/../public/assets/image/mountain-1.jpg"
import mountain2 from "@/../public/assets/image/mountain-2.jpg"

const floatAnim = {
  animate: {
    y: [0, -10, 0, 10, 0],
    scale: [1, 1.04, 1, 0.98, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function ExperienceDesigners() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div
              className="relative aspect-square w-4/5"
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              animate="animate"
            >
              <Image src={mountain} alt="Northern Lights" fill className="object-cover rounded-xl shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-3/5 aspect-square -mb-12 -mr-4 md:mb-0 md:mr-0"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              animate="animate"
            >
              <Image
                src={mountain2}
                alt="Mountain landscape"
                fill
                className="object-cover rounded-xl shadow-md"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
