'use client';

import React from 'react';
import { VolumeX, MessageCircle, MapPin, Sparkles, Shield, Heart } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function Footer() {
  return (
    <footer style={{ background: '#04070e', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '70px 0 30px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/entrega_certa_logo.png" alt="APP Entrega Certa Logo" style={{ height: '48px', width: 'auto' }} />
              <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#fff' }}>
                Entrega <span style={{ color: '#10b981' }}>Certa</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
              O primeiro ecossistema de delivery sustentável do Brasil. Entregas silenciosas, frete patrocinado e valorização real de quem trabalha no trânsito.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>
              <VolumeX size={14} />
              Compromisso com o Silêncio Urbano
            </div>
          </div>

          {/* Column 2: Para Entregadores */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Para Entregadores
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#entregadores" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Calculadora de Ganhos</a></li>
              <li><a href="#entregadores" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Tabela de Super Bônus Mensal</a></li>
              <li><a href="#oficinas" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Oficinas de Surdinas Homologadas</a></li>
              <li><a href="#entregadores" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Seguro de Vida e Plano de Saúde</a></li>
            </ul>
          </div>

          {/* Column 3: Para Comércio e Patrocínio */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Parceiros & Lojas
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#comerciantes" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Cadastrar Restaurante (Taxa de 3%)</a></li>
              <li><a href="#comerciantes" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Módulo de Logística Express</a></li>
              <li><a href="#patrocinadores" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Seja um Patrocinador de Fretes</a></li>
              <li><a href="#oficinas" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>Credenciamento de Oficinas Mecânicas</a></li>
            </ul>
          </div>

          {/* Column 4: Expansão & Contato */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Expansão & Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Interessado em levar o APP Entrega Certa para a sua cidade ou ser um representante comercial?
              </div>
              <a
                href={APP_CONFIG.getWhatsappLink("Olá! Gostaria de conversar sobre representação ou expansão do APP Entrega Certa.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#000',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  width: 'fit-content'
                }}
              >
                <MessageCircle size={16} />
                WhatsApp: {APP_CONFIG.formattedPhone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>
          <div>
            &copy; 2026 APP Entrega Certa &bull; Tele Entregas Sustentáveis. Todos os direitos reservados.
          </div>
          <div>
            Desenvolvido em parceria com <span style={{ color: '#fff', fontWeight: 700 }}>Sanvyrsoft</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
