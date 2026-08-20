'use client';

import React, { useState, useRef } from 'react';
import { sendContactEmail } from '@/app/actions';

export default function Contact({ t }: { t: any }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

  const contactT = t.contact_form || {
    subtitle: "Entre em contato conosco para transformar sua ideia em realidade.",
    name: "Nome",
    name_placeholder: "Seu nome",
    email: "E-mail",
    email_placeholder: "seu@email.com",
    sector: "Escolha o Setor de Atendimento",
    sector_placeholder: "Selecione o setor para o qual deseja atendimento...",
    message: "Mensagem",
    message_placeholder: "Como podemos ajudar?",
    send: "Enviar Mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso!",
    error_connection: "Erro de conexão. Por favor, verifique sua internet ou tente novamente mais tarde.",
    error_generic: "Falha ao enviar e-mail. Por favor, tente novamente mais tarde."
  };

  const sectorOptions = contactT.sector_options || {
    software: "Softwares B2B & ERP",
    apps: "APPs & Dispositivos Móveis",
    electronics: "Engenharia Eletrônica & Programação em PICs (Chips)",
    healthtech: "HealthTech & Equipamentos Hospitalares (SML-3000)",
    games: "Games para PC & Consoles",
    cinema: "Cinema Virtual, Mocap & Pós-Produção",
    web_seo: "Sites, SEO 1ª Página Google & Registro de Marcas/Patentes",
    support: "Suporte Técnico & Atendimento",
    rh: "Recursos Humanos (RH) / Trabalhe Conosco"
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await sendContactEmail(formData);

      if (response.success) {
        setResult({ success: true });
        formRef.current?.reset();
      } else {
        setResult({ error: response.error || contactT.error_generic });
      }
    } catch (err: any) {
      console.error('Frontend Submit Error:', err);
      setResult({ error: contactT.error_connection });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.nav?.contact || 'Contato'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            {contactT.subtitle}
          </p>
        </div>

        <div style={{ 
          background: 'rgba(255,255,255,0.03)', 
          padding: '2.5rem', 
          borderRadius: '24px', 
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {contactT.name}
                </label>
                <input 
                  name="name"
                  type="text" 
                  required 
                  placeholder={contactT.name_placeholder}
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '12px', 
                    padding: '0.8rem 1rem', 
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {contactT.email}
                </label>
                <input 
                  name="email"
                  type="email" 
                  required 
                  placeholder={contactT.email_placeholder}
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '12px', 
                    padding: '0.8rem 1rem', 
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {contactT.sector || "Escolha o Setor de Atendimento"}
              </label>
              <select
                name="sector"
                required
                defaultValue=""
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px', 
                  padding: '0.8rem 1rem', 
                  color: 'white',
                  outline: 'none',
                  cursor: 'pointer',
                  appearance: 'auto'
                }}
              >
                <option value="" disabled style={{ background: '#0f172a', color: '#94a3b8' }}>
                  {contactT.sector_placeholder || "Selecione o setor para o qual deseja atendimento..."}
                </option>
                <option value="Softwares B2B & ERP" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.software}
                </option>
                <option value="APPs & Dispositivos Móveis" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.apps}
                </option>
                <option value="Engenharia Eletrônica & PICs" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.electronics}
                </option>
                <option value="HealthTech & Equipamentos Hospitalares" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.healthtech}
                </option>
                <option value="Games para PC & Consoles" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.games}
                </option>
                <option value="Cinema Virtual, Mocap & Pós-Produção" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.cinema}
                </option>
                <option value="Sites, SEO 1ª Página & Registro de Marcas" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.web_seo}
                </option>
                <option value="Suporte Técnico" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.support}
                </option>
                <option value="Recursos Humanos (RH)" style={{ background: '#0f172a', color: '#fff' }}>
                  {sectorOptions.rh}
                </option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {contactT.message}
              </label>
              <textarea 
                name="message"
                required 
                rows={5}
                placeholder={contactT.message_placeholder}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '12px', 
                  padding: '0.8rem 1rem', 
                  color: 'white',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ 
                background: 'linear-gradient(135deg, #0070f3 0%, #00aaff 100%)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '12px', 
                padding: '1rem', 
                fontWeight: 'bold', 
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'transform 0.2s',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? contactT.sending : contactT.send}
            </button>

            {result?.success && (
              <div style={{ color: '#4ade80', textAlign: 'center', fontSize: '0.9rem', padding: '1rem', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '12px', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                {contactT.success}
              </div>
            )}
            {result?.error && (
              <div style={{ color: '#f87171', textAlign: 'center', fontSize: '0.9rem', padding: '1rem', background: 'rgba(248, 113, 113, 0.1)', borderRadius: '12px', border: '1px solid rgba(248, 113, 113, 0.2)' }}>
                {result.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
