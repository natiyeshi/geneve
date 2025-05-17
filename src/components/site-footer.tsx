import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { FaTiktok } from "react-icons/fa6"

import logo from "@/../public/assets/logo/Group 6 (2).svg"
import Image from "next/image"

export function SiteFooter() {
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
              Inspired by Geneva, the &ldquo;Peace Capital,&rdquo; Geneve Getaway represents unity, excellence, and
              internationalism. We provide comprehensive travel services with a vision to build a large-scale, peaceful,
              and high-performing company that reflects the spirit of Geneva itself.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61575684971389"
                className="w-10 h-10 px-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE1D46] transition-colors duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-8 w-8" />
              </Link>
              <Link
                href="https://vm.tiktok.com/ZMBTVapDx/"
                className="w-10 h-10 px-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE1D46] transition-colors duration-300"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-xl" />
              </Link>
              <Link
                href="https://wa.me/0911205953"
                className="w-10 h-10 px-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE1D46] transition-colors duration-300"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-8 w-8" />
              </Link>
              <Link
                href="https://t.me/Geneve_getaway"
                className="w-10 h-10 px-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE1D46] transition-colors duration-300"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-8 w-8" />
              </Link>
              {/* <Link
                href="#"
                className="w-10 h-10 px-3 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EE1D46] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-8 w-8" />
              </Link> */}
              
              
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-serif mb-8 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#EE1D46] after:left-0 after:-bottom-3">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/attractions?q=ireland"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Ireland
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=uk"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  UK
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=africa"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Africa
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=europe"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Classic Europe
                </Link>
              </li>
              <li>
                <Link
                  href="/attractions?q=asia"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Asia
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif mb-8 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#EE1D46] after:left-0 after:-bottom-3">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/packages"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Hotel Reservations
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Visa Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#EE1D46] transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-[#EE1D46] rounded-full mr-2"></span>
                  Airport Transfers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-8 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-[#EE1D46] after:left-0 after:-bottom-3">
              Contact Us
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
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:info@genevegetaway.com" className="text-white/80 hover:text-[#EE1D46] transition-colors">
                    info@genevegetaway.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-[#EE1D46] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-white/80">+251 911 20 5953</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-[#EE1D46] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Working Hours</p>
                  <p className="text-white/80">Online Support: 24/7</p>
                  <p className="text-white/80">Office Hours: 2:30 PM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-wrap justify-between items-center">
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} Geneve Getaway. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy and Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
