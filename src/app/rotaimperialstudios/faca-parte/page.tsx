'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Clapperboard, 
  FileCheck, 
  ShieldAlert, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  MessageCircle, 
  Lock,
  ArrowRight,
  Flame,
  Smile,
  ShieldCheck
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

export default function RotaImperialFacaPartePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    produtora: '',
    tituloFilme: '',
    genero: 'Terror / Suspense',
    orcamentoEstimado: '',
    logline: '',
    linkRoteiro: ''
  });

  const whatsappUrl = SITE_CONFIG.getWhatsappLink(
    'Olá! Sou produtor/roteirista e gostaria de apresentar uma proposta de filme para a banca do Rota Imperial Studios.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Monta mensagem para WhatsApp ou e-mail
    const msg = `Olá! Acabei de enviar uma submissão de projeto para o Rota Imperial Studios:
Nome: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}
Produtora: ${formData.produtora || 'Independente'}
Projeto: ${formData.tituloFilme}
Gênero: ${formData.genero}
Orçamento Estimado: ${formData.orcamentoEstimado}
Logline: ${formData.logline}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5551991867278?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div style={{ color: '#f5efe3', paddingBottom: '70px' }}>
      {/* Header Faça Parte */}
      <section style={{
        padding: '70px 24px 50px 24px',
        background: 'radial-gradient(circle at 50% 10%, rgba(244, 63, 94, 0.12) 0%, rgba(13, 11, 9, 0.98) 80%)',
        borderBottom: '1px solid rgba(244, 63, 94, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(244, 63, 94, 0.15)',
            border: '1px solid rgba(244, 63, 94, 0.4)',
            color: '#f43f5e',
            padding: '6px 16px',
            borderRadius: '30px',
            fontSize: '0.82rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '18px'
          }}>
            <Clapperboard size={15} /> Para Produtores &amp; Cineastas
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '18px'
          }}>
            Seu Filme no Set em Semanas, Sem a Fila dos <span style={{ color: '#f43f5e' }}>Editais Públicos</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            Cansado de esperar de 1 a 3 anos pela burocracia das leis de incentivo? O <strong>Rota Imperial Studios</strong> avalia seu projeto através de uma banca executiva e concede "sinal verde" imediato com infraestrutura completa e capital privado em troca de cotas de coprodução.
          </p>
        </div>
      </section>

      {/* A BANCA DE SELEÇÃO: AS 4 CADEIRAS */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#f43f5e', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            COMO AVALIAMOS SEU PROJETO
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            A Banca Executiva com 4 Cadeiras Especializadas
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            Nosso comitê analisa a viabilidade artística, técnica e comercial de cada roteiro com critérios matemáticos e objetivos.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px'
        }}>
          {/* Cadeira 1 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '26px' }}>
            <div style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px' }}>CADEIRA 1</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
              Inteligência Comercial (O "Vendedor")
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Avalia a vendabilidade para streamings e distribuidores. Se o teto que o mercado pagaria por aquele filme for R$ 2,5 milhões, o orçamento não pode ultrapassar essa margem.
            </p>
          </div>

          {/* Cadeira 2 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '16px', padding: '26px' }}>
            <div style={{ color: '#34d399', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px' }}>CADEIRA 2</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
              Engenharia de Produção (O "Czar do Orçamento")
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Diretor de Produção sênior que decompõe o roteiro: "essa perseguição externa pode ser resolvida em 2 diárias no nosso painel de LED por metade do custo e risco zero".
            </p>
          </div>

          {/* Cadeira 3 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '16px', padding: '26px' }}>
            <div style={{ color: '#38bdf8', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px' }}>CADEIRA 3</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
              Curadoria &amp; Roteiro (O "Script Doctor")
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Analisa se a narrativa prende o espectador desde os primeiros minutos (evitando a desistência do streaming). Condiciona o aporte a ajustes finos nos ganchos comerciais da trama.
            </p>
          </div>

          {/* Cadeira 4 */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: '16px', padding: '26px' }}>
            <div style={{ color: '#f43f5e', fontSize: '0.82rem', fontWeight: 800, marginBottom: '6px' }}>CADEIRA 4</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
              Jurídico &amp; Compliance (O "Advogado")
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Garante que a cadeia de direitos autorais está 100% limpa, redige os contratos de cessão, equity de coprodução e o termo de confidencialidade com NDA.
            </p>
          </div>
        </div>
      </section>

      {/* GÊNEROS PRIORITÁRIOS (HIGH CONCEPT) */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
            O QUE MAIS BUSCAMOS FINANCIAR
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff' }}>
            Gêneros de Alto Retorno e Forte Apelo de Público
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', margin: '10px auto 0 auto' }}>
            No cinema privado, priorizamos ideias que tenham premissas fáceis de vender (High Concept) e custo de produção controlado.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {/* Terror */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(244, 63, 94, 0.35)', borderRadius: '16px', padding: '28px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>👻 <strong>Terror &amp; Suspense Psicológico</strong></div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '14px' }}>
              O gênero mais lucrativo do cinema mundial. O público é fiel e consome obras sem a necessidade de astros caros. O clima frio, as névoas e as florestas da serra gaúcha servem como locação externa perfeita.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#f43f5e', fontWeight: 700 }}>
              ✓ Custo de produção baixo, altíssimo ROI
            </div>
          </div>

          {/* Comédia */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(245, 158, 11, 0.35)', borderRadius: '16px', padding: '28px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>🎭 <strong>Comédias Comerciais</strong></div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '14px' }}>
              Historicamente o campeão de bilheteria e audiência de streaming no Brasil. Permite grande inserção de patrocínio de marcas privadas (Brand Entertainment) antes mesmo da estreia.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#fbbf24', fontWeight: 700 }}>
              ✓ Forte apelo com marcas e patrocinadores
            </div>
          </div>

          {/* Ação / Policial */}
          <div style={{ background: 'rgba(20, 16, 12, 0.75)', border: '1px solid rgba(56, 189, 248, 0.35)', borderRadius: '16px', padding: '28px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>💥 <strong>Ação, Crime &amp; Perseguição</strong></div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '14px' }}>
              Perseguições e tiroteios que antes custavam fortunas em cidades reais agora podem ser filmados dentro do galpão de LED (Produção Virtual), com controle de luz e custo previsível.
            </p>
            <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 700 }}>
              ✓ Alavancagem máxima do estúdio de LED
            </div>
          </div>
        </div>
      </section>

      {/* BLINDAGEM DE SIGILO: TERMO DE CONFIDENCIALIDADE (NDA) */}
      <section style={{
        padding: '50px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.55)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '12px',
            background: 'rgba(52, 211, 153, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#34d399',
            flexShrink: 0
          }}>
            <Lock size={26} />
          </div>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
              Segurança e Rastreabilidade Digital para seu Roteiro (NDA)
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Todos os roteiros e sinopses submetidos ao Rota Imperial Studios são protegidos por termo de sigilo estrito de 3 a 5 anos e recebem uma <strong>marca d'água digital dinâmica e invisível</strong> vinculando o arquivo ao CPF/CNPJ de quem o avalia, garantindo 100% de segurança contra vazamento ou plágio.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE SUBMISSÃO DE PROJETO */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '860px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#fff' }}>
            Envie Seu Projeto para Análise
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginTop: '8px' }}>
            Preencha os dados preliminares. Nossa mesa de curadoria entrará em contato em até 5 dias úteis.
          </p>
        </div>

        {submitted ? (
          <div style={{
            background: 'rgba(52, 211, 153, 0.15)',
            border: '1px solid rgba(52, 211, 153, 0.4)',
            borderRadius: '16px',
            padding: '36px',
            textAlign: 'center'
          }}>
            <CheckCircle2 size={48} color="#34d399" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px' }}>
              Submissão Enviada com Sucesso!
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Abrimos a conversa no WhatsApp para que você possa encaminhar arquivos adicionais ou o deck do seu filme diretamente para a nossa equipe.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                background: '#fbbf24',
                color: '#000',
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Enviar Outro Projeto
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'rgba(20, 16, 12, 0.85)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 36px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Ex: João da Silva"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  E-mail de Contato *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="joao@produtora.com"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  Telefone / WhatsApp *
                </label>
                <input
                  type="text"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  placeholder="(51) 99999-9999"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  Produtora (ou "Independente")
                </label>
                <input
                  type="text"
                  value={formData.produtora}
                  onChange={(e) => setFormData({ ...formData, produtora: e.target.value })}
                  placeholder="Ex: Aurora Filmes"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  Título do Filme / Projeto *
                </label>
                <input
                  type="text"
                  required
                  value={formData.tituloFilme}
                  onChange={(e) => setFormData({ ...formData, tituloFilme: e.target.value })}
                  placeholder="Ex: A Névoa da Colina"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  Gênero Principal *
                </label>
                <select
                  value={formData.genero}
                  onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#16130f',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem'
                  }}
                >
                  <option value="Terror / Suspense">Terror / Suspense</option>
                  <option value="Comédia Comercial">Comédia Comercial</option>
                  <option value="Ação / Crime / Policial">Ação / Crime / Policial</option>
                  <option value="Drama Romântico / Feel Good">Drama Romântico / Feel Good</option>
                  <option value="Outro Gênero">Outro Gênero</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                Orçamento Estimado do Projeto
              </label>
              <input
                type="text"
                value={formData.orcamentoEstimado}
                onChange={(e) => setFormData({ ...formData, orcamentoEstimado: e.target.value })}
                placeholder="Ex: R$ 2.000.000 a R$ 3.500.000"
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  color: '#fff',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                Logline / Resumo da Trama (Até 3 parágrafos) *
              </label>
              <textarea
                required
                rows={4}
                value={formData.logline}
                onChange={(e) => setFormData({ ...formData, logline: e.target.value })}
                placeholder="Descreva a premissa dramática do filme, quem é o protagonista e o grande conflito da história..."
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  color: '#fff',
                  fontSize: '0.95rem',
                  lineHeight: 1.5
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
                color: '#fff',
                padding: '15px 32px',
                borderRadius: '10px',
                border: 'none',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(244, 63, 94, 0.4)'
              }}
            >
              <Send size={18} />
              Submeter Projeto à Banca de Seleção
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
