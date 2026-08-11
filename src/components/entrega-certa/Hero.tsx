'use client';

import React from 'react';
import styles from './Hero.module.css';
import { VolumeX, Gift, Coins, Store, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Ambience Orbs */}
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column: Headlines & CTAs */}
          <div className={styles.content}>
            <div className={styles.badgeWrapper}>
              <span className={styles.topBadge}>
                <VolumeX size={14} color="#10b981" />
                Entrega Silenciosa & Sustentável
              </span>
              <span className={styles.secondaryBadge}>
                <Gift size={14} color="#f59e0b" />
                Frete Patrocinado
              </span>
            </div>

            <h1 className={styles.title}>
              Tele Entregas <span className={styles.highlightGreen}>Silenciosas</span>, Justas e com <span className={styles.highlightAmber}>Frete Grátis</span>.
            </h1>

            <p className={styles.subtitle}>
              O <strong>APP Entrega Certa</strong> é o primeiro aplicativo onde o <strong>consumidor ganha frete grátis</strong> por interagir com patrocinadores, o <strong>entregador ganha até 2 salários a mais</strong> por mês e a <strong>cidade ganha paz e silêncio</strong>.
            </p>

            {/* Action Buttons */}
            <div className={styles.actions}>
              <a href="#consumidor" className={styles.primaryBtn}>
                <Gift size={18} />
                Como Ganhar Frete Grátis
              </a>

              <a href="#entregadores" className={styles.secondaryBtn}>
                <Coins size={18} />
                Calculadora de Ganhos Motoboy
              </a>
            </div>

            {/* Quick Benefits Bar */}
            <div className={styles.featuresPills}>
              <div className={styles.pillItem}>
                <ShieldCheck size={16} color="#10b981" />
                <span>Motos com Surdinas Homologadas</span>
              </div>
              <div className={styles.pillItem}>
                <Zap size={16} color="#06b6d4" />
                <span>Alerta via GPS Entrega Certa (Sem Buzinas)</span>
              </div>
              <div className={styles.pillItem}>
                <Store size={16} color="#f59e0b" />
                <span>Apenas 3% para Restaurantes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className={styles.visualColumn}>
            <div className={styles.cardContainer}>
              <div className={styles.glowRing}></div>
              
              <div className={styles.mainVisualCard}>
                <div className={styles.visualHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="/entrega_certa_logo.png" alt="APP Entrega Certa Logo" className={styles.cardLogo} />
                    <span style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>Entrega Certa</span>
                  </div>
                  <span className={styles.livePill}>MODO SILENCIOSO ATIVO</span>
                </div>

                <div className={styles.motoWrapper}>
                  <img 
                    src="/moto1.png" 
                    alt="Moto Entrega Certa com Surdina Silenciosa" 
                    className={styles.motoImg}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Floating Micro-Cards */}
                <div className={`${styles.floatCard} ${styles.floatTop}`}>
                  <div className={styles.floatIcon} style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
                    <VolumeX size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>PADRÃO ACÚSTICO</div>
                    <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 800 }}>Surdina Especial 0dB Excessivo</div>
                  </div>
                </div>

                <div className={`${styles.floatCard} ${styles.floatBottom}`}>
                  <div className={styles.floatIcon} style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' }}>
                    <Gift size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>BÔNUS DE PATROCÍNIO</div>
                    <div style={{ fontSize: '0.9rem', color: '#34d399', fontWeight: 800 }}>- R$ 10,00 (FRETE GRÁTIS)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
