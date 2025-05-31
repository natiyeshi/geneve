"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SearchDialog } from "@/components/search-dialog"
import logo from "@/../public/assets/logo/log.svg"
import Image from "next/image"

export function SiteHeader({ isDark = false }: { isDark?: boolean }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute  top-0 left-0 right-0 z-10">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10">
                <Image
                  src={logo}
                  alt="Geneva Logo"
                  width={100}
                  height={100}
                  className="w-[11rem]"
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <MainNav isDark={isDark} />
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#09163A]/95 backdrop-blur-sm">
            <div className="container py-6">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/attractions"
                  className="text-white hover:text-[#EE1D46] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Attractions
                </Link>
                <Link
                  href="/packages"
                  className="text-white hover:text-[#EE1D46] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Packages
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-[#EE1D46] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-[#EE1D46] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog & Press
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#EE1D46] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
