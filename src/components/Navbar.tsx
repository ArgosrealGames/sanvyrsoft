import React, { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Globe, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentLocale: string;
  setLocale: (locale: string) => void;
  t: any;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export default function Navbar({ currentLocale, setLocale, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const currentLang = languages.find(l => l.code === currentLocale) || languages[0];

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

        <div className={styles.langWrapper} ref={dropdownRef}>
          <button 
            className={styles.langPill} 
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="true"
            aria-expanded={isOpen}
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
                  className={`${styles.dropdownItem} ${currentLocale === lang.code ? styles.activeItem : ''}`}
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
