"use client";
import Image from "next/image";
import icongold from "@/../public/assets/logo/icongold.svg";
import logo from "@/../public/assets/logo/logo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Section } from "@/components/custom/Section";
import Link from "next/link";
const Footer = () => {
  return (
    <Section className="bg-background " h={false}>
      <footer className="w-full min-h-[70vh]  flex max-md:flex-col overflow-hidden ">
        <div className="w-[300px]    relative ">
          <div className="flex gap-1 max-md:hidden absolute -left-4  ">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex flex-col gap-1">
                {[...Array(20)].map((_, index) => (
                  <Image
                    key={index}
                    src={icongold}
                    className="w-7"
                    alt="icon"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="max-md:m-12 w-[150px] h-[150px] shadow-2xl flex bg-background border-2 md:right-0 border-primary md:absolute  top-1/2 md:transform md:-translate-y-1/2 rotate-45">
            <Image src={logo} className="w-14 m-auto -rotate-45" alt="icon" />
          </div>
        </div>
        <div className="flex  flex-col flex-1 text-white  ps-14 max-md:ps-6 pe-6 my-12">
          <div className="flex max-md:flex-col max-md:gap-5 justify-around  duration-200  ">
            <div className="flex flex-col gap-4">
              <div className="font-semibold">Home</div>
              <div className="flex flex-col gap-1 ">
                <Link className="hover:text-primary" href={"/services"}>
                  Service
                </Link>
                <Link className="hover:text-primary" href={"/products"}>
                  Products
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold">Products</div>
              <div className="flex flex-col gap-1 ">
                <Link className="hover:text-primary" href={"/products"}>
                  Branded Apparel
                </Link>
                <Link className="hover:text-primary" href={"/products"}>
                  Workwear
                </Link>
                <Link className="hover:text-primary" href={"/products"}>
                  Retail Brand
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold">Company</div>
              <div className="flex flex-col gap-1 ">
                <Link className="hover:text-primary" href={"/ourstory"}>
                  Our Story
                </Link>
                <Link className="hover:text-primary" href={"/contactus"}>
                  Contact Us
                </Link>
                <Link className="hover:text-primary" href={"/blogs"}>
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold">Contact Us</div>
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center">
                  <AiOutlineMail className="inline-block mr-2 text-lg" />
                  <span>info@gaber-wear.com</span>
                </div>
                <div className="flex  items-center">
                  <GrLocation className="inline-block mr-2 text-lg" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex  items-center">
                  <LuPhone className="inline-block mr-2 text-lg" />
                  <span>+251911615816</span>
                </div>
                <div className="flex  items-center">
                  <LuPhone className="inline-block mr-2 text-lg" />
                  <span>+251953206159</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto max-md:pt-12 max-md:flex-col max-md:gap-10  items-center flex justify-around">
            <div>© 2025 Gaber Wear. All rights reserved.</div>
            <div className="flex gap-12">
              <Link
                href="https://et.linkedin.com/in/gaber-wear-b533aa240"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-primary text-xl" />
              </Link>
              <Link
                href="https://www.instagram.com/gaberwear/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-primary text-xl" />
              </Link>
              <Link
                href="https://www.facebook.com/gabergarment/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-primary text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
