'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  AlertOctagon, 
  Activity, 
  Cpu, 
  EyeOff, 
  MessageCircle, 
  FileDown, 
  ArrowLeft, 
  TrendingUp, 
  Layers, 
  Check, 
  Building2,
  Users,
  ChevronRight
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function SML3000DetailPage() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-deep)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '100px', paddingBottom: '80px' }}>
        {/* Navigation Breadcrumb */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 2rem 0 2rem' }}>
          <Link 
            href="/projetos"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              color: 'rgba(255,255,255,0.6)', 
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s'
            }}
          >
            <ArrowLeft size={16} /> Voltar para Todos os Projetos
          </Link>
        </div>

        {/* HERO SECTION */}
        <section style={{ 
          padding: '40px 0 60px 0', 
          background: 'radial-gradient(circle at 50% 10%, rgba(2, 132, 199, 0.12) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#34d399',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Award size={16} /> CARTA PATENTE INPI CONCEDIDA (BR 10 2015 013528-9)
              </span>

              <span style={{
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <ShieldCheck size={16} /> VALIDADO NO HOSPITAL MOINHOS DE VENTO (RS)
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <h1 style={{ 
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', 
                  fontWeight: 800, 
                  color: '#fff', 
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15
                }}>
                  SML-3000 <br />
                  <span style={{ color: '#38bdf8', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                    Monitoramento Térmico de Leitos Hospitalares
                  </span>
                </h1>

                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '30px' }}>
                  Sistema inteligente e patenteado para **prevenção de quedas hospitalares** utilizando sensores de temperatura de alta precisão e processamento microcontrolado dedicado. **100% sem câmeras ópticas**, garantindo a total privacidade do paciente e conformidade ética e jurídica.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a 
                    href={SITE_CONFIG.getWhatsappLink("Olá! Estou vendo o projeto SML-3000 no site da Sanvyrsoft e quero conversar sobre investimento.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#25D366',
                      color: '#000',
                      padding: '14px 28px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: 800,
                      fontSize: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: '0 6px 25px rgba(37, 211, 102, 0.4)'
                    }}
                  >
                    <MessageCircle size={20} />
                    Falar com o Fundador no WhatsApp
                  </a>
                </div>
              </div>

              {/* Hero Image Box */}
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
                  borderRadius: '20px',
                  padding: '16px',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}>
                  <img 
                    src="/projects/sml3000/sml-3000-hmv.png" 
                    alt="SML-3000 em funcionamento no Hospital Moinhos de Vento" 
                    style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/projects/sml3000/image.jpg';
                    }}
                  />
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginTop: '12px',
                    padding: '0 6px',
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    <span>📍 Hospital Moinhos de Vento - Porto Alegre/RS</span>
                    <span style={{ color: '#34d399', fontWeight: 600 }}>Aprovado em Leito Real</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. O PROBLEMA CRÍTICO */}
        <section style={{ padding: '70px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                O Desafio do Setor Hospitalar
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginTop: '8px' }}>
                Por que as Quedas de Leito São um Problema Bilionário?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              <div style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '16px',
                padding: '30px'
              }}>
                <div style={{ color: '#ef4444', marginBottom: '16px' }}>
                  <AlertOctagon size={32} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  Até 40% dos Acidentes
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Quedas de leito representam uma das maiores fontes de eventos adversos em pacientes internados, resultando em fraturas de fêmur, traumatismos cranianos e aumento do tempo de internação.
                </p>
              </div>

              <div style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '16px',
                padding: '30px'
              }}>
                <div style={{ color: '#ef4444', marginBottom: '16px' }}>
                  <TrendingUp size={32} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  Custos de R$ 30k a R$ 150k
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  Cada queda com lesão grave impõe ao hospital altos custos adicionais de UTI, cirurgias corretivas de emergência, indenizações jurídicas e perda de acreditações internacionais (JCI / ONA).
                </p>
              </div>

              <div style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '16px',
                padding: '30px'
              }}>
                <div style={{ color: '#ef4444', marginBottom: '16px' }}>
                  <EyeOff size={32} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  Câmeras são Proibidas
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  O uso de câmeras ópticas comuns é severamente restringido e proibido em quartos e leitos hospitalares por violar a privacidade, o pudor dos pacientes e as exigências da LGPD.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COMO FUNCIONA A SOLUÇÃO PATENTEADA */}
        <section style={{ padding: '70px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Engenharia Proprietária
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginTop: '8px' }}>
                A Tecnologia Térmica do SML-3000
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '16px',
                padding: '28px'
              }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px', 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Activity size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  1. Matriz Sensorial Térmica
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Sensores de infravermelho de alta sensibilidade realizam o mapeamento contínuo da temperatura corporal sobre o leito, sem emitir radiação e sem capturar imagens ópticas.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '16px',
                padding: '28px'
              }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px', 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Cpu size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  2. Microcontrolador PIC & Algoritmo
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Software embarcado dedicado analisa os vetores térmicos de movimentação em tempo real, filtrando variações de temperatura ambiente e identificando a proximidade da borda do leito.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '16px',
                padding: '28px'
              }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px', 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <MessageCircle size={24} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  3. Alerta Antecipado à Enfermagem
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  O posto de enfermagem e os dispositivos móveis da equipe recebem o alerta no instante em que o paciente tenta sair da cama, permitindo que o profissional chegue a tempo de evitar a queda.
                </p>
              </div>
            </div>

            {/* Gallery of Real Prototype Photos */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                Galeria Técnica & Fotos do Protótipo em Ambiente Hospitalar
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                Registros dos testes realizados no Hospital Moinhos de Vento (Porto Alegre, RS)
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '12px', padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img 
                  src="/projects/sml3000/02.png" 
                  alt="Instalação do SML-3000 no Leito" 
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', textAlign: 'center' }}>
                  Módulo sensor instalado acima da cabeceira do leito
                </div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '12px', padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img 
                  src="/projects/sml3000/IMG_20150430_120101.jpg" 
                  alt="Testes do SML-3000" 
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', textAlign: 'center' }}>
                  Calibração de sensibilidade e mapa térmico
                </div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '12px', padding: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img 
                  src="/projects/sml3000/MONITOR.png" 
                  alt="Módulo Monitor do SML-3000" 
                  style={{ width: '100%', height: '220px', objectFit: 'contain', background: '#0a0a0a', borderRadius: '8px' }}
                />
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', textAlign: 'center' }}>
                  Interface do Monitor e Central de Alertas
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STATUS ATUAL & O QUE JÁ FOI FEITO */}
        <section style={{ padding: '70px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 78, 59, 0.15) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              marginBottom: '50px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <CheckCircle2 size={28} color="#34d399" />
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
                  Status Atual do Projeto (Barreiras de Risco Já Superadas)
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ background: '#34d399', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={14} strokeWidth={3.5} color="#0a0512" />
                  </div>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Carta Patente Definitiva Concedida:</strong>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginTop: '4px' }}>
                      Patente de Invenção expedida pelo INPI sob número <strong>BR 10 2015 013528-9</strong>.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ background: '#34d399', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={14} strokeWidth={3.5} color="#0a0512" />
                  </div>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Validação Hospitalar Concluída:</strong>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginTop: '4px' }}>
                      Testado em leito real no Hospital Moinhos de Vento com aprovação técnica da equipe assistencial.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ background: '#34d399', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={14} strokeWidth={3.5} color="#0a0512" />
                  </div>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Hardware & Firmware Validados:</strong>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginTop: '4px' }}>
                      Circuitos integrados, microcontrolador PIC e algoritmo térmico testados e operando com máxima confiabilidade.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ background: '#34d399', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Check size={14} strokeWidth={3.5} color="#0a0512" />
                  </div>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>Demanda de Mercado Confirmada:</strong>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', marginTop: '4px' }}>
                      Hospital cliente interessado em fazer o primeiro pedido assim que as carcaças industriais estiverem prontas.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. O QUE FALTA (A OPORTUNIDADE DE INVESTIMENTO) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}>
              <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                A Oportunidade Atual
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                O Que Falta: Etapas Finais para a Escala Comercial
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                A tecnologia já foi desenvolvida, testada, validada e patenteada. Para iniciar as entregas comerciais e abastecer os clientes hospitalares que já aguardam o produto, estamos viabilizando as 3 etapas finais:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                {/* 1. Moldes */}
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #38bdf8' }}>
                  <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                    1. Ferramentaria Industrial
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                    Moldes de Injeção Plástica da Carcaça
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    Construção dos moldes definitivos para injeção plástica dos gabinetes (módulo sensor de leito e central), garantindo acabamento e durabilidade hospitalar.
                  </p>
                </div>

                {/* 2. ANVISA */}
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #10b981' }}>
                  <div style={{ color: '#34d399', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                    2. Rito Sanitário & Conformidade
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                    Notificação e Taxas da ANVISA
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    Protocolo de Notificação Classe II (rito simplificado de aprovação), recolhimento de taxas regulatórias e laudos laboratoriais de conformidade (normas IEC 60601 / IEC 62304).
                  </p>
                </div>

                {/* 3. Lotes */}
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '24px', borderRadius: '14px', borderLeft: '4px solid #a855f7' }}>
                  <div style={{ color: '#c084fc', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '6px' }}>
                    3. Produção Comercial
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                    Montagem dos Primeiros Lotes
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    Aquisição de componentes e fabricação do lote piloto e primeiros lotes comerciais para atender a demanda imediata de clientes de estreia.
                  </p>
                </div>
              </div>

              {/* Parcerias */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8', marginBottom: '6px' }}>
                    💼 Investidor Anjo / Sócio Capitalista
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                    Aporte de capital financeiro para viabilizar as etapas finais em troca de participação societária (Equity) via Contrato de Mútuo Conversível.
                  </p>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#c084fc', marginBottom: '6px' }}>
                    🏭 Parceria com Indústria de Injeção Plástica
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                    Fabricação dos moldes e fornecimento das peças plásticas remunerada através de <strong>royalties por unidade comercializada</strong> ou joint-venture.
                  </p>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '20px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>
                    Vamos Construir essa Parceria?
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                    Fale diretamente com o fundador e receba o material financeiro completo.
                  </div>
                </div>

                <a 
                  href={SITE_CONFIG.getWhatsappLink("Olá! Tenho interesse em investir no projeto SML-3000 (Sanvyrsoft).")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25D366',
                    color: '#000',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
                  }}
                >
                  <MessageCircle size={20} />
                  Falar Diretamente no WhatsApp Business
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}
