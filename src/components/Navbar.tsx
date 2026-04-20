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
          <img src="/Logo_512.png" alt="Sanvyrsoft Logo" className={styles.logoImg} />
        </div>
        
        <div className={styles.menu}>
          <a href="#services" className={styles.link}>{t.nav.services}</a>
          <a href="#about" className={styles.link}>{t.nav.about}</a>
          <a href="#contact" className={styles.link}>{t.nav.contact}</a>
        </div>

        <div className={styles.langPicker}>
          <Globe size={18} className={styles.globeIcon} />
          <select 
            value={currentLocale} 
            onChange={(e) => setLocale(e.target.value)}
            className={styles.langSelect}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
