'use client';

import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  PieChart, 
  Lock, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  FileText,
  Percent,
  Layers,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function RotaImperialInvestidoresPage() {
  const whatsappUrl = SITE_CONFIG.getWhatsappLink(
    'Olá! Sou investidor e gostaria de agendar uma reunião sobre a Rodada Seed do Rota Imperial Studios.'
  );

  return (
    <div style={{ color: '#f5efe3', paddingBottom: '70px' }}>
      {/* Header Investidores */}
      <section style={{
        padding: '70px 24px 50px 24px',
        background: 'radial-gradient(circle at 50% 10%, rgba(52, 211, 153, 0.12) 0%, rgba(13, 11, 9, 0.98) 80%)',
        borderBottom: '1px solid rgba(52, 211, 153, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(52, 211, 153, 0.15)',
            border: '1px solid rgba(52, 211, 153, 0.4)',
            color: '#34d399',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '18px'
          }}>
            <TrendingUp size={15} /> Tese de Investimento &amp; Retorno
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '18px'
          }}>
            A Solidez Imobiliária com o Ganho Exponencial dos <span style={{ color: '#34d399' }}>Direitos Autorais</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            Investir no Rota Imperial Studios une duas fontes robustas de retorno: a <strong>previsibilidade de locação de infraestrutura de alta tecnologia</strong> aliada à <strong>lucratividade exponencial de um fundo privado de cinema</strong> com governança bancária e blindagem de risco.
          </p>
        </div>
      </section>

      {/* AS DUAS FONTES DE RECEITA */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {/* Fonte 1: Aluguel Físico */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.85)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(245, 158, 11, 0.15)',
              color: '#fbbf24',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              RECEITA 1 • ESTABILIDADE IMOBILIÁRIA
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>
              Infraestrutura &amp; Locação Técnica
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, fontSize: '0.94rem', marginBottom: '20px' }}>
              Receita recorrente e previsível de mercado gerada pela locação dos Sound Stages, diárias do Galpão de Produção Virtual (LED), aluguel dos pacotes de câmeras RED e kits de luz para grandes produtoras e streamings (Netflix, Amazon, Globoplay).
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.9rem'
            }}>
              <div>📊 <strong>Retorno Médio Esperado:</strong> 12% a 18% a.a. sobre o CapEx.</div>
              <div>⏳ <strong>Payback da Construção:</strong> Estimado entre 6 e 8 anos.</div>
              <div>🏢 <strong>Previsibilidade:</strong> O espaço físico valoriza continuamente.</div>
            </div>
          </div>

          {/* Fonte 2: O Fundo de Filmes */}
          <div style={{
            background: 'rgba(20, 24, 20, 0.85)',
            border: '1px solid rgba(52, 211, 153, 0.45)',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: '0 10px 30px rgba(52, 211, 153, 0.08)'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(52, 211, 153, 0.2)',
              color: '#34d399',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: 800,
              marginBottom: '16px'
            }}>
              RECEITA 2 • GANHO EXPONENCIAL
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', marginBottom: '14px' }}>
              Fundo de Venture Capital Audiovisual
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, fontSize: '0.94rem', marginBottom: '20px' }}>
              Financiamento de produções independentes de alto apelo comercial e baixo custo (High Concept). O fundo retém cotas majoritárias de equity (60% a 70% dos lucros líquidos perpétuos) após a recuperação total do capital investido.
            </p>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              fontSize: '0.9rem'
            }}>
              <div>🚀 <strong>Efeito Portfólio:</strong> Meta de 5 filmes/ano (1 hit cobre e multiplica o fundo).</div>
              <div>🛡️ <strong>Cachoeira de Receita:</strong> 100% do principal + 15% voltam primeiro.</div>
              <div>📺 <strong>Vendas Globais:</strong> Licenciamento perpétuo em plataformas de streaming.</div>
            </div>
          </div>
        </div>
      </section>

      {/* A CACHOEIRA DE RECEITA (WATERFALL) & IN-KIND */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#34d399', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            BLINDAGEM DE RISCO DO INVESTIDOR
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Como o Capital é Rigorosamente Protegido?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            Diferente do investimento comum de alto risco, estruturamos dois mecanismos financeiros internacionais consagrados:
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginBottom: '40px'
        }}>
          {/* In-Kind Contribution */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fbbf24', marginBottom: '12px' }}>
              1. In-Kind Contribution (Até 50% de Retorno Imediato)
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '14px' }}>
              Quando o fundo aprova o financiamento de um filme parceiro, o contrato estipula que <strong>até 50% do valor aportado deve ser obrigatoriamente gasto dentro do próprio complexo</strong> (locação dos galpões, kits de câmeras RED, painel de LED e pós-produção).
            </p>
            <div style={{
              background: 'rgba(245, 158, 11, 0.1)',
              borderLeft: '3px solid #fbbf24',
              padding: '10px 14px',
              fontSize: '0.85rem',
              color: '#fef08a'
            }}>
              Metade do dinheiro injetado retorna imediatamente para o fluxo de caixa do estúdio no ato da gravação.
            </div>
          </div>

          {/* Waterfall Contract */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#34d399', marginBottom: '12px' }}>
              2. Cachoeira de Receita (O Investidor Recebe Primeiro)
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '14px' }}>
              Todo o dinheiro gerado pelas vendas do filme (streaming, TV, cinema) segue a regra de ouro contratual: <strong>100% da primeira linha de receita líquida vai para ressarcir o investidor</strong>, somado a um prêmio de risco contratual de 15%.
            </p>
            <div style={{
              background: 'rgba(52, 211, 153, 0.1)',
              borderLeft: '3px solid #34d399',
              padding: '10px 14px',
              fontSize: '0.85rem',
              color: '#a7f3d0'
            }}>
              A produtora só participa da divisão de lucros APÓS o investidor ter recuperado todo o seu capital com juros.
            </div>
          </div>
        </div>

        {/* Exemplo Prático Matemático */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '16px',
          padding: '28px'
        }}>
          <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px' }}>
            Simulação Prática de um Filme de R$ 3 Milhões:
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            fontSize: '0.9rem'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Aporte do Fundo</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>R$ 3.000.000</div>
              <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>50% retorna via In-Kind</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Venda ao Streaming</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38bdf8' }}>R$ 4.500.000</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Licenciamento global</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Payback + Prêmio 15%</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34d399' }}>R$ 3.450.000</div>
              <div style={{ fontSize: '0.75rem', color: '#34d399' }}>Recuperação prioritária</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Fatia nos Lucros (70%)</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fbbf24' }}>+ R$ 735.000</div>
              <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>ROI final salta a 39.5%</div>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANÇA: AS 5 PARCELAS & TAKEOVER RIGHT */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            GOVERNANÇA CORPORATIVA &amp; CONTROLE
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Gestão com Rigor Bancário
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            O dinheiro não é entregue de uma vez na mão da produtora. A liberação ocorre por gatilhos físicos auditados.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px'
        }}>
          {/* As 5 Parcelas */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fbbf24', marginBottom: '16px' }}>
              Liberação em 5 Parcelas (Milestones):
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <div><strong>1. Assinatura &amp; Desenvolvimento (15%):</strong> Contratos e direitos autorais limpos.</div>
              <div><strong>2. Sinal Verde / Pré-Produção (25%):</strong> Cronograma e orçamento linha por linha aprovados.</div>
              <div><strong>3. Metade das Gravações (25%):</strong> Prova de cumprimento de diárias sem estourar orçamento.</div>
              <div><strong>4. Picture Wrap / Entrada em Pós (20%):</strong> Material bruto salvo em segurança no Data Center.</div>
              <div><strong>5. Entrega Final do Master (15%):</strong> Retido até auditoria contábil de 100% das notas fiscais.</div>
            </div>
          </div>

          {/* Cláusula de Takeover */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(244, 63, 94, 0.35)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(244, 63, 94, 0.15)',
              color: '#f43f5e',
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 800,
              marginBottom: '12px'
            }}>
              BLINDAGEM JURÍDICA HARD CONTROL
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
              Direito de Intervenção (Takeover Right)
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginBottom: '14px' }}>
              Caso a produtora parceira acumule um atraso superior a <strong>3 diárias de gravação</strong> ou estoure o orçamento aprovado em mais de <strong>10%</strong> sem justificativa de força maior:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'rgba(255,255,255,0.85)' }}>
              <div>✓ O estúdio tem o direito legal de <strong>afastar o produtor ou diretor</strong> imediatamente.</div>
              <div>✓ O estúdio assume o <strong>controle total das contas bancárias</strong> do filme.</div>
              <div>✓ Um <strong>Produtor Substituto</strong> da casa finaliza a obra sem risco de perda do investimento.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANILHA DE CUSTOS DIÁRIOS & VIABILIDADE */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            TRANSPARÊNCIA FINANCEIRA
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Custos Operacionais Diários (Fase 1 vs Fase 3)
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            Estrutura de baixo custo fixo de manutenção (Burn Rate) que protege o caixa nos períodos de desenvolvimento de roteiros.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: 800 }}>FASE 1 • STANDBY (PORTA ABERTA)</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '8px 0' }}>R$ 3.500 <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>/ dia</span></div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
              Segurança 24h, energia básica contratada, manutenção preventiva de lote e equipe administrativa essencial.
            </p>
          </div>

          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ color: '#34d399', fontSize: '0.82rem', fontWeight: 800 }}>FASE 1 • DIÁRIA ATIVA (GRAVANDO)</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '8px 0' }}>R$ 14.500 - 18.500 <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>/ dia</span></div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
              Pico de ar-condicionado NC-25, brigada de incêndio, equipe técnica plantonista e desgaste de equipamentos RED.
            </p>
          </div>

          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ color: '#38bdf8', fontSize: '0.82rem', fontWeight: 800 }}>DIÁRIA DE MERCADO DE ALUGUEL</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '8px 0' }}>R$ 35.000 - 60.000 <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>/ dia</span></div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
              Valor cobrado de grandes players de streaming. Cada 1 dia de estúdio alugado cobre de 10 a 15 dias de custo fixo parado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA PARA AGENDAMENTO DE REUNIÃO / PITCH DECK */}
      <section style={{
        padding: '50px 24px 0 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: '#fff', marginBottom: '14px' }}>
            Abertura da Rodada Seed para Sócios &amp; Investidores
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Estamos selecionando parceiros estratégicos e investidores para a Fase 1 (Engenharia, Subestação e Sound Stage Principal). Entre em contato diretamente com a diretoria para ter acesso ao Pitch Deck completo de 12 slides.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#000',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageCircle size={18} />
              Agendar Reunião pelo WhatsApp
            </a>

            <Link
              href="/rotaimperialstudios/contato"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#fff',
                padding: '14px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
            >
              Solicitar Pitch Deck por E-mail
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
