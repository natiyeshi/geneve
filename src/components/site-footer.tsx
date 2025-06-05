"use client"

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { SiFacebook, SiWhatsapp, SiTelegram } from "react-icons/si";
import { useTranslation } from 'react-i18next';

import logo from "@/../public/assets/logo/log.svg";
import Image from "next/image";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#09163A] text-white">
      {/* Top wave decoration */}
      {/* <div className="w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80C1248 89 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="#09163A"
            fillOpacity="0.2"
          />
        </svg>
      </div> */}

      {/* Main footer content */}
      <div className="container mx-auto pt-12 pb-20 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 ">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Link href="/" className="relative z-10">
                <Image
                  src={logo}
                  alt="Geneva Logo"
                  width={100}
                  height={100}
                  className="w-[11rem]"
                />
              </Link>
            </div>
            <p className="text-white/80 leading-relaxed">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-6">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/profile.php?id=61575684971389"
                className=" relative"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon bg-[#1877F2] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 relative">
                  <SiFacebook className="w-6 h-6" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1877F2]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1877F2]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1877F2]/10 rounded-full animate-ripple-3"></div>
              </Link>

              {/* TikTok */}
              <Link
                href="https://vm.tiktok.com/ZMBTVapDx/"
                className=" relative"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon bg-[#000000] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 relative">
                  <FaTiktok className="w-6 h-6" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000]/10 rounded-full animate-ripple-3"></div>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/0989111111"
                className=" relative"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 relative">
                  <SiWhatsapp className="w-6 h-6" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#25D366]/10 rounded-full animate-ripple-3"></div>
              </Link>

              {/* Telegram */}
              <Link
                href="https://t.me/Geneve_getaway"
                className=" relative"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon bg-[#26A5E4] text-white w-12 h-12 rounded-full flex items-center justify-center z-10 relative">
                  <SiTelegram className="w-6 h-6" />
                </div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#26A5E4]/20 rounded-full animate-ripple-1"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#26A5E4]/15 rounded-full animate-ripple-2"></div>
                <div className="ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#26A5E4]/10 rounded-full animate-ripple-3"></div>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-serif mb-8 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#EE1D46] after:left-0 after:-bottom-3">
              {t('common.explore')}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/attractions?q=dubai"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.destinations.dubai')}
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=usa"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.destinations.usa')}
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=china"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.destinations.china')}
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=turkey"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.destinations.turkey')}
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=jerusalem"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.destinations.jerusalem')}
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=saudi-arabia"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.destinations.saudiArabia')}
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=france"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.destinations.france')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif mb-8 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#EE1D46] after:left-0 after:-bottom-3">
              {t('common.services')}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/packages"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.services.travelPackages')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.services.flightBooking')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.services.hotelReservations')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.services.visaServices')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  {t('footer.services.airportTransfers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-8 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#EE1D46] after:left-0 after:-bottom-3">
              {t('common.contactUs')}
            </h3>
            <div className="space-y-6">
              {/* <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#EE1D46] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Headquarters</p>
                  <p className="text-white/80">Around Olympia Dembele City Center</p>
                  <p className="text-white/80">New building third floor office number 001</p>
                  <p className="text-white/80 mt-2">Geneve -Addis LLC - FZ Diera city center</p>
                  <p className="text-white/80">Metro station, NGI House, office no. 101-05</p>
                  <p className="text-white/80">Dubai, UAE</p>
                </div>
              </div> */}
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-[#EE1D46] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">{t('common.email')}</p>
                  <a
                    href="mailto:info@genevegetaway.com"
                    className="text-white/80 hover:text-[#EE1D46] transition-colors"
                  >
                    info@genevegetaway.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#EE1D46] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">{t('common.phone')}</p>
                  <a
                    href="tel:+251989111111"
                    className="text-white/80 hover:text-[#EE1D46] transition-colors"
                  >
                    +251989111111
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-[#EE1D46] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">{t('common.workingHours')}</p>
                  <p className="text-white/80">{t('common.onlineSupport')}: 24/7</p>
                  <p className="text-white/80">
                    {t('common.officeHours')}: 2:30 PM - 11:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-wrap justify-between items-center">
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} Geneve Getaway. {t('common.allRightsReserved')}
          </div>
          <div className="flex space-x-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              {t('common.privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
