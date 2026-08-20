'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
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
        
        <About t={t} />

        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
