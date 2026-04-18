'use client';

import React from 'react';
import styles from './Navbar.module.css';
import { Globe } from 'lucide-react';

interface NavbarProps {
  currentLocale: string;
  setLocale: (locale: string) => void;
  t: any;
}

const languages = [
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'pt', name: 'PT', flag: '🇧🇷' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
  { code: 'de', name: 'DE', flag: '🇩🇪' },
  { code: 'it', name: 'IT', flag: '🇮🇹' },
];

export default function Navbar({ currentLocale, setLocale, t }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>SANVYR<span className={styles.logoHighlight}>SOFT</span></span>
        </div>
        
        <div className={styles.menu}>
          <a href="#services" className={styles.link}>{t.nav.services}</a>
          <a href="#about" className={styles.link}>{t.nav.about}</a>
          <a href="#contact" className={styles.link}>{t.nav.contact}</a>
        </div>

        <div className={styles.langPicker}>
          <Globe size={18} className={styles.globeIcon} />
          <div className={styles.langList}>
            {languages.map((lang) => (
              <button 
                key={lang.code}
                className={`${styles.langBtn} ${currentLocale === lang.code ? styles.active : ''}`}
                onClick={() => setLocale(lang.code)}
              >
                <span className={styles.langFlag}>{lang.flag}</span>
                <span className={styles.langName}>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
