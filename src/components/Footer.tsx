'use client';

import React from 'react';
import styles from './Footer.module.css';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

interface FooterProps {
  t?: any;
}

export default function Footer({ t }: FooterProps) {
  const langContext = useLanguage();
  const currentT = t || langContext?.t || {};

  const about = currentT.footer?.about || "A Sanvyrsoft é uma desenvolvedora de tecnologia focada em inovação e no futuro do ecossistema digital.";
  const rights = currentT.footer?.rights || "Todos os direitos reservados. Sanvyrsoft.com";
  const links = currentT.footer?.links || "Links";
  const legal = currentT.footer?.legal || "Jurídico";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoText}>SANVYR<span className={styles.logoHighlight}>SOFT</span></span>
            </div>
            <p className={styles.aboutText}>{about}</p>
            <p className={styles.copyright}>&copy; 2026 {rights}</p>
          </div>

          {/* Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{links}</h4>
            <nav className={styles.nav}>
              <Link href="/projetos" className={styles.link} style={{ color: '#06b6d4' }}>PROJETOS</Link>
              <a href="/#services" className={styles.link}>{currentT.nav?.services || 'Serviços'}</a>
              <a href="/#about" className={styles.link}>{currentT.nav?.about || 'Quem Somos'}</a>
              <a href="/#contact" className={styles.link}>{currentT.nav?.contact || 'Contato'}</a>
            </nav>
          </div>

          {/* Legal Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>{legal}</h4>
            <nav className={styles.nav}>
              <a href="#" className={styles.link}>Termos de Serviço</a>
              <a href="#" className={styles.link}>Privacidade & LGPD</a>
              <a href="#" className={styles.link}>Carta Patente INPI</a>
            </nav>
          </div>

          {/* System Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>SISTEMA</h4>
            <div className={styles.languageLabel}>
              <Globe size={14} />
              <span>Multilingual Engine v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
