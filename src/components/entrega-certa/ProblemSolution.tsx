'use client';

import React from 'react';
import { Volume2, VolumeX, AlertTriangle, CheckCircle2, DollarSign, HeartHandshake, ShieldAlert, Sparkles } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section id="apresentacao" style={{ padding: '90px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            O Mercado Atual vs. O Novo Padrão
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginTop: '16px', marginBottom: '14px' }}>
            Por que o Delivery Tradicional Ficou Insuportável?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
            Motos barulhentas a madrugada toda, buzinas constantes na porta das casas, taxas abusivas de até 30% para restaurantes e motoboys desvalorizados. O <strong>APP Entrega Certa</strong> nasceu para transformar essa realidade.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          
          {/* Column 1: O Modelo Atual / Problema */}
          <div style={{
            background: 'rgba(239, 68, 68, 0.04)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.2)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f87171' }}>
                <Volume2 size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 700, textTransform: 'uppercase' }}>O Cenário de Hoje</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>Apps Tradicionais & Poluição Sonora</h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AlertTriangle size={20} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Barulho Excessivo & Perturbação:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9rem', marginTop: '3px' }}>
                    Motos com escapamentos abertos e buzinações altas na entrega gerando estresse e queixas constantes em condomínios e bairros.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AlertTriangle size={20} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Taxas Abusivas para o Comerciante:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9rem', marginTop: '3px' }}>
                    Grandes plataformas cobram de <strong>27% a 30%</strong> sobre cada venda, asfixiando os restaurantes e encarecendo a comida para o consumidor.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AlertTriangle size={20} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Entregadores Mal Remunerados:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9rem', marginTop: '3px' }}>
                    Pouco retorno financeiro, sem incentivos de sustentabilidade, sem benefícios e jornadas exaustivas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: O Padrão Entrega Certa / Solução */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 78, 59, 0.15) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 10px 40px rgba(16, 185, 129, 0.15)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.25)', width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                <VolumeX size={26} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>O Novo Padrão</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>Entrega Certa: Silêncio, Justiça & Frete Grátis</h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Entrega 100% Silenciosa:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', marginTop: '3px' }}>
                    Motos com surdinas homologadas e sistema GPS que avisa a chegada no celular do cliente <strong>sem necessidade de buzinar</strong>.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Frete Patrocinado (Até 100% Grátis):</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', marginTop: '3px' }}>
                    O consumidor interage com campanhas de patrocinadores, responde pesquisas rápidas e <strong>zera o valor do frete</strong>.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Entregadores Ganhando Até 2 Salários a Mais:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', marginTop: '3px' }}>
                    R$ 10 até 5km + R$ 2/km adicional + <strong>bônus mensal de produtividade de até R$ 2.812,50</strong> + seguro de vida e saúde.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Apenas 3% de Taxa para Comerciantes:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', marginTop: '3px' }}>
                    Comércio local lucrando mais e entregando com excelência e respeito à vizinhança.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
