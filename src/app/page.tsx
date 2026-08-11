'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-deep)' }}>
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Hero t={t} />
        
        <Services t={t} />
        
        {/* About Section */}
        <section id="about" style={{ padding: '100px 0', background: 'rgba(255, 255, 255, 0.01)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>
              {t.nav?.about || 'Quem Somos'}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {t.footer?.about || 'A Sanvyrsoft é uma desenvolvedora de tecnologia focada em inovação e no futuro do ecossistema digital.'}
            </p>
          </div>
        </section>

        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
