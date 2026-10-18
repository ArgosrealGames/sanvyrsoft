'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Users, 
  Tv, 
  Camera, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Briefcase, 
  ArrowRight, 
  MessageCircle, 
  Zap,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function RotaImperialAcademyPage() {
  const whatsappUrl = SITE_CONFIG.getWhatsappLink(
    'Olá! Gostaria de saber mais sobre a Studio Academy e oportunidades de capacitação técnica no Rota Imperial Studios.'
  );

  return (
    <div style={{ color: '#f5efe3', paddingBottom: '70px' }}>
      {/* Header Academy */}
      <section style={{
        padding: '70px 24px 50px 24px',
        background: 'radial-gradient(circle at 50% 10%, rgba(56, 189, 248, 0.12) 0%, rgba(13, 11, 9, 0.98) 80%)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            color: '#38bdf8',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '18px'
          }}>
            <GraduationCap size={15} /> Capacitação Técnica &amp; Impacto Regional
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '18px'
          }}>
            Studio Academy: Formando a Próxima Geração do <span style={{ color: '#38bdf8' }}>Cinema Brasileiro</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            Trazer equipes inteiras do centro do país encarece produções em hotéis, passagens e diárias extras. A <strong>Studio Academy</strong> capacita a mão de obra técnica local no Sul, fixando a riqueza na região e <strong>reduzindo os custos de filmagem em até 30%</strong>.
          </p>
        </div>
      </section>

      {/* O DESAFIO DA MÃO DE OBRA & A SOLUÇÃO */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          background: 'rgba(20, 16, 12, 0.85)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '20px',
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              REGRA DE OURO OPERACIONAL
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#fff', marginBottom: '16px' }}>
              "Traga os Chefes, Contrate a Equipe Local"
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '16px' }}>
              No início, as produtoras trazem seus chefes de departamento (Diretor de Fotografia, Diretor de Arte, Engenheiro de Som). O estúdio de Taquara fornece toda a equipe técnica de base: assistentes de câmera, eletricistas de set, maquinistas, continuístas e operadores de Unreal Engine.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Com a <strong>Studio Academy</strong>, esse treinamento não é puramente acadêmico ou teórico, mas sim um modelo de <strong>formação técnica e prática de chão de fábrica</strong> dentro dos próprios galpões e sets de filmagem durante as entressafras de gravação.
            </p>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ color: '#38bdf8', fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>
              Impacto Econômico Imediato:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Redução de até 30% no Custo:</strong> Elimina passagens aéreas e diárias hoteleiras de dezenas de profissionais de fora.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Cota de Contratação Regional (70%):</strong> Cláusula contratual obrigatória nos filmes financiados pelo fundo.</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Fixação de Talentos no RS:</strong> Jovens profissionais não precisam migrar para São Paulo para viver de cinema.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AS TRILHAS TÉCNICAS DE FORMAÇÃO */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            CURSOS PRÁTICOS NO COMPLEXO
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Trilhas Técnicas Especializadas
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            Formação nas funções mais valorizadas e requisitadas pelo mercado de streaming atual.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {/* Trilha 1 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '16px', padding: '28px' }}>
            <Camera size={28} color="#fbbf24" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Certificação RED Digital Cinema
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Treinamento oficial de operação, ciência de cor, calibração e manutenção das câmeras <strong>RED V-Raptor XL 8K</strong> e <strong>Komodo-X</strong>. Formação de 1º e 2º assistentes de câmera e focadores profissionais.
            </p>
          </div>

          {/* Trilha 2 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '16px', padding: '28px' }}>
            <Tv size={28} color="#38bdf8" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Produção Virtual (Unreal Engine / Brain Bar)
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              A profissão mais escassa e disputada do audiovisual moderno: operação do painel de LED em tempo real, tracking de câmeras, integração de cenários 3D fotorrealistas e renderização ao vivo no set.
            </p>
          </div>

          {/* Trilha 3 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(52, 211, 153, 0.25)', borderRadius: '16px', padding: '28px' }}>
            <Zap size={28} color="#34d399" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Segurança &amp; Rigging (NR-10 &amp; NR-35)
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Eletricistas de cinema (Gaffers) e maquinistas especializados em alta voltagem e trabalho em altura no grid suspenso de iluminação, elevando a segurança do set aos padrões rigorosos de Hollywood.
            </p>
          </div>

          {/* Trilha 4 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(244, 63, 94, 0.25)', borderRadius: '16px', padding: '28px' }}>
            <Briefcase size={28} color="#f43f5e" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Controladoria &amp; ERP de Produção
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Capacitação de Production Controllers para emissão de Relatórios Diários de Produção (DPR), conferência de notas fiscais, retenção de impostos e auditoria orçamentária do estúdio.
            </p>
          </div>
        </div>
      </section>

      {/* PARCERIAS ACADÊMICAS & BANCO DE TALENTOS */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {/* Universidades */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
              Convênios com Universidades do Sul
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '16px' }}>
              O Sul do Brasil possui centros de excelência acadêmica em comunicação e cinema (como <strong>PUCRS, Unisinos, UFPel, Feevale, UFSC e FAP/Unespar</strong>). O Rota Imperial Studios oferece o laboratório prático que as faculdades não possuem:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
              <div>✓ <strong>Programa Shadowing:</strong> alunos acompanham chefes experientes no set real.</div>
              <div>✓ <strong>Cursos de Extensão:</strong> carga horária prática validada como créditos acadêmicos.</div>
              <div>✓ <strong>TCCs e Curtas no Estúdio:</strong> acesso a galpões em horários dedicados.</div>
            </div>
          </div>

          {/* Catálogo de Talentos */}
          <div style={{
            background: 'rgba(20, 16, 12, 0.75)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#38bdf8', marginBottom: '14px' }}>
              Catálogo de Profissionais Certificados
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '16px' }}>
              O estúdio mantém um banco de dados ativo com portfólio, contatos e certificações de cada técnico formado. Quando uma produtora de fora aluga os galpões:
            </p>
            <div style={{
              background: 'rgba(56, 189, 248, 0.1)',
              borderLeft: '3px solid #38bdf8',
              padding: '12px 16px',
              borderRadius: '0 8px 8px 0',
              fontSize: '0.88rem',
              color: '#bae6fd',
              lineHeight: 1.5
            }}>
              Entregamos a relação completa de profissionais locais qualificados e auditados pelo estúdio, garantindo contratação rápida e segura com economia comprovada.
            </div>
          </div>
        </div>
      </section>

      {/* CTA PARA ESTUDANTES & PROFISSIONAIS */}
      <section style={{
        padding: '50px 24px 0 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#fff', marginBottom: '12px' }}>
            Quer Participar da Studio Academy?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Seja estudante de cinema, profissional técnico buscando certificação em câmeras RED ou operador 3D de Unreal Engine, cadastre-se para receber o calendário dos próximos workshops.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/rotaimperialstudios/contato"
              style={{
                background: '#38bdf8',
                color: '#000',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}
            >
              Pré-Cadastro para Cursos
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
              Dúvidas sobre a Academy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
