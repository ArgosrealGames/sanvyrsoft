'use client';

import React from 'react';
import styles from './Footer.module.css';
import { Globe } from 'lucide-react';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoText}>SANVYR<span className={styles.logoHighlight}>SOFT</span></span>
            </div>
            <p className={styles.aboutText}>{t.footer.about}</p>
            <p className={styles.copyright}>&copy; 2026 {t.footer.rights}</p>
          </div>

          {/* Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{t.footer.links}</h4>
            <nav className={styles.nav}>
              <a href="#services" className={styles.link}>{t.nav.services}</a>
              <a href="#portfolio" className={styles.link}>{t.nav.portfolio}</a>
              <a href="#about" className={styles.link}>{t.nav.about}</a>
              <a href="#contact" className={styles.link}>{t.nav.contact}</a>
            </nav>
          </div>

          {/* Legal Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{t.footer.legal}</h4>
            <nav className={styles.nav}>
              <a href="#" className={styles.link}>Terms of Service</a>
              <a href="#" className={styles.link}>Privacy Policy</a>
              <a href="#" className={styles.link}>Cookie Policy</a>
            </nav>
          </div>

          {/* System Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>SYSTEM</h4>
            <div className={styles.languageLabel}>
              <Globe size={14} />
              <span>Multilingual Engine v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
