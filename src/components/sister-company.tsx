import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'

export function SisterCompany() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <Image
                  src="/assets/image/lubricant.png"
                  alt="Geneve Lubricants"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-light text-[#09163A]">{t('sisterCompany.title')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {t('sisterCompany.description')}
                </p>
                <Button 
                  className="bg-[#EE1D46] hover:bg-[#EE1D46]/90 text-white"
                  asChild
                >
                  <a 
                    href="https://genevelubricants.com/index.php" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('sisterCompany.buttonText')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
                <h3 className="text-4xl font-serif font-bold text-[#EE1D46] mb-2">15</h3>
                <p className="text-gray-600">{t('sisterCompany.stats.yearsExperience')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
                <h3 className="text-4xl font-serif font-bold text-[#EE1D46] mb-2">200</h3>
                <p className="text-gray-600">{t('sisterCompany.stats.expertTechnicians')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
                <h3 className="text-4xl font-serif font-bold text-[#EE1D46] mb-2">700</h3>
                <p className="text-gray-600">{t('sisterCompany.stats.satisfiedClients')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
                <h3 className="text-4xl font-serif font-bold text-[#EE1D46] mb-2">1000</h3>
                <p className="text-gray-600">{t('sisterCompany.stats.deliveredLubes')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 