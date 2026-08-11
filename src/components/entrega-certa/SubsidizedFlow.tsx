'use client';

import React from 'react';
import { Gift, Coins, Megaphone, Users, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function SubsidizedFlow() {
  const steps = [
    {
      step: '1',
      title: 'Patrocinador Anuncia',
      role: 'Marcas & Empresas',
      desc: 'Empresas compram espaço de marketing interativo, pesquisas de opinião e quizzes direcionados ao público comprador no app.',
      icon: Megaphone,
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.12)'
    },
    {
      step: '2',
      title: 'Consumidor Interage',
      role: 'Cliente do Delivery',
      desc: 'Ao fazer o pedido, o cliente visualiza um anúncio rápido ou responde 1 pergunta rápida e acumula bônus de R$ 0,50 a R$ 5,00, zerando o frete.',
      icon: Gift,
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.12)'
    },
    {
      step: '3',
      title: 'Entregador Silencioso',
      role: 'Motoboys Credenciados',
      desc: 'O entregador realiza a entrega com moto silenciosa (surdina homologada) e recebe R$ 10 base + R$ 2/km + super bônus mensal de até 2 salários mínimos.',
      icon: Coins,
      color: '#06b6d4',
      bgColor: 'rgba(6, 182, 212, 0.12)'
    },
    {
      step: '4',
      title: 'Sociedade Ganha',
      role: 'Condomínios & Bairros',
      desc: 'Menos poluição sonora à noite, entregas sem buzinas estridentes, trânsito mais seguro e trabalhadores valorizados com seguro e plano de saúde.',
      icon: Heart,
      color: '#ec4899',
      bgColor: 'rgba(236, 72, 153, 0.12)'
    }
  ];

  return (
    <section id="como-funciona" style={{ padding: '90px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            background: 'rgba(6, 182, 212, 0.12)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            color: '#22d3ee',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            O Ciclo de Valorização
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginTop: '16px', marginBottom: '14px' }}>
            Como Funciona o APP Entrega Certa?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
            Uma engrenagem perfeita onde a verba de publicidade dos patrocinadores subsidia o frete para o cliente e remunera com generosidade o trabalho do motoboy.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '30px 24px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Top Step Number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: item.bgColor,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.15)' }}>
                    0{item.step}
                  </span>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: item.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.role}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
