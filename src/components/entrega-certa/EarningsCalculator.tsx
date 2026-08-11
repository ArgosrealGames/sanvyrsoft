'use client';

import React, { useState } from 'react';
import { Coins, Award, Shield, HeartPulse, Check, Sparkles, MessageCircle, Wrench } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function EarningsCalculator() {
  const [deliveriesPerDay, setDeliveriesPerDay] = useState(15);
  const workDays = 25; // 25 dias por mês

  const monthlyDeliveries = deliveriesPerDay * workDays;
  const baseDeliveryFee = 10.0; // R$ 10 base (até 5km)
  
  // Cálculo exato de bônus baseado na tabela
  let bonusPerDelivery = 2.0;
  if (deliveriesPerDay >= 25) bonusPerDelivery = 4.5;
  else if (deliveriesPerDay >= 20) bonusPerDelivery = 4.0;
  else if (deliveriesPerDay >= 15) bonusPerDelivery = 3.5;
  else if (deliveriesPerDay >= 10) bonusPerDelivery = 3.0;
  else bonusPerDelivery = 2.0;

  const totalBaseFreights = monthlyDeliveries * baseDeliveryFee;
  const totalBonusMonthly = monthlyDeliveries * bonusPerDelivery;
  const totalGrossMonthly = totalBaseFreights + totalBonusMonthly;

  return (
    <section id="entregadores" style={{ padding: '90px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#34d399',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Para Entregadores & Motoboys
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginTop: '16px', marginBottom: '14px' }}>
            Quanto o Entregador Ganha no APP Entrega Certa
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
            <strong>R$ 10 até 5km (+ R$ 2 por km adicional)</strong> + <strong>Super Bônus Mensal</strong> que varia por quantidade de entregas, podendo somar mais de dois salários mínimos extras!
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', alignItems: 'center' }}>
          
          {/* Left Column: Interactive Controls */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 30, 0.95) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 36px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Simule Seus Ganhos Mensais (25 dias/mês)
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9rem', marginBottom: '28px' }}>
              Mova a barra abaixo para ver seus fretes base e bônus:
            </p>

            {/* Slider Control */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Média de Entregas por Dia:</span>
                <span style={{
                  background: '#10b981',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  padding: '4px 14px',
                  borderRadius: '10px'
                }}>
                  {deliveriesPerDay} entregas/dia ({monthlyDeliveries} no mês)
                </span>
              </div>

              <input 
                type="range"
                min={5}
                max={25}
                step={5}
                value={deliveriesPerDay}
                onChange={(e) => setDeliveriesPerDay(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  background: '#1e293b',
                  accentColor: '#10b981',
                  cursor: 'pointer'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.8rem', marginTop: '8px' }}>
                <span>05 / dia</span>
                <span>10 / dia</span>
                <span>15 / dia</span>
                <span>20 / dia</span>
                <span>25 / dia</span>
              </div>
            </div>

            {/* Regras e Tabela de Bonificação */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ color: '#34d399', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                ⚡ Tabela Oficial de Bonificação Mensal (25 dias)
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', borderRadius: '8px', background: deliveriesPerDay === 5 ? 'rgba(16, 185, 129, 0.15)' : 'transparent', color: deliveriesPerDay === 5 ? '#34d399' : 'rgba(255,255,255,0.85)', fontWeight: deliveriesPerDay === 5 ? 700 : 400 }}>
                  <span>05 entregas/dia (05x25 = 125/mês):</span>
                  <strong>+ R$ 250,00 (R$ 2,00/un)</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', borderRadius: '8px', background: deliveriesPerDay === 10 ? 'rgba(16, 185, 129, 0.15)' : 'transparent', color: deliveriesPerDay === 10 ? '#34d399' : 'rgba(255,255,255,0.85)', fontWeight: deliveriesPerDay === 10 ? 700 : 400 }}>
                  <span>10 entregas/dia (10x25 = 250/mês):</span>
                  <strong>+ R$ 750,00 (R$ 3,00/un)</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', borderRadius: '8px', background: deliveriesPerDay === 15 ? 'rgba(16, 185, 129, 0.15)' : 'transparent', color: deliveriesPerDay === 15 ? '#34d399' : 'rgba(255,255,255,0.85)', fontWeight: deliveriesPerDay === 15 ? 700 : 400 }}>
                  <span>15 entregas/dia (15x25 = 375/mês):</span>
                  <strong>+ R$ 1.312,50 (R$ 3,50/un)</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', borderRadius: '8px', background: deliveriesPerDay === 20 ? 'rgba(16, 185, 129, 0.15)' : 'transparent', color: deliveriesPerDay === 20 ? '#34d399' : 'rgba(255,255,255,0.85)', fontWeight: deliveriesPerDay === 20 ? 700 : 400 }}>
                  <span>20 entregas/dia (20x25 = 500/mês):</span>
                  <strong>+ R$ 2.000,00 (R$ 4,00/un)</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', borderRadius: '8px', background: deliveriesPerDay === 25 ? 'rgba(16, 185, 129, 0.15)' : 'transparent', color: deliveriesPerDay === 25 ? '#34d399' : 'rgba(255,255,255,0.85)', fontWeight: deliveriesPerDay === 25 ? 700 : 400 }}>
                  <span>25 entregas/dia (25x25 = 625/mês):</span>
                  <strong>+ R$ 2.812,50 (R$ 4,50/un)</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Earnings Output & Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Total Highlight Card */}
            <div style={{
              background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
              border: '1px solid #10b981',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 20px 40px rgba(16, 185, 129, 0.25)'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#a7f3d0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Faturamento Total Estimado / Mês
              </div>

              <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 900, color: '#fff', margin: '8px 0' }}>
                R$ {totalGrossMonthly.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '16px', marginTop: '10px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#d1fae5' }}>Fretes Base ({monthlyDeliveries} un x R$ 10):</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                    R$ {totalBaseFreights.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#fde68a' }}>🔥 Super Bônus Mensal:</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fbbf24' }}>
                    + R$ {totalBonusMonthly.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '12px', fontSize: '0.8rem', color: '#a7f3d0' }}>
                *+ R$ 2,00 por km adicional em corridas acima de 5km.
              </div>
            </div>

            {/* Extra Benefits List */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={20} color="#10b981" />
                Vantagens Exclusivas para o Parceiro Entrega Certa
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#34d399" />
                  <span>Seguro de Vida & Invalidez</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#34d399" />
                  <span>Auxílio e Plano de Saúde</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#34d399" />
                  <span>Desconto em Surdinas Especiais</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color="#34d399" />
                  <span>Repasse Rápido sem Burocracia</span>
                </div>
              </div>

              <a
                href={APP_CONFIG.getWhatsappLink(`Olá! Sou motoboy e quero me cadastrar para rodar no APP Entrega Certa e garantir meu bônus.`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#000',
                  padding: '14px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '6px'
                }}
              >
                <MessageCircle size={18} />
                Quero Me Cadastrar como Entregador
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
