'use client';

import React from 'react';
import { Store, Percent, CheckCircle2, TrendingUp, DollarSign, MessageCircle, Utensils, Pill, ShoppingCart, Briefcase } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function ForMerchants() {
  const sectors = [
    { title: 'Restaurantes & Gastronomia', icon: Utensils },
    { title: 'Farmácias & Saúde', icon: Pill },
    { title: 'Mercados & Bebidas', icon: ShoppingCart },
    { title: 'Autopeças & Escritórios', icon: Briefcase },
  ];

  return (
    <section id="comerciantes" style={{ padding: '90px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#fbbf24',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Para Restaurantes & Lojas
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginTop: '16px', marginBottom: '14px' }}>
            Chega de Pagar 27% a 30% de Taxa em Cada Pedido
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
            No <strong>APP Entrega Certa</strong>, o comerciante é parceiro de verdade. Você vende mais, preserva a sua margem de lucro e oferece entrega de qualidade superior para os seus clientes.
          </p>
        </div>

        {/* Sectors Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#fff',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                <Icon size={18} color="#f59e0b" />
                <span>{s.title}</span>
              </div>
            );
          })}
        </div>

        {/* 2 Pricing Models Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          {/* Modelo A: Loja no App */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 30, 0.95) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', width: 'fit-content', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>
              MODELO COMPLETO
            </div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Loja & Cardápio no APP Entrega Certa
            </h3>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Sua loja visível para milhares de clientes, com cardápio digital e integração de pagamentos.
            </p>

            <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px dashed rgba(245, 158, 11, 0.4)', borderRadius: '16px', padding: '20px', marginBottom: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 700 }}>TAXA SOBRE AS VENDAS</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', margin: '4px 0' }}>
                3% <span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 600 }}>+ 2,42% taxa financeira</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 700 }}>
                vs. 27% a 30% dos outros apps (Economia de mais de 80%)
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#f59e0b" />
                <span>Cardápio online integrado</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#f59e0b" />
                <span>Seus clientes ganham frete grátis patrocinado</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#f59e0b" />
                <span>Painel de pedidos em tempo real</span>
              </li>
            </ul>

            <a
              href={APP_CONFIG.getWhatsappLink("Olá! Quero cadastrar minha loja/restaurante no APP Entrega Certa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Store size={18} />
              Cadastrar Meu Estabelecimento
            </a>
          </div>

          {/* Modelo B: Apenas Logística */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 30, 0.95) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', width: 'fit-content', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>
              MÓDULO LOGÍSTICA PURA
            </div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Apenas Código de Entrega (Sem Loja)
            </h3>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Ideal para quem já vende no WhatsApp, telefone ou site próprio e precisa de motoboys silenciosos e pontuais.
            </p>

            <div style={{ background: 'rgba(6, 182, 212, 0.08)', border: '1px dashed rgba(6, 182, 212, 0.4)', borderRadius: '16px', padding: '20px', marginBottom: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 700 }}>TAXA OPERACIONAL POR ENTREGA</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', margin: '4px 0' }}>
                Apenas 3%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 700 }}>
                Sem taxas financeiras de cartão ou mensalidades
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#06b6d4" />
                <span>Chame um motoboy silencioso em segundos</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#06b6d4" />
                <span>Código de rastreamento por GPS para o seu cliente</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#06b6d4" />
                <span>Zero custo fixo (pague somente quando usar)</span>
              </li>
            </ul>

            <a
              href={APP_CONFIG.getWhatsappLink("Olá! Quero usar o APP Entrega Certa para as entregas dos meus pedidos próprios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              <MessageCircle size={18} />
              Solicitar Integração de Entregas
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
