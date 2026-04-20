'use client';

import React, { useState, useRef } from 'react';
import { sendContactEmail } from '@/app/actions';

export default function Contact({ t }: { t: any }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const response = await sendContactEmail(formData);

    setIsSubmitting(false);
    if (response.success) {
      setResult({ success: true });
      formRef.current?.reset();
    } else {
      setResult({ error: response.error });
    }
  }

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.nav.contact || 'Contact'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            Entre em contato conosco para transformar sua ideia em realidade.
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
                  Nome
                </label>
                <input 
                  name="name"
                  type="text" 
                  required 
                  placeholder="Seu nome"
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
                  E-mail
                </label>
                <input 
                  name="email"
                  type="email" 
                  required 
                  placeholder="seu@email.com"
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
                Mensagem
              </label>
              <textarea 
                name="message"
                required 
                rows={5}
                placeholder="Como podemos ajudar?"
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
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {result?.success && (
              <div style={{ color: '#4ade80', textAlign: 'center', fontSize: '0.9rem', padding: '1rem', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '12px', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                Mensagem enviada com sucesso!
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
