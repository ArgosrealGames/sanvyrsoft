'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Layers, 
  Zap, 
  Tv, 
  Camera, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Volume2, 
  Lock,
  Cpu,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function RotaImperialProjetoPage() {
  const whatsappUrl = SITE_CONFIG.getWhatsappLink(
    'Olá! Gostaria de falar sobre o projeto técnico e infraestrutura do Rota Imperial Studios.'
  );

  return (
    <div style={{ color: '#f5efe3', paddingBottom: '70px' }}>
      {/* Header do Projeto */}
      <section style={{
        padding: '70px 24px 50px 24px',
        background: 'radial-gradient(circle at 50% 10%, rgba(217, 119, 6, 0.12) 0%, rgba(13, 11, 9, 0.98) 80%)',
        borderBottom: '1px solid rgba(245, 158, 11, 0.15)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#fbbf24',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '18px'
          }}>
            <Building2 size={15} /> Masterplan de Engenharia &amp; Tecnologia
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '18px'
          }}>
            Infraestrutura de Hollywood no <span style={{ color: '#fbbf24' }}>Coração do Sul</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            Um complexo de <strong>15 hectares (150.000 m²)</strong> planejado em 4 zonas estratégicas para garantir isolamento acústico total, fluxo logístico pesado separado do elenco e capacidade para rodar múltiplos longas-metragens e séries em paralelo.
          </p>
        </div>
      </section>

      {/* POR QUE TAQUARA? */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          background: 'rgba(20, 16, 12, 0.85)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '20px',
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              LOCALIZAÇÃO ESTRATÉGICA
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', marginBottom: '16px' }}>
              A Força do Vale do Paranhana e a Mística de Gramado
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '16px' }}>
              A escolha de <strong>Taquara - RS</strong> é estrategicamente perfeita. O município está no coração do Vale do Paranhana, colado na Região das Hortênsias e a <strong>apenas 40 km de Gramado</strong> — o centro histórico do cinema nacional por conta do seu tradicional Festival Internacional.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Gramado oferece infraestrutura hoteleira 5 estrelas, apelo turístico internacional e trânsito político e comercial de ponta. Taquara entrega a contrapartida essencial: <strong>terrenos amplos de 15 hectares com custo de metro quadrado altamente competitivo</strong> e topografia propícia para grandes galpões e cidades cenográficas.
            </p>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ color: '#fbbf24', fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>
              Vantagens Geográficas e Logísticas:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>40 km de Gramado:</strong> Acesso rápido aos melhores hotéis, gastronomia e eventos.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>75 km de Porto Alegre:</strong> Proximidade com o Aeroporto Internacional Salgado Filho.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Polo Universitário Regional:</strong> Universidades como Unisinos, PUCRS, Feevale e Faccat fornecendo talentos.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Paisagens Naturais Únicas:</strong> Florestas nativas, serras e clima de neblina ideais para locações externas.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AS 4 ZONAS DO MASTERPLAN */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            ORGANIZAÇÃO ESPACIAL
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            As 4 Grandes Zonas do Lote de 15 Hectares
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            Distribuição lógica para garantir que caminhões de carga e geradores nunca interfiram no silêncio dos estúdios de gravação.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px'
        }}>
          {/* Zona 1 */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>ZONA 1</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Complexo de Gravação Silencioso
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '14px' }}>
              Galpão Principal de Som (1.500 m² a 2.000 m²) com pé-direito de 8 a 10 metros, piso laser nivelado, portões acústicos <em>Elephant Doors</em> e Galpão de Produção Virtual (LED Volume).
            </p>
            <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600 }}>
              ✓ Isolamento Acústico NC-25
            </div>
          </div>

          {/* Zona 2 */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{ color: '#34d399', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>ZONA 2</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Backlot &amp; Cenários Externos
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '14px' }}>
              De 2 a 3 hectares de terra limpa e plana para construção de cidades cenográficas sazonais (vilas históricas, ruas temáticas) e um <strong>Tanque de Água Externo (30x30m)</strong> com borda infinita.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600 }}>
              ✓ Cenas marítimas e épicas
            </div>
          </div>

          {/* Zona 3 */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>ZONA 3</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Logística, Oficinas &amp; Acervo
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '14px' }}>
              Pavilhão de Cenografia e Marcenaria (1.500 m²), depósito climatizado e desumidificado contra mofo para figurinos e adereços (Props), pátio pavimentado para carretas e geradores.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600 }}>
              ✓ Preservação contra umidade do Sul
            </div>
          </div>

          {/* Zona 4 */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{ color: '#f43f5e', fontWeight: 800, fontSize: '0.85rem', marginBottom: '6px' }}>ZONA 4</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Prédio Central &amp; Pós-Produção
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '14px' }}>
              Edifício administrativo, recepção e refeitório no térreo. No piso superior: Data Center antivazamento, ilhas de edição, salas de correção de cor, estúdio de Foley e cinema privado Dolby Atmos.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600 }}>
              ✓ Hub de Pós-Produção Integrado
            </div>
          </div>
        </div>
      </section>

      {/* CRONOGRAMA EM 3 FASES */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            DESENVOLVIMENTO SUSTENTÁVEL
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Cronograma de Engenharia em 3 Fases (40 Meses)
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            Construir em fases permite que a Fase 1 comece a faturar e gerar receita imediata de locação enquanto as fases seguintes são erguidas.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Fase 1 */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.85)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '16px',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(245, 158, 11, 0.2)',
                color: '#fbbf24',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '10px'
              }}>
                FASE 1 • MESES 1 A 14 (NÚCLEO OPERACIONAL)
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                Entrada em Operação e Primeira Geração de Receita
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Terraplanagem dos 15 hectares, subestação elétrica própria de 750 kVA, Sound Stage Principal de 1.500 m² com isolamento acústico NC-25, Prédio Central administrativo e as primeiras ilhas de edição.
              </p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>MARCO DA FASE 1:</strong>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                O estúdio já abre as portas no mês 14 pronto para receber longas-metragens e comerciais, faturando diárias de R$ 35k a R$ 60k.
              </div>
            </div>
          </div>

          {/* Fase 2 */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.85)',
            border: '1px solid rgba(52, 211, 153, 0.35)',
            borderRadius: '16px',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(52, 211, 153, 0.15)',
                color: '#34d399',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '10px'
              }}>
                FASE 2 • MESES 15 A 26 (SALTO TECNOLÓGICO)
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                Produção Virtual em LED e Oficinas de Apoio
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Construção do Galpão de Produção Virtual (1.000 m²) com painel curvo de LED de alta definição integrado ao Unreal Engine. Pavilhão industrial de Cenografia e Marcenaria (1.500 m²), galpão climatizado de figurinos e estúdio Dolby Atmos.
              </p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <strong style={{ color: '#34d399', display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>MARCO DA FASE 2:</strong>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                Capacidade de atender grandes contratos internacionais de streaming (Netflix/Amazon) com tecnologia de ponta e pós-produção 100% interna.
              </div>
            </div>
          </div>

          {/* Fase 3 */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '16px',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '10px'
              }}>
                FASE 3 • MESES 27 A 40 (CONSOLIDAÇÃO TOTAL)
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                Backlot, Tanque de Água e Múltiplos Estúdios
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Abertura das ruas cenográficas no Backlot, escavação do Tanque de Água Externo (30x30m), construção de mais 2 galpões secundários (800 m² cada) e Sala de Cinema Privada VIP para eventos e pitchings de mercado.
              </p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>MARCO DA FASE 3:</strong>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                Capacidade plena de 15 hectares autossuficientes, permitindo que 3 ou mais longas-metragens rodem simultaneamente em galpões e áreas externas.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPAMENTOS & INVENTÁRIO (RED & LED) */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            INVENTÁRIO PADRÃO HOLLYWOOD
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Ecossistema RED Digital Cinema &amp; Iluminação LED
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            Os kits de equipamentos da casa garantem que produções parceiras não precisem alugar câmeras ou refletores de locadoras externas de SP ou RJ.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {/* Câmeras */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <Camera size={28} color="#fbbf24" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Câmeras &amp; Lentes PL
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              <li>• <strong>RED V-Raptor XL 8K VV:</strong> Câmera A para galpões de som e volume de LED.</li>
              <li>• <strong>RED Komodo-X 6K:</strong> Global Shutter para cenas de ação, gimbals e veículos.</li>
              <li>• <strong>Kits de Lentes Prime &amp; Zoom PL:</strong> Zeiss CP.3, Cooke Panchro e Angénieux EZ.</li>
              <li>• <strong>Sistemas Sem Fio:</strong> Teradek Bolt 4K e follow focus Teradek RT.</li>
            </ul>
          </div>

          {/* Iluminação */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <Zap size={28} color="#fbbf24" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Iluminação 100% LED de Alta Potência
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              <li>• <strong>Aputure Electro Storm CS15 / XT26:</strong> Monstruosa potência substituindo antigos HMI.</li>
              <li>• <strong>ARRI SkyPanel &amp; Aputure Nova P600c:</strong> Luz suave de preenchimento para elenco.</li>
              <li>• <strong>Astera Titan Tubes:</strong> Tubos sem fio controlados via DMX / App para reflexos em veículos.</li>
              <li>• <strong>Calhas Elétricas de Teto (Busways):</strong> Elimina quilômetros de cabos pelo chão do estúdio.</li>
            </ul>
          </div>

          {/* Subestação Elétrica */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <ShieldCheck size={28} color="#fbbf24" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Subestação Própria &amp; Redundância
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              <li>• <strong>Capacidade 750 kVA a 2 MW:</strong> Transformadores dedicados de média tensão.</li>
              <li>• <strong>3 Redes Elétricas Separadas:</strong> Técnica (Cinema/RED), Força (Motores/HVAC) e Comercial.</li>
              <li>• <strong>Pátio de Geradores Conteinerizados:</strong> Transferência automática (ATS) em &lt;10s.</li>
              <li>• <strong>Camera Vault Blindado:</strong> Bunker de concreto armado com rastreamento RFID ativo.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA INFERIOR */}
      <section style={{
        padding: '50px 24px 0 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#fff', marginBottom: '12px' }}>
            Quer Analisar o Memorial Descritivo de Engenharia?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Nossa equipe técnica e comercial está à disposição para apresentar memoriais descritivos acústicos, plantas preliminares e viabilidade de solo.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/rotaimperialstudios/investidores"
              style={{
                background: '#fbbf24',
                color: '#000',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}
            >
              Ver Retorno de Investimento (ROI) &rarr;
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#000',
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
              <MessageCircle size={16} />
              Conversar sobre Engenharia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
