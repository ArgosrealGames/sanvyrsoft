'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

// Locales
import pt from '@/locales/pt.json';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import it from '@/locales/it.json';

const dictionaries: Record<string, any> = { pt, en, es, fr, de, it };

export default function Home() {
  const [locale, setLocale] = useState('en');
  const t = dictionaries[locale];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar currentLocale={locale} setLocale={setLocale} t={t} />
      
      <main style={{ flex: 1 }}>
        <Hero t={t} />
        
        <Services t={t} />
        
        {/* Additional About Section can be added here */}
        <section id="about" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t.nav.about}</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {t.footer.about}
            </p>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
