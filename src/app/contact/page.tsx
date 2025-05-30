"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { SisterCompany } from "@/components/sister-company";
import contact from "@/../public/assets/image/contact.jpg";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

import land from "@/../public/images/land.jpg";

import qr from "@/../public/assets/qr-genevegetaway.png"
// Add styles for the water bubble animation
const styles = `
  @keyframes bubble {
    0% {
      transform: translateY(0) scale(0);
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-20px) scale(1);
      opacity: 0;
    }
  }

  .bubble-container {
    position: relative;
    display: inline-block;
  }

  .bubble {
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    transform: translateX(-50%);
    animation: bubble 2s infinite;
  }

  .bubble:nth-child(2) {
    animation-delay: 0.4s;
    left: 45%;
  }

  .bubble:nth-child(3) {
    animation-delay: 0.8s;
    left: 55%;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .contact-icon:hover {
    transform: translateY(-5px);
  }
`;

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <Image
          src={land}
          alt="Contact Us"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09163A]/60 to-[#09163A]/30" />

        {/* Header */}
        <SiteHeader />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto slide-up">
              Let us help you plan your next extraordinary journey
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* <div className="max-w-3xl mx-auto mb-20 slide-up">
            <h2 className="text-4xl font-serif font-light text-[#09163A] mb-6 text-center">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-center text-gray-600">
              Our team of highly experienced travel designers will guide you
              from beginning to end as you embark on a tailor-made journey of
              distinction, enjoying truly exclusive and authentic cultural
              experiences.
            </p>
          </div> */}

          

          {/* QR Code Section */}
          <div className="max-w-lg mx-auto mb-24 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-medium text-[#09163A] mb-6 text-center">Connect With Us</h3>
            <p className="text-gray-600 text-center mb-6">
              Scan our QR code to access all our social media links and contact information in one place
            </p>
            <div className="flex justify-center">
              <Image
                src={qr}
                alt="Geneve Getaway QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            {/* Contact Icons */}
          <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
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
              <p className="text-sm font-medium text-gray-600 mt-2 text-center">WhatsApp</p>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/genevegetaway"
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
              <p className="text-sm font-medium text-gray-600 mt-2 text-center">Telegram</p>
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
              <p className="text-sm font-medium text-gray-600 mt-2 text-center">Email</p>
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
              <p className="text-sm font-medium text-gray-600 mt-2 text-center">Phone</p>
            </a>
          </div>
          </div>

          {/* Contact Information */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-medium text-[#09163A] mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-[#EE1D46] mr-3" />
                  Our Offices
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="font-medium text-lg text-[#09163A] mb-2">Addis Ababa, Ethiopia</p>
                    <p className="text-gray-600">Around Olympia Dembele City Center</p>
                    <p className="text-gray-600">New building third floor office number 001</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="font-medium text-lg text-[#09163A] mb-2">Dubai, UAE</p>
                    <p className="text-gray-600">Geneve -Addis LLC - FZ Diera city center</p>
                    <p className="text-gray-600">Metro station, NGI House, office no. 101-05</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-medium text-[#09163A] mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-[#EE1D46] mr-3" />
                    Business Hours
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="text-gray-600 text-lg mb-2">Online Support: <span className="font-medium text-[#09163A]">24/7</span></p>
                    <p className="text-gray-600 text-lg">Office Hours: <span className="font-medium text-[#09163A]">2:30 PM - 11:30 PM</span></p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-medium text-[#09163A] mb-6 flex items-center">
                    <Phone className="w-6 h-6 text-[#EE1D46] mr-3" />
                    Contact Details
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="flex items-center mb-4">
                      <span className="font-medium text-lg mr-2">Phone:</span>
                      <a href="tel:+251989111111" className="text-[#EE1D46] hover:text-[#EE1D46]/80 transition-colors duration-300">
                        +251 98 911 1111
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium text-lg mr-2">Email:</span>
                      <a href="mailto:info@genevegetaway.com" className="text-[#EE1D46] hover:text-[#EE1D46]/80 transition-colors duration-300">
                        info@genevegetaway.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-24 slide-up max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-light text-[#09163A] mb-8 text-center">
              Find Us
            </h2>
            <div className="aspect-[21/9] relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6229.092876263284!2d38.766762!3d9.004753!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnMTcuMSJOIDM4wrA0NicwMC4zIkU!5e1!3m2!1sen!2set!4v1747468910448!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="geneve getaway Office Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <SisterCompany />

      <SiteFooter />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
