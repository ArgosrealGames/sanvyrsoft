'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  GraduationCap, 
  Clapperboard, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Tv, 
  Layers,
  ChevronRight,
  MessageCircle,
  Clock,
  Film
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function RotaImperialHomePage() {
  const whatsappUrl = SITE_CONFIG.getWhatsappLink(
    'Olá! Gostaria de mais informações sobre o projeto Rota Imperial Studios.'
  );

  return (
    <div style={{ color: '#f5efe3' }}>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 70px 24px',
        background: 'radial-gradient(circle at 50% 10%, rgba(217, 119, 6, 0.15) 0%, rgba(13, 11, 9, 0.98) 75%)',
        borderBottom: '1px solid rgba(245, 158, 11, 0.15)',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Tagline Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#fbbf24',
            padding: '6px 18px',
            borderRadius: '30px',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            <Sparkles size={15} /> O Novo Epicentro do Audiovisual no Sul do Brasil
          </div>

          {/* Manchete Principal */}
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: '22px',
            letterSpacing: '-0.5px'
          }}>
            Onde a Magia do Cinema Encontra a Agilidade do <span style={{ color: '#fbbf24' }}>Venture Capital</span>
          </h1>

          {/* Subtítulo Executivo */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '860px',
            margin: '0 auto 36px auto',
            fontWeight: 400
          }}>
            Um complexo de <strong>15 hectares (150.000 m²)</strong> em Taquara - RS, a 40 km de Gramado, unindo <strong>Produção Virtual em LED (Unreal Engine)</strong>, galpões acústicos de alto padrão e um <strong>Fundo 100% Privado</strong> que liberta produtoras da burocracia estatal e entrega retorno blindado a investidores.
          </p>

          {/* CTAs do Hero */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
            <Link
              href="/rotaimperialstudios/projeto"
              style={{
                background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                color: '#fff',
                padding: '15px 32px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 6px 25px rgba(217, 119, 6, 0.4)',
                border: '1px solid rgba(251, 191, 36, 0.5)'
              }}
            >
              <Building2 size={19} />
              Conhecer o Masterplan do Projeto
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/rotaimperialstudios/investidores"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                color: '#fbbf24',
                padding: '15px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <TrendingUp size={19} />
              Proposta para Investidores
            </Link>
          </div>

          {/* 4 Métricas de Impacto */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            textAlign: 'left'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '14px',
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fbbf24', fontFamily: 'Georgia, serif' }}>
                15 Hectares
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                150.000 m² no Vale do Paranhana (Taquara - RS)
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '14px',
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#34d399', fontFamily: 'Georgia, serif' }}>
                1.500 m²
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                Sound Stage principal com isolamento acústico NC-25
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '14px',
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#38bdf8', fontFamily: 'Georgia, serif' }}>
                40 km
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                Distância de Gramado (Maior polo de cinema do Sul)
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '14px',
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f43f5e', fontFamily: 'Georgia, serif' }}>
                100% Privado
              </div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                Zero burocracia governamental e retorno protegido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTÍCIA OFICIAL EM DESTAQUE */}
      <section style={{
        padding: '70px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            color: '#fbbf24',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            COMUNICADO DE IMPRENSA &amp; REPERCUSSÃO
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            O Anúncio que Marca uma Nova Era no Cinema Nacional
          </h2>
        </div>

        <div style={{
          background: 'rgba(18, 14, 11, 0.85)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '20px',
          padding: 'clamp(20px, 4vw, 36px)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}>
            {/* Visual da Notícia */}
            <div>
              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
                background: '#0a0907'
              }}>
                <img
                  src="/projects/rota-imperial/recorte_jornal.png"
                  alt="Recorte de Jornal - Rota Imperial Studios"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '10px' }}>
                Edição Nacional Especial • Segunda-feira, 19 de Outubro de 2026
              </div>
            </div>

            {/* Texto Explicativo da Manchete */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#34d399',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '12px',
                textTransform: 'uppercase'
              }}>
                <CheckCircle2 size={15} /> Cobertura Completa dos 15 Hectares
              </div>

              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                color: '#fff',
                lineHeight: 1.25,
                marginBottom: '16px'
              }}>
                Complexo Cinematográfico em Taquara com Fundo Privado Inédito
              </h3>

              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                A matéria oficial destaca a união estratégica de três fatores transformadores: <strong>a independência do governo</strong> através de um fundo de Venture Capital, a <strong>tecnologia de ponta em Produção Virtual (LED/Unreal)</strong> e a <strong>formação de técnicos locais</strong> pela Studio Academy para reduzir custos em 30%.
              </p>

              <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                borderLeft: '3px solid #fbbf24',
                padding: '14px 18px',
                borderRadius: '0 10px 10px 0',
                marginBottom: '26px',
                fontStyle: 'italic',
                fontSize: '0.92rem',
                color: '#fef08a'
              }}>
                "Unimos a estabilidade e previsibilidade da infraestrutura de alta tecnologia com o ganho exponencial dos direitos autorais cinematográficos."
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/rotaimperialstudios/projeto"
                  style={{
                    background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                    color: '#fff',
                    padding: '12px 22px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Ver Detalhes do Projeto <ArrowRight size={16} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MessageCircle size={16} color="#25D366" /> Contatar Assessoria
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO: O GARGALO DO CINEMA VS A ROTA IMPERIAL */}
      <section style={{
        padding: '70px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            A DISRUPÇÃO DE MERCADO
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Por Que o Modelo 100% Privado Muda o Jogo?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto', fontSize: '1rem' }}>
            O mercado tradicional é refém da máquina pública. O Rota Imperial Studios opera com a disciplina, velocidade e governança do mercado financeiro.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {/* Card Modelo Tradicional */}
          <div style={{
            background: 'rgba(30, 20, 20, 0.45)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '16px',
            padding: '30px',
            position: 'relative'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#f87171',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              MODELO TRADICIONAL (ESTATAL)
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
              Burocracia Governamental Lenta
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)' }}>
              <div>⏳ <strong>1 a 3 anos</strong> para aprovar editais e liberar verbas.</div>
              <div>📑 Prestações de contas kafkianas e risco de glosa de valores.</div>
              <div>🚫 O investidor apenas abate imposto, <strong>sem retorno real de lucros</strong>.</div>
              <div>✈️ Dependência total de equipes e fornecedores caros do eixo Rio-São Paulo.</div>
              <div>🏚️ Falta crônica de galpões acústicos e tecnologia de LED no Sul.</div>
            </div>
          </div>

          {/* Card Modelo Rota Imperial */}
          <div style={{
            background: 'rgba(25, 20, 10, 0.65)',
            border: '1px solid rgba(245, 158, 11, 0.5)',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.08)',
            position: 'relative'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(245, 158, 11, 0.2)',
              color: '#fbbf24',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              ROTA IMPERIAL STUDIOS (100% PRIVADO)
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
              Velocidade de Venture Capital
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)' }}>
              <div>⚡ <strong>Sinal verde em semanas</strong> por banca executiva especializada.</div>
              <div>💰 <strong>Cachoeira de Receita (Waterfall)</strong>: 100% do aporte + 15% voltam primeiro.</div>
              <div>🏢 <strong>In-Kind Contribution</strong>: 50% retorna direto ao aluguel do estúdio.</div>
              <div>🎓 <strong>Studio Academy</strong>: mão de obra local com custo 30% menor.</div>
              <div>🛡️ <strong>Governança Blindada</strong>: liberação em 5 parcelas e Cláusula de Takeover.</div>
            </div>
          </div>
        </div>
      </section>

      {/* AS 4 ÁREAS DO PORTAL */}
      <section style={{
        padding: '70px 24px',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            ECOSSISTEMA INTEGRADO
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Explore as Frentes do Complexo
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '22px'
        }}>
          {/* Card 1: Projeto */}
          <Link href="/rotaimperialstudios/projeto" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(20, 16, 12, 0.85)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '16px',
              padding: '28px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, border-color 0.2s'
            }}>
              <div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                  marginBottom: '18px'
                }}>
                  <Building2 size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  Engenharia &amp; Masterplan
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  As 4 zonas dos 15 hectares, galpão acústico de 1.500 m², Produção Virtual LED, subestação elétrica e cronograma em 3 fases.
                </p>
              </div>
              <div style={{ marginTop: '20px', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                Ver especificações &rarr;
              </div>
            </div>
          </Link>

          {/* Card 2: Investidores */}
          <Link href="/rotaimperialstudios/investidores" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(20, 16, 12, 0.85)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '16px',
              padding: '28px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, border-color 0.2s'
            }}>
              <div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(52, 211, 153, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#34d399',
                  marginBottom: '18px'
                }}>
                  <TrendingUp size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  Fundo Privado &amp; ROI
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Retorno de 12% a 18% a.a. no aluguel físico + equity nos filmes financiados. Cachoeira de pagamentos, custos diários e governança.
                </p>
              </div>
              <div style={{ marginTop: '20px', color: '#34d399', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                Ver dados financeiros &rarr;
              </div>
            </div>
          </Link>

          {/* Card 3: Studio Academy */}
          <Link href="/rotaimperialstudios/studio-academy" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(20, 16, 12, 0.85)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '16px',
              padding: '28px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, border-color 0.2s'
            }}>
              <div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  marginBottom: '18px'
                }}>
                  <GraduationCap size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  Studio Academy
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Formação técnica de chão de fábrica: certificação RED, operadores de Unreal Engine (Brain Bar), NR-10/35 e parcerias com universidades.
                </p>
              </div>
              <div style={{ marginTop: '20px', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                Ver programas de ensino &rarr;
              </div>
            </div>
          </Link>

          {/* Card 4: Faça Parte */}
          <Link href="/rotaimperialstudios/faca-parte" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(20, 16, 12, 0.85)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '16px',
              padding: '28px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s, border-color 0.2s'
            }}>
              <div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f43f5e',
                  marginBottom: '18px'
                }}>
                  <Clapperboard size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  Faça Parte (Produtores)
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Como submeter seu filme à nossa banca de 4 cadeiras, foco em High Concept (Terror, Comédia, Ação) e proteção de sigilo com NDA.
                </p>
              </div>
              <div style={{ marginTop: '20px', color: '#f43f5e', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                Submeter projeto &rarr;
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* BANNER FINAL DE ATIVAÇÃO */}
      <section style={{
        padding: '70px 24px',
        background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.15) 0%, rgba(13, 11, 9, 0.95) 100%)',
        borderTop: '1px solid rgba(245, 158, 11, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', color: '#fff', marginBottom: '16px' }}>
            O Futuro do Cinema Nacional Passa por Esta Rota
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, marginBottom: '32px' }}>
            Seja como investidor buscando alavancar seu capital com garantias reais, como produtor querendo filmar sem amarras ou como futuro técnico da nossa Academy: o momento é agora.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/rotaimperialstudios/contato"
              style={{
                background: '#fbbf24',
                color: '#000',
                padding: '14px 30px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.95rem',
                boxShadow: '0 4px 20px rgba(251, 191, 36, 0.3)'
              }}
            >
              Entrar em Contato Conosco
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#000',
                padding: '14px 26px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageCircle size={18} />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
