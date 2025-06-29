"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useTranslation()

  const faqItems: FAQItem[] = [
    {
      question: "Do I need a visa to visit my destination?",
      answer: "Visa requirements depend on your nationality and the destination country. We can guide you through visa requirements and help with the application process."
    },
    {
      question: "Can I change or cancel my booking later? What's the policy?",
      answer: "Yes, but change and cancellation policies vary depending on the airline, hotel, or tour operator. We'll give you clear terms before you confirm your booking."
    },
    {
      question: "What's the baggage allowance?",
      answer: "This depends on the airline. We'll provide details at booking, but most international flights allow at least 20-30 kg for checked luggage."
    },
    {
      question: "Is breakfast or other meals included?",
      answer: "Most packages include daily breakfast. Some may include lunch, dinner, or all meals — we'll specify in the itinerary."
    },
    {
      question: "What is included and what is extra (optional activities, meals, tips)?",
      answer: "We provide a detailed list of inclusions. Optional activities, personal expenses, some meals, and tips are usually not included."
    },
    {
      question: "Do you arrange trips for seniors, children, or people with disabilities?",
      answer: "Absolutely. We can design trips that suit all ages and abilities."
    },
    {
      question: "Do you offer group discounts or family packages?",
      answer: "Yes! We offer special rates for groups, families, and corporate bookings."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept bank transfers, credit/debit cards, and mobile money. Flexible installment plans are available for certain packages."
    },
    {
      question: "Is there an installment plan or payment deadline?",
      answer: "Yes, we can arrange installment payments. Full payment is usually required 2-4 weeks before departure."
    },
    {
      question: "What documents do I need to bring on the trip?",
      answer: "Typically, you'll need:\n• A valid passport\n• Visa (if required)\n• Flight tickets\n• Travel insurance certificate\n• Copies of bookings and emergency contacts"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-light text-center text-[#09163A] mb-12 slide-up"
        >
          {t('home.faq.title', 'Frequently Asked Questions')}
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
              }
            }
          }}
          className="max-w-3xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, type: "spring" }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center hover:text-[#EE1D46] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 whitespace-pre-line">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 