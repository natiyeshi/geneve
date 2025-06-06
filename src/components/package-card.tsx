import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Hotel, Utensils, Plane } from 'lucide-react';

interface PackageCardProps {
  package: {
    id: string;
    title: string;
    destination: string;
    duration: string;
    price: number;
    image: string;
    featured?: boolean;
    tagline?: string;
    accommodation?: string;
    meals?: string;
    flightsIncluded?: boolean;
  };
  translations?: {
    from: string;
    perPerson: string;
    viewDetails: string;
    accommodation: string;
    meals: string;
    flightsIncluded: string;
  };
}

export function PackageCard({ package: pkg, translations: customTranslations }: PackageCardProps) {
  const { t } = useTranslation();
  const defaultTranslations = {
    from: t('packages.packageCard.from'),
    perPerson: t('packages.packageCard.perPerson'),
    viewDetails: t('packages.packageCard.viewDetails'),
    accommodation: t('packages.featured.accommodation'),
    meals: t('packages.featured.meals'),
    flightsIncluded: t('packages.featured.flightsIncluded')
  };
  const translations = customTranslations || defaultTranslations;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
        />
        {pkg.featured && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {t('packages.featured.badge')}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.destination}</p>
        {pkg.tagline && (
          <p className="text-gray-500 mb-4">{pkg.tagline}</p>
        )}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Hotel className="w-5 h-5 mr-2" />
            <span>{pkg.accommodation || translations.accommodation}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Utensils className="w-5 h-5 mr-2" />
            <span>{pkg.meals || translations.meals}</span>
          </div>
          {pkg.flightsIncluded && (
            <div className="flex items-center text-gray-600">
              <Plane className="w-5 h-5 mr-2" />
              <span>{translations.flightsIncluded}</span>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-gray-600">{translations.from} </span>
            <span className="text-2xl font-bold text-primary">${pkg.price}</span>
            <span className="text-gray-600"> {translations.perPerson}</span>
          </div>
          <Link
            href={`/packages/${pkg.id}`}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            {translations.viewDetails}
          </Link>
        </div>
      </div>
    </div>
  );
} 