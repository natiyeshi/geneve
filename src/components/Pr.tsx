"use client";

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, MapPin, Star, Users } from "lucide-react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import hotel from "@/../public/images/hotel.png"

const floatAnim = {
  animate: {
    y: [0, -10, 0, 10, 0],
    scale: [1, 1.03, 1, 0.97, 1],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function RovePartnerSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full container py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-light tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            {t('partner.title')}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t('partner.subtitle')}
          </p>
        </motion.div>

        {/* Partner Showcase */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Partner Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary font-serif">{t('partner.hotel.title')}</h3>
                  <p className="text-secondary font-medium">{t('partner.hotel.subtitle')}</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('partner.hotel.description')}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {i === 0 && (
                    <Card className="border-primary/20">
                      <CardContent className="p-4 text-center">
                        <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <h4 className="font-semibold text-primary">{t('partner.features.locations.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('partner.features.locations.description')}</p>
                      </CardContent>
                    </Card>
                  )}
                  {i === 1 && (
                    <Card className="border-primary/20">
                      <CardContent className="p-4 text-center">
                        <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <h4 className="font-semibold text-primary">{t('partner.features.guests.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('partner.features.guests.description')}</p>
                      </CardContent>
                    </Card>
                  )}
                  {i === 2 && (
                    <Card className="border-primary/20">
                      <CardContent className="p-4 text-center">
                        <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <h4 className="font-semibold text-primary">{t('partner.features.quality.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('partner.features.quality.description')}</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="http://www.rovehotels.com/" target="_blank" rel="noopener noreferrer">
                  {t('partner.cta.visit')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Partner Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            animate="animate"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={hotel}
                alt="Rove Hotels - Modern hospitality experience"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-1">{t('partner.experience.title')}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{t('partner.experience.subtitle')}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-primary">{t('partner.experience.rating')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </motion.div>
        </div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">{t('partner.stats.partnership')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">{t('partner.stats.guests')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">{t('partner.stats.locations')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">{t('partner.stats.satisfaction')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
