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
import { ContactHero } from "./contact-hero";
import { MapPin, Clock, Phone } from "lucide-react";
import qr from "@/../public/assets/qr-genevegetaway.png";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <ContactHero />

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* QR Code Section */}
          <div className="max-w-lg mx-auto mb-24 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-medium text-[#09163A] mb-6 text-center">{t('contact.connect.title')}</h3>
            <p className="text-gray-600 text-center mb-6">
              {t('contact.connect.description')}
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
          </div>

          {/* Contact Information */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-medium text-[#09163A] mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-[#EE1D46] mr-3" />
                  {t('contact.offices.title')}
                </h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="font-medium text-lg text-[#09163A] mb-2">{t('contact.offices.addis.title')}</p>
                    <p className="text-gray-600">{t('contact.offices.addis.address1')}</p>
                    <p className="text-gray-600">{t('contact.offices.addis.address2')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="font-medium text-lg text-[#09163A] mb-2">{t('contact.offices.dubai.title')}</p>
                    <p className="text-gray-600">{t('contact.offices.dubai.address1')}</p>
                    <p className="text-gray-600">{t('contact.offices.dubai.address2')}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-medium text-[#09163A] mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-[#EE1D46] mr-3" />
                    {t('contact.businessHours.title')}
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="text-gray-600 text-lg mb-2">{t('contact.businessHours.onlineSupport')}: <span className="font-medium text-[#09163A]">24/7</span></p>
                    <p className="text-gray-600 text-lg">{t('contact.businessHours.officeHours')}: <span className="font-medium text-[#09163A]">2:30 PM - 11:30 PM</span></p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-medium text-[#09163A] mb-6 flex items-center">
                    <Phone className="w-6 h-6 text-[#EE1D46] mr-3" />
                    {t('contact.contactDetails.title')}
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                    <p className="flex items-center mb-4">
                      <span className="font-medium text-lg mr-2">{t('contact.contactDetails.phone')}:</span>
                      <a href="tel:+251989111111" className="text-[#EE1D46] hover:text-[#EE1D46]/80 transition-colors duration-300">
                        +251 98 911 1111
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium text-lg mr-2">{t('contact.contactDetails.email')}:</span>
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
              {t('contact.findUs.title')}
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
      <BackToTop />
    </div>
  );
}
