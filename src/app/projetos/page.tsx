'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { 
  Activity, 
  Crosshair, 
  Gamepad2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  MessageCircle, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  FileText,
  AlertTriangle,
  Award
} from 'lucide-react';

import { SITE_CONFIG } from '@/lib/config';

export default function ProjetosPage() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-deep)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '100px', paddingBottom: '80px' }}>
        {/* Header Banner */}
        <section style={{ 
          padding: '60px 0 40px 0', 
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          background: 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 60%)'
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(56, 189, 248, 0.1)', 
              border: '1px solid rgba(56, 189, 248, 0.3)', 
              padding: '6px 16px', 
              borderRadius: '50px',
              color: '#38bdf8',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '18px'
            }}>
              <Sparkles size={16} />
              {t.projects_hub?.badge || 'OPORTUNIDADES DE INVESTIMENTO'}
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', 
              fontWeight: 800, 
              color: '#fff', 
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              Projetos & Inovações Tecnológicas
            </h1>
            
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.75)', 
              maxWidth: '800px', 
              margin: '0 auto 30px auto', 
              fontSize: '1.15rem', 
              lineHeight: 1.6 
            }}>
              Tecnologias proprietárias desenvolvidas pela Sanvyrsoft prontas para aporte, parceria industrial e escala comercial.
            </p>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={SITE_CONFIG.getWhatsappLink("Olá! Gostaria de conversar sobre oportunidades de investimento nos projetos da Sanvyrsoft.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#000',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={18} />
                Falar com o Fundador no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* PROJETO 1: SML-3000 (DESTAQUE MÁXIMO) */}
        <section id="sml3000" style={{ padding: '70px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top Badges */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#34d399',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Award size={14} /> CARTA PATENTE INPI CONCEDIDA (BR 10 2015 013528-9)
                </span>

                <span style={{
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  color: '#38bdf8',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <ShieldCheck size={14} /> VALIDADO NO HOSPITAL MOINHOS DE VENTO
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                    SML-3000: Monitoramento Térmico de Leito Hospitalar
                  </h2>
                  
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Solução patenteada para <strong>prevenção de quedas em leitos hospitalares</strong>. O sistema identifica quando o paciente começa a se movimentar em direção à beirada e notifica o posto de enfermagem <strong>sem o uso de câmeras</strong>, garantindo total privacidade e conformidade com a LGPD.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Sensores Térmicos de Precisão:</strong> Sem câmeras, respeitando a privacidade dos pacientes e exigências hospitalares.
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Microcontrolador PIC & Algoritmo Dedicado:</strong> Alertas em tempo real antes da queda ocorrer.
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Validação Clínica Concluída:</strong> Testado com sucesso no leito do Hospital Moinhos de Vento (RS).
                      </span>
                    </div>
                  </div>

                  {/* Status Box */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    marginBottom: '28px'
                  }}>
                    <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                      🎯 O QUE BUSCAMOS / OPORTUNIDADE DE INVESTIMENTO:
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Aporte financeiro ou parceria industrial para: <strong>1) Moldes de Injeção Plástica</strong> da carcaça final; <strong>2) Notificação e taxas da ANVISA</strong>; <strong>3) Montagem dos primeiros lotes</strong> comerciais.
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <Link 
                      href="/projetos/sml-3000"
                      style={{
                        background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                        color: '#fff',
                        padding: '14px 26px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 20px rgba(2, 132, 199, 0.4)'
                      }}
                    >
                      Acessar Apresentação Completa (SML-3000)
                      <ArrowRight size={18} />
                    </Link>

                    <a 
                      href={SITE_CONFIG.getWhatsappLink("Olá! Vi o projeto SML-3000 no site da Sanvyrsoft e quero falar sobre investimento.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        padding: '14px 22px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <MessageCircle size={18} color="#25D366" />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>

                {/* Visual Image / Prototype */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    background: 'rgba(0,0,0,0.6)',
                    borderRadius: '16px',
                    padding: '12px',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
                  }}>
                    <img 
                      src="/projects/sml3000/sml-3000-hmv.png" 
                      alt="SML-3000 Protótipo no Hospital Moinhos de Vento" 
                      style={{ width: '100%', height: 'auto', borderRadius: '10px', display: 'block' }}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>
                      Protótipo funcional validado em leito hospitalar real (HMV - Porto Alegre/RS)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETO 2: MOCAP DA SANVYRSOFT */}
        <section id="mocap" style={{ padding: '70px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(20, 15, 35, 0.8) 0%, rgba(30, 20, 50, 0.4) 100%)',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{
                  background: 'rgba(129, 140, 248, 0.15)',
                  border: '1px solid rgba(129, 140, 248, 0.4)',
                  color: '#a5b4fc',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  TECNOLOGIA PROPRIETÁRIA DE CAPTURA CORPORAL
                </span>
                <span style={{
                  background: 'rgba(236, 72, 153, 0.15)',
                  border: '1px solid rgba(236, 72, 153, 0.4)',
                  color: '#f472b6',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  ZERO DRIFT • IMUNE A INTERFERÊNCIAS
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                    Mocap da Sanvyrsoft: Traje de Captura de Movimento
                  </h2>

                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Sistema avançado e inovador de captura de movimento corporal em tempo real composto por um <strong>macacão ergonômico completo (Full Body Suit)</strong>, projetado para indústrias de games, cinema, publicidade e animação 3D. Elimina completamente o deslizamento de pés (*drift*) e funciona perfeitamente em <strong>grandes áreas de captura</strong>, sendo 100% imune a interferências de concreto e estruturas metálicas.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#a5b4fc" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Integração Universal em Tempo Real:</strong> Suporte nativo para <strong>Unreal Engine</strong>, <strong>Unity</strong> e <strong>Godot</strong>, com exportação direta em formatos universais (<code>.FBX</code> e <code>.BVH</code>).
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#a5b4fc" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Cobertura para Grandes Áreas:</strong> Permite performances dinâmicas e captura em estúdios de médio e grande porte com total liberdade de movimento e transmissão sem fio.
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#a5b4fc" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Sem Assinaturas Mensais Abusivas:</strong> Modelo com licença perpétua e suporte dedicado, com custo até 10x mais acessível que trajes importados.
                      </span>
                    </div>
                  </div>

                  <div style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    marginBottom: '28px'
                  }}>
                    <div style={{ color: '#a5b4fc', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                      🎯 STATUS & OPORTUNIDADE DE INVESTIMENTO:
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      Protótipo e arquitetura de software e hardware validados. Buscamos aporte ou parceria estratégica para confecção do lote de trajes e lançamento comercial.
                    </div>
                  </div>

                  <a 
                    href={SITE_CONFIG.getWhatsappLink("Olá! Gostaria de saber mais sobre o projeto Mocap da Sanvyrsoft.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                      color: '#fff',
                      padding: '14px 26px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                    }}
                  >
                    <MessageCircle size={18} />
                    Falar sobre Investimento no Mocap da Sanvyrsoft
                  </a>
                </div>

                {/* Right Box / Tech Features */}
                <div>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid rgba(129, 140, 248, 0.2)'
                  }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#a5b4fc', marginBottom: '16px' }}>
                      ⚡ Destaques do Sistema
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <li style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
                        <strong>Macacão Ergonômico de Alta Flexibilidade:</strong> Tecido respirável de alta durabilidade com nós sensoriais distribuídos por todo o corpo.
                      </li>
                      <li style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
                        <strong>Totalmente Sem Fio & Baixa Latência:</strong> Streaming direto para Unreal Engine e Unity sem cabos atrapalhando o ator.
                      </li>
                      <li style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
                        <strong>Operação em Áreas Amplas:</strong> Excelente alcance de captura para saltos, acrobacias e cenas de ação em estúdio.
                      </li>
                      <li style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>
                        <strong>Zero Drift / Sem Foot-Sliding:</strong> Pés firmes no chão virtual com estabilidade milimétrica.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETO 3: DARK MEAN CITY */}
        <section id="darkmeancity" style={{ padding: '70px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(25, 15, 25, 0.8) 0%, rgba(40, 15, 30, 0.4) 100%)',
              border: '1px solid rgba(244, 114, 182, 0.3)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{
                  background: 'rgba(244, 114, 182, 0.15)',
                  border: '1px solid rgba(244, 114, 182, 0.4)',
                  color: '#f472b6',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  PLAYSTATION STORE CONCEPT OFICIAL
                </span>
                <span style={{
                  background: 'rgba(245, 197, 24, 0.15)',
                  border: '1px solid rgba(245, 197, 24, 0.4)',
                  color: '#f5c518',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  IMDb OFICIAL & ELENCO ESTRELADO
                </span>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  color: '#c084fc',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  ARGOSREAL GAMES ECOSYSTEM
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                    DARK MEAN CITY: The Beginning
                  </h2>

                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Experiência imersiva de ação e suspense cinematográfico para consoles e PC. O título já possui presença oficial registrada na <strong>PlayStation Store Concept</strong>, ficha oficial no <strong>IMDb</strong> com elenco estelar de dublagem e atores, e ecossistema no portal <strong>Argosreal Games</strong>.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#f472b6" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Presença Oficial PlayStation:</strong> Listado no conceito PlayStation Store para lançamento global em consoles.
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#f5c518" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Elenco Profissional Registrado no IMDb:</strong> Personagens interpretados por atores e dubladores de alto calibre técnico.
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#f472b6" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Oportunidade de Co-Publicação:</strong> Captação para expansão da equipe de arte, captura e marketing internacional.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a 
                      href="https://store.playstation.com/pt-br/concept/10002981"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#00439C',
                        color: '#fff',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 15px rgba(0, 67, 156, 0.4)'
                      }}
                    >
                      <ExternalLink size={16} />
                      PlayStation Store
                    </a>

                    <a 
                      href="https://www.imdb.com/pt/title/tt13800396/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#f5c518',
                        color: '#000',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 15px rgba(245, 197, 24, 0.35)'
                      }}
                    >
                      <ExternalLink size={16} />
                      Ver no IMDb
                    </a>

                    <a 
                      href="https://www.imdb.com/pt/title/tt13800396/fullcredits/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(245, 197, 24, 0.1)',
                        border: '1px solid rgba(245, 197, 24, 0.4)',
                        color: '#f5c518',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <ExternalLink size={16} />
                      Elenco Completo (IMDb)
                    </a>

                    <a 
                      href="https://www.argosrealgames.com/pt/games/darkmeancity-thebeginning"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <ExternalLink size={16} />
                      Argosreal Games
                    </a>
                  </div>
                </div>

                {/* Right Info Box */}
                <div>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid rgba(244, 114, 182, 0.2)'
                  }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f472b6', marginBottom: '16px' }}>
                      🎮 Modelo de Negócio em Games
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '15px' }}>
                      Mercado global de games projeta ultrapassar <strong>US$ 200 bilhões</strong>. Dark Mean City une narrativa envolvente com monetização direta em lojas digitais mundiais (PlayStation Store, Steam, Epic Games).
                    </p>
                    <a 
                      href={SITE_CONFIG.getWhatsappLink("Olá! Quero falar sobre investimento e parceria no game Dark Mean City.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#f472b6',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.95rem'
                      }}
                    >
                      Conversar com o Diretor do Projeto &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETO 4: APP ENTREGA CERTA */}
        <section id="entregacerta" style={{ padding: '70px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(10, 25, 20, 0.85) 0%, rgba(6, 18, 14, 0.6) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '24px',
              padding: 'clamp(24px, 5vw, 48px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#34d399',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  TELE ENTREGAS SILENCIOSAS & SUSTENTÁVEIS
                </span>
                <span style={{
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: '#fbbf24',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  FRETE PATROCINADO (ATÉ 100% GRÁTIS)
                </span>
                <span style={{
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  color: '#22d3ee',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '30px'
                }}>
                  TAXA DE APENAS 3% PARA LOJAS
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                    APP Entrega Certa: Tele Entregas Sustentáveis
                  </h2>

                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Aplicativo inovador de delivery onde o <strong>consumidor ganha frete grátis</strong> ao interagir com anúncios de patrocinadores, o <strong>motoboy ganha mais de 2 salários extras por mês</strong> com motos silenciosas (surdinas homologadas) e os <strong>restaurantes pagam apenas 3%</strong> (contra 30% do iFood).
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Frete Grátis Subsididado por Patrocinadores:</strong> O cliente responde 1 pergunta rápida ou assiste a um comercial e zera o valor do frete.
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Super Ganhos para o Motoboy:</strong> R$ 10 base + R$ 2/km + bônus de até R$ 2.812,50/mês + seguro e plano de saúde.
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                        <strong>Zero Poluição Sonora:</strong> Motos com surdinas especiais e GPS que avisa o cliente no celular sem buzinas.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <Link 
                      href="/teste-de-projetos/app-entrega-certa"
                      style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: '#fff',
                        padding: '14px 26px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)'
                      }}
                    >
                      <Sparkles size={18} />
                      Ver Demonstração Interativa & Simulador
                    </Link>

                    <a 
                      href={SITE_CONFIG.getWhatsappLink("Olá! Gostaria de falar sobre investimento e parcerias no projeto APP Entrega Certa.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        padding: '14px 22px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <MessageCircle size={18} />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>

                {/* Right Info Box */}
                <div>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '20px',
                    padding: '28px',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    textAlign: 'center'
                  }}>
                    <img 
                      src="/projects/entrega-certa/entrega_certa_logo.png" 
                      alt="APP Entrega Certa" 
                      style={{ height: '75px', width: 'auto', margin: '0 auto 16px auto', display: 'block' }}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#34d399', marginBottom: '8px' }}>
                      Modelo Disruptivo de Delivery
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '20px' }}>
                      Enquanto os apps tradicionais cobram taxas extorsivas e geram poluição sonora, o Entrega Certa une o silêncio urbano com o patrocínio de marcas para zerar o frete do cliente.
                    </p>
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '12px',
                      padding: '12px',
                      color: '#a7f3d0',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}>
                      ⚡ Demonstração no ar em: /teste-de-projetos/app-entrega-certa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
}

