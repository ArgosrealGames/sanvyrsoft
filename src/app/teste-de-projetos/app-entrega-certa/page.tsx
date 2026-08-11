'use client';

import React from 'react';
import Navbar from '@/components/entrega-certa/Navbar';
import Hero from '@/components/entrega-certa/Hero';
import ProblemSolution from '@/components/entrega-certa/ProblemSolution';
import SubsidizedFlow from '@/components/entrega-certa/SubsidizedFlow';
import InteractiveQuizDemo from '@/components/entrega-certa/InteractiveQuizDemo';
import EarningsCalculator from '@/components/entrega-certa/EarningsCalculator';
import ForMerchants from '@/components/entrega-certa/ForMerchants';
import ForSponsors from '@/components/entrega-certa/ForSponsors';
import Workshops from '@/components/entrega-certa/Workshops';
import Footer from '@/components/entrega-certa/Footer';

export default function EntregaCertaTestPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#060911', color: '#f8fafc' }}>
      {/* Top Banner indicating test project in Sanvyrsoft */}
      <div style={{
        background: 'linear-gradient(90deg, #0284c7 0%, #0369a1 100%)',
        color: '#fff',
        padding: '8px 16px',
        textAlign: 'center',
        fontSize: '0.82rem',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        position: 'relative',
        zIndex: 1001
      }}>
        <span>🚀 Sanvyrsoft Incubadora: Página de Apresentação e Demonstração do <strong>APP Entrega Certa</strong></span>
        <a href="/projetos" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 800, marginLeft: '8px' }}>
          &larr; Voltar para Todos os Projetos
        </a>
      </div>

      <Navbar />

      <main style={{ flex: 1 }}>
        <Hero />
        <ProblemSolution />
        <SubsidizedFlow />
        <InteractiveQuizDemo />
        <EarningsCalculator />
        <ForMerchants />
        <ForSponsors />
        <Workshops />
      </main>

      <Footer />
    </div>
  );
}
