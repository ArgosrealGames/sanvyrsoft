'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import pt from '@/locales/pt.json';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import it from '@/locales/it.json';

export type SupportedLocale = 'pt' | 'en' | 'es' | 'fr' | 'de' | 'it';

const dictionaries: Record<SupportedLocale, any> = { pt, en, es, fr, de, it };

export interface LanguageContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: any;
  detectedCountry?: string;
  isAutoDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>('pt');
  const [detectedCountry, setDetectedCountry] = useState<string | undefined>(undefined);
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check if user already manually selected a language
    const savedLocale = localStorage.getItem('sanvyrsoft_locale') as SupportedLocale | null;
    if (savedLocale && dictionaries[savedLocale]) {
      setLocaleState(savedLocale);
      return;
    }

    // 2. Auto Geolocation & Browser Language Robot
    let isMounted = true;

    async function detectUserLocationAndLanguage() {
      try {
        // Step A: Fast Browser Language Check
        const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
        let matchedLocale: SupportedLocale = 'pt'; // Default to PT for investors, or check browser

        if (browserLang.startsWith('pt')) matchedLocale = 'pt';
        else if (browserLang.startsWith('es')) matchedLocale = 'es';
        else if (browserLang.startsWith('fr')) matchedLocale = 'fr';
        else if (browserLang.startsWith('de')) matchedLocale = 'de';
        else if (browserLang.startsWith('it')) matchedLocale = 'it';
        else if (browserLang.startsWith('en')) matchedLocale = 'en';

        // Step B: IP Geolocation API lookup for high precision
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal })
          .catch(() => fetch('https://freeipapi.com/api/json', { signal: controller.signal }));

        clearTimeout(timeoutId);

        if (response && response.ok) {
          const data = await response.json();
          const countryCode = (data.country_code || data.countryCode || '').toUpperCase();
          if (countryCode && isMounted) {
            setDetectedCountry(countryCode);

            // Lusophone (Portuguese) countries
            const ptCountries = ['BR', 'PT', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'];
            // Spanish speaking countries
            const esCountries = ['ES', 'AR', 'MX', 'CL', 'CO', 'PE', 'UY', 'PY', 'BO', 'EC', 'VE', 'GT', 'CU', 'DO', 'HN', 'SV', 'NI', 'CR', 'PA'];
            
            if (ptCountries.includes(countryCode)) {
              matchedLocale = 'pt';
            } else if (esCountries.includes(countryCode)) {
              matchedLocale = 'es';
            } else if (countryCode === 'FR') {
              matchedLocale = 'fr';
            } else if (['DE', 'AT', 'CH'].includes(countryCode)) {
              matchedLocale = 'de';
            } else if (countryCode === 'IT') {
              matchedLocale = 'it';
            } else if (['US', 'GB', 'CA', 'AU', 'NZ'].includes(countryCode)) {
              matchedLocale = 'en';
            }
          }
        }

        if (isMounted) {
          setLocaleState(matchedLocale);
          setIsAutoDetected(true);
        }
      } catch (err) {
        console.log('Language auto-detection fallback:', err);
      }
    }

    detectUserLocationAndLanguage();

    return () => {
      isMounted = false;
    };
  }, []);

  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
    setIsAutoDetected(false);
    try {
      localStorage.setItem('sanvyrsoft_locale', newLocale);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  };

  const t = dictionaries[locale] || dictionaries['pt'];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, detectedCountry, isAutoDetected }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
