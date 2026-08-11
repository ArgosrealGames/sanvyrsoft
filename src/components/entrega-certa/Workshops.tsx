'use client';

import React from 'react';
import { Wrench, VolumeX, ShieldCheck, MapPin, Users, MessageCircle, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function Workshops() {
  return (
    <section id="oficinas" style={{ padding: '90px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: 'rgba(139, 92, 246, 0.12)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            color: '#a78bfa',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Parcerias Técnicas
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginTop: '16px', marginBottom: '14px' }}>
            Rede de Oficinas Mecânicas & Surdinas Credenciadas
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
            Para rodar no <strong>APP Entrega Certa</strong>, a moto do entregador precisa ter um nível de ruído dentro do padrão e surdina homologada. Seja a oficina de referência na sua região!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
          
          {/* Card 1: Vantagens para a Oficina */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 30, 0.95) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Wrench size={24} color="#a78bfa" />
              Por Que Ser uma Oficina Credenciada?
            </h3>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <ShieldCheck size={20} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Fluxo Constante de Motoboys:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.88rem', marginTop: '2px' }}>
                    Indicação direta no aplicativo de todos os entregadores da sua cidade para instalação, troca de óleo, pneus e revisão da surdina.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <ShieldCheck size={20} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Emissão de Selo de Conformidade Entrega Certa:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.88rem', marginTop: '2px' }}>
                    Sua oficina terá autorização oficial para certificar o padrão acústico das motos cadastradas no sistema.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <ShieldCheck size={20} color="#a78bfa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Receita Recorrente em Peças e Serviços:</strong>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.88rem', marginTop: '2px' }}>
                    Fidelização de centenas de profissionais que rodam diariamente e precisam de manutenção rápida.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 2: CTA Credenciamento */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '24px',
            padding: '36px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'rgba(139, 92, 246, 0.2)',
              color: '#c4b5fd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <VolumeX size={32} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                Cadastre Sua Oficina Mecânica
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', maxWidth: '380px', margin: '0 auto' }}>
                Torne-se o ponto de referência da sua região para os entregadores do APP Entrega Certa.
              </p>
            </div>

            <a
              href={APP_CONFIG.getWhatsappLink("Olá! Tenho uma oficina mecânica / de escapamentos e quero ser credenciada no APP Entrega Certa.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)'
              }}
            >
              <MessageCircle size={18} />
              Quero Credenciar Minha Oficina
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
