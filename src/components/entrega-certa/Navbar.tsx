'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { VolumeX, Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Frete Grátis', href: '#consumidor' },
    { label: 'Ganhos Motoboy', href: '#entregadores' },
    { label: 'Comerciantes', href: '#comerciantes' },
    { label: 'Patrocinadores', href: '#patrocinadores' },
    { label: 'Oficinas & Surdinas', href: '#oficinas' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>
          <img 
            src="/entrega_certa_logo.png" 
            alt="APP Entrega Certa Logo" 
            className={styles.logoImg}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.15rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>
              Entrega <span style={{ color: '#10b981' }}>Certa</span>
            </span>
            <span className={styles.brandBadge}>
              <VolumeX size={11} color="#10b981" />
              Entrega Silenciosa
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className={styles.actions}>
          <a 
            href={APP_CONFIG.getWhatsappLink("Olá! Gostaria de saber mais sobre o aplicativo APP Entrega Certa.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <MessageCircle size={16} />
            <span>Falar no WhatsApp</span>
          </a>

          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={APP_CONFIG.getWhatsappLink("Olá! Quero me cadastrar como parceiro no APP Entrega Certa.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCtaBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Sparkles size={16} />
            Quero Me Cadastrar
          </a>
        </div>
      )}
    </header>
  );
}
