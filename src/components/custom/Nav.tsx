"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/assets/logo/logo.svg";
import { useState } from "react";
import { Button } from "../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Page() {
  const links = [
    { name: "Home", href: "/" },
    { name: "products", href: "/products" },
    { name: "Our Story", href: "/ourstory" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blogs" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative z-50">
      {" "}
      {/* Ensuring highest z-index */}
      <div className="flex z-50 justify-between items-center padding relative">
        <div className="w-20 h-fit px-4 p-4 flex bg-background shadow shadow-primary">
          <Image className="m-auto" src={logo} alt="logo" />
        </div>

        <div className="flex gap-8 w-auto max-md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`capitalize ${
                pathname === link.href ? "text-primary font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-2 justify-end items-center">
          <Link
            className="py-1 px-4 rounded-full border border-white"
            href={"/contactus"}
          >
            Contact Us
          </Link>
          <div className="md:hidden z-50 my-auto">
            {" "}
            {/* Ensure dropdown icon is visible */}
            <RxHamburgerMenu
              onClick={() => setIsOpen((d) => !d)}
              className="text-white text-2xl"
            />
          </div>
        </div>
      </div>
      <div
        className={`w-full left-0 transition-all z-40 duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex bg-background text-black flex-col gap-2 mt-2 px-4 py-4">
          {links.map((link) => (
            <Link
              className="py-2 bg-blue-700 text-white ps-2"
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
