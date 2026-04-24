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
    message: "Mensagem",
    message_placeholder: "Como podemos ajudar?",
    send: "Enviar Mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso!",
    error_connection: "Erro de conexão. Por favor, verifique sua internet ou tente novamente mais tarde.",
    error_generic: "Falha ao enviar e-mail. Por favor, tente novamente mais tarde."
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
      // Se chegamos aqui, ou a Action deu timeout ou o servidor retornou 500
      setResult({ error: contactT.error_connection });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.nav.contact || 'Contact'}</h2>
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
