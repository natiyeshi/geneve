'use client';

import { PropsWithChildren, useEffect } from 'react';
import i18n from '@/lib/i18n';

export default function I18nProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    // Load saved language on mount
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }

    // Listen for language changes and save to localStorage
    const handleLanguageChange = (lng: string) => {
      localStorage.setItem('language', lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup listener on unmount
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return <>{children}</>;
} 