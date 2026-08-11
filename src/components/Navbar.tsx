'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage, SupportedLocale } from '@/context/LanguageContext';

const languages: { code: SupportedLocale; name: string; flag: string }[] = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export default function Navbar() {
  const { locale, setLocale, t, detectedCountry, isAutoDetected } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === locale) || languages[0];
  const isHomePage = pathname === '/';

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img 
            src="/Logo_512.png" 
            alt="Sanvyrsoft Logo" 
            className={styles.logoImg}
            style={{ maxHeight: '55px', width: 'auto' }}
          />
        </Link>
        
        <div className={styles.menu}>
          <Link 
            href="/projetos" 
            className={`${styles.link} ${styles.projectsLink}`}
          >
            <Sparkles size={14} color="#06b6d4" />
            {t.nav?.projects || 'PROJETOS'}
          </Link>

          <a href={isHomePage ? '#services' : '/#services'} className={styles.link}>
            {t.nav?.services || 'SERVIÇOS'}
          </a>
          <a href={isHomePage ? '#about' : '/#about'} className={styles.link}>
            {t.nav?.about || 'QUEM SOMOS'}
          </a>
          <a href={isHomePage ? '#contact' : '/#contact'} className={styles.link}>
            {t.nav?.contact || 'CONTATO'}
          </a>
        </div>

        <div className={styles.langWrapper} ref={dropdownRef}>
          <button 
            className={styles.langPill} 
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
            title={isAutoDetected ? `Idioma detectado: ${currentLang.name} (${detectedCountry || 'Auto'})` : 'Alterar Idioma'}
          >
            <Globe size={18} className={styles.globeIcon} />
            <span className={styles.currentFlag}>{currentLang.flag}</span>
            <span className={styles.currentName}>{currentLang.code.toUpperCase()}</span>
            <ChevronDown size={14} className={`${styles.chevron} ${isOpen ? styles.open : ''}`} />
          </button>

          {isOpen && (
            <div className={styles.dropdown}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`${styles.dropdownItem} ${locale === lang.code ? styles.activeItem : ''}`}
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                >
                  <span className={styles.itemFlag}>{lang.flag}</span>
                  <span className={styles.itemName}>{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
