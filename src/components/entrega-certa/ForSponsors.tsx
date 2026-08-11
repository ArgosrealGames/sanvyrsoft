'use client';

import React from 'react';
import { Megaphone, Target, BarChart3, Eye, Sparkles, MessageCircle, HeartHandshake } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function ForSponsors() {
  const benefits = [
    {
      title: 'Atenção 100% Qualificada',
      desc: 'Diferente de anúncios ignorados em redes sociais, o consumidor do APP Entrega Certa presta atenção voluntária e ativa para desbloquear o desconto no frete.',
      icon: Eye,
      color: '#10b981'
    },
    {
      title: 'Pesquisas de Mercado Rápidas',
      desc: 'Colete dados e opiniões reais de milhares de consumidores em segundos com perguntas de múltipla escolha durante o fluxo de checkout.',
      icon: Target,
      color: '#06b6d4'
    },
    {
      title: 'Marketing com Impacto Social (ESG)',
      desc: 'Sua marca é percebida como a patrocinadora do silêncio da cidade e da melhoria de renda dos trabalhadores de aplicativo.',
      icon: HeartHandshake,
      color: '#ec4899'
    },
    {
      title: 'Métricas em Tempo Real',
      desc: 'Painel com taxa de resposta, impressões, cliques e conversões de cupons em tempo real para comprovar o ROI.',
      icon: BarChart3,
      color: '#f59e0b'
    }
  ];

  return (
    <section id="patrocinadores" style={{ padding: '90px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: 'rgba(236, 72, 153, 0.12)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            color: '#f472b6',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Para Marcas & Anunciantes
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginTop: '16px', marginBottom: '14px' }}>
            A Publicidade com Maior Taxa de Engajamento do Brasil
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
            Conecte sua marca diretamente a milhares de consumidores no momento exato da decisão de compra, com interação voluntária e alta retenção.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: b.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
                  {b.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
          border: '1px solid rgba(236, 72, 153, 0.4)',
          borderRadius: '24px',
          padding: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
              Deseja Patrocinar Entregas na Sua Cidade?
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
              Fale com nossa equipe comercial e receba o mídia kit com formatos de anúncios e pacotes de patrocínio.
            </p>
          </div>

          <a
            href={APP_CONFIG.getWhatsappLink("Olá! Tenho interesse em ser um Patrocinador / Anunciante no APP Entrega Certa.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#ec4899',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(236, 72, 153, 0.4)'
            }}
          >
            <Megaphone size={18} />
            Quero Anunciar no Entrega Certa
          </a>
        </div>

      </div>
    </section>
  );
}
