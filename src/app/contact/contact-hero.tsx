"use client"

import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { FaWhatsapp, FaTelegram, FaFacebook, FaTiktok } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import land from "@/../public/images/land.jpg"

// Add styles for the water bubble animation
const styles = `
@keyframes ripple-1 {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}

@keyframes ripple-2 {
  0% {
    width: 0;
    height: 0;
    opacity: 0.4;
  }
  100% {
    width: 120px;
    height: 120px;
    opacity: 0;
  }
}

@keyframes ripple-3 {
  0% {
    width: 0;
    height: 0;
    opacity: 0.3;
  }
  100% {
    width: 140px;
    height: 140px;
    opacity: 0;
  }
}

.animate-ripple-1 {
  animation: ripple-1 2s infinite;
}

.animate-ripple-2 {
  animation: ripple-2 2s infinite 0.3s;
}

.animate-ripple-3 {
  animation: ripple-3 2s infinite 0.6s;
}

.ripple-container {
  transition: transform 0.2s;
}

.ripple-container:hover {
  transform: scale(1.05);
}

.contact-icon {
  transition: all 0.3s ease;
}

.ripple-container:hover .contact-icon {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}
`

export function ContactHero() {
  const { t } = useTranslation()

  return (
    <>
      <style>{styles}</style>
      <div className="relative h-[70vh]">
        <Image
          src={land}
          alt="Contact Us"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09163A]/60 to-[#09163A]/30" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 mt-12 fade-in">
              {t('contact.hero.title')}
            </h1>
            
            {/* Contact Icons */}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-12">
              {/* WhatsApp */}
              <a
                href="https://wa.me/251989111111"
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-container relative"
              >
                <div className="contact-icon bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center z-10 relative">
                  <FaWhatsapp className="w-8 h-8" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366]/10 rounded-full animate-ripple-3"></div>
                <p className="text-sm font-medium text-white mt-2 text-center">{t('contact.hero.whatsapp')}</p>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Geneve_getaway"
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-container relative"
              >
                <div className="contact-icon bg-[#0088cc] text-white w-16 h-16 rounded-full flex items-center justify-center z-10 relative">
                  <FaTelegram className="w-8 h-8" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0088cc]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0088cc]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0088cc]/10 rounded-full animate-ripple-3"></div>
                <p className="text-sm font-medium text-white mt-2 text-center">{t('contact.hero.telegram')}</p>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/genevegetaway"
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-container relative"
              >
                <div className="contact-icon bg-[#1877F2] text-white w-16 h-16 rounded-full flex items-center justify-center z-10 relative">
                  <FaFacebook className="w-8 h-8" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1877F2]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1877F2]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1877F2]/10 rounded-full animate-ripple-3"></div>
                <p className="text-sm font-medium text-white mt-2 text-center">{t('contact.hero.facebook')}</p>
              </a>

              {/* TikTok */}
              <a
                href="https://vm.tiktok.com/ZMBTVapDx/"
                target="_blank"
                rel="noopener noreferrer"
                className="ripple-container relative"
              >
                <div className="contact-icon bg-black text-white w-16 h-16 rounded-full flex items-center justify-center z-10 relative">
                  <FaTiktok className="w-8 h-8" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/10 rounded-full animate-ripple-3"></div>
                <p className="text-sm font-medium text-white mt-2 text-center">{t('contact.hero.tiktok')}</p>
              </a>

              {/* Email */}
              <a
                href="mailto:info@genevegetaway.com"
                className="ripple-container relative"
              >
                <div className="contact-icon bg-[#EE1D46] text-white w-16 h-16 rounded-full flex items-center justify-center z-10 relative">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EE1D46]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EE1D46]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EE1D46]/10 rounded-full animate-ripple-3"></div>
                <p className="text-sm font-medium text-white mt-2 text-center">{t('contact.hero.email')}</p>
              </a>

              {/* Phone */}
              <a
                href="tel:+251989111111"
                className="ripple-container relative"
              >
                <div className="contact-icon bg-[#09163A] text-white w-16 h-16 rounded-full flex items-center justify-center z-10 relative">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#09163A]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#09163A]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#09163A]/10 rounded-full animate-ripple-3"></div>
                <p className="text-sm font-medium text-white mt-2 text-center">{t('contact.hero.phone')}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 