'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building2, 
  ShieldCheck,
  Sparkles,
  Loader2
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';
import { sendRotaImperialContactEmail } from '@/app/actions';

export default function RotaImperialContatoPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

  const whatsappUrl = SITE_CONFIG.getWhatsappLink(
    'Olá! Gostaria de falar com a diretoria do Rota Imperial Studios.'
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await sendRotaImperialContactEmail(formData);

      if (response.success) {
        setResult({ success: true });
        formRef.current?.reset();
      } else {
        setResult({ error: response.error || 'Erro ao enviar a mensagem. Tente novamente.' });
      }
    } catch (err: any) {
      console.error('Erro no envio do formulário:', err);
      setResult({ error: 'Falha de conexão com o servidor de e-mail. Por favor, tente novamente ou use nosso WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={{ color: '#f5efe3', paddingBottom: '70px' }}>
      {/* Header Contato */}
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
            <Mail size={15} /> Atendimento Oficial
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '18px'
          }}>
            Fale Conosco: <span style={{ color: '#fbbf24' }}>Diretoria &amp; Relações Institucionais</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            Canal direto para investidores da rodada Seed, produtoras parceiras, marcas interessadas em *Brand Entertainment* e estudantes para a Studio Academy.
          </p>
        </div>
      </section>

      {/* BLOCOS DE CONTATO RÁPIDO */}
      <section style={{
        padding: '60px 24px',
        maxWidth: '1240px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {/* Bloco 1: E-mail */}
        <div style={{
          background: 'rgba(20, 16, 12, 0.75)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '16px',
          padding: '28px'
        }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24',
            marginBottom: '16px'
          }}>
            <Mail size={22} />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
            E-mail Institucional
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
            Para propostas formais, decks e contato com a banca executiva:
          </p>
          <a
            href="mailto:contact@sanvyrsoft.com"
            style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.98rem', textDecoration: 'none' }}
          >
            contact@sanvyrsoft.com
          </a>
        </div>

        {/* Bloco 2: WhatsApp */}
        <div style={{
          background: 'rgba(20, 16, 12, 0.75)',
          border: '1px solid rgba(52, 211, 153, 0.35)',
          borderRadius: '16px',
          padding: '28px'
        }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'rgba(52, 211, 153, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#34d399',
            marginBottom: '16px'
          }}>
            <MessageCircle size={22} />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
            WhatsApp Oficial
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
            Atendimento ágil para investidores, imprensa e agendamentos:
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#34d399', fontWeight: 700, fontSize: '0.98rem', textDecoration: 'none' }}
          >
            +55 (51) 99186-7278
          </a>
        </div>

        {/* Bloco 3: Localização */}
        <div style={{
          background: 'rgba(20, 16, 12, 0.75)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '16px',
          padding: '28px'
        }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'rgba(56, 189, 248, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#38bdf8',
            marginBottom: '16px'
          }}>
            <MapPin size={22} />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
            Sede do Complexo
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '16px' }}>
            Taquara - Rio Grande do Sul, Brasil<br />
            Vale do Paranhana (a 40 km de Gramado)<br />
            Área de 15 Hectares (150.000 m²)
          </p>
          <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>
            Proximidade com aeroportos e rede hoteleira
          </span>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO (ENVIO POR E-MAIL) */}
      <section style={{
        padding: '20px 24px 60px 24px',
        maxWidth: '820px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(20, 16, 12, 0.85)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '20px',
          padding: 'clamp(24px, 4vw, 36px)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#fff', marginBottom: '8px' }}>
              Envie uma Mensagem por E-mail
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem' }}>
              Preencha os campos abaixo. Sua mensagem será enviada diretamente para <strong>contact@sanvyrsoft.com</strong>.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  Seu Nome Completo *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Nome completo"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  E-mail Corporativo / Pessoal *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="email@empresa.com"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  WhatsApp / Telefone *
                </label>
                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="(51) 99999-9999"
                  style={{
                    width: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                  Qual é o seu Perfil? *
                </label>
                <select
                  name="profile"
                  defaultValue="Investidor / Family Office"
                  style={{
                    width: '100%',
                    background: '#16130f',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Investidor / Family Office">Investidor / Family Office</option>
                  <option value="Produtora / Cineasta / Roteirista">Produtora / Cineasta / Roteirista</option>
                  <option value="Estudante / Técnico (Studio Academy)">Estudante / Técnico (Studio Academy)</option>
                  <option value="Marca / Brand Entertainment">Marca / Patrocínio (Brand Entertainment)</option>
                  <option value="Imprensa / Assessoria">Imprensa / Assessoria</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '6px' }}>
                Sua Mensagem *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Escreva sua mensagem, proposta ou dúvida para a diretoria do Rota Imperial Studios..."
                style={{
                  width: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  color: '#fff',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                color: '#fff',
                padding: '15px 32px',
                borderRadius: '10px',
                border: 'none',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(217, 119, 6, 0.4)',
                opacity: isSubmitting ? 0.7 : 1,
                transition: 'opacity 0.2s'
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando Mensagem por E-mail...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensagem por E-mail
                </>
              )}
            </button>

            {/* Feedback de Sucesso */}
            {result?.success && (
              <div style={{
                background: 'rgba(52, 211, 153, 0.15)',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                color: '#a7f3d0'
              }}>
                <CheckCircle2 size={24} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: '#fff', fontSize: '1rem', marginBottom: '4px' }}>
                    Mensagem Enviada com Sucesso!
                  </strong>
                  <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Recebemos seu e-mail em <strong>contact@sanvyrsoft.com</strong>. Nossa diretoria responderá o mais breve possível.
                  </span>
                </div>
              </div>
            )}

            {/* Feedback de Erro */}
            {result?.error && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                borderRadius: '12px',
                padding: '16px 20px',
                color: '#fca5a5',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={20} color="#f87171" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{result.error}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Se preferir contato imediato, você também pode nos chamar no WhatsApp:
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#34d399',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  <MessageCircle size={16} /> Falar no WhatsApp (+55 51 99186-7278)
                </a>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
