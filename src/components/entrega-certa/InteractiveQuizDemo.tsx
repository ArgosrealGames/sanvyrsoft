'use client';

import React, { useState } from 'react';
import { Gift, CheckCircle, Sparkles, ShoppingBag, ArrowRight, RotateCcw, Megaphone } from 'lucide-react';

export default function InteractiveQuizDemo() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [extraBonusClaimed, setExtraBonusClaimed] = useState(false);
  const [freightBase] = useState(10.0);

  const discountFromQuiz = selectedOption !== null ? 5.0 : 0.0;
  const discountFromExtra = extraBonusClaimed ? 5.0 : 0.0;
  const totalDiscount = discountFromQuiz + discountFromExtra;
  const finalFreight = Math.max(0, freightBase - totalDiscount);

  const handleReset = () => {
    setSelectedOption(null);
    setExtraBonusClaimed(false);
  };

  return (
    <section id="consumidor" style={{ padding: '90px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#fbbf24',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Experimente na Prática
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#fff', marginTop: '16px', marginBottom: '14px' }}>
            Simulador de Frete Grátis para o Consumidor
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            No <strong>APP Entrega Certa</strong>, o consumidor escolhe o frete que quer: <strong>Frete Pago</strong>, <strong>Frete 50% Grátis</strong> ou <strong>Frete 100% Grátis</strong> respondendo perguntas rápidas de patrocinadores.
          </p>
        </div>

        {/* Interactive App Container */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 15, 30, 0.98) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)'
        }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
            
            {/* Left Box: The Sponsor Quiz */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(245, 158, 11, 0.2)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24' }}>
                  <Megaphone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase' }}>
                    Patrocinador do Momento
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 800 }}>
                    Supermercados RedeMais
                  </div>
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
                <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '14px' }}>
                  ❓ <em>"Qual setor de compras online você mais utiliza durante o mês?"</em>
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Comida & Delivery de Restaurantes',
                    'Supermercado & Bebidas',
                    'Farmácia & Cuidados Pessoais',
                    'Eletrônicos & Informática'
                  ].map((optionText, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedOption(idx)}
                      style={{
                        background: selectedOption === idx ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: selectedOption === idx ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: selectedOption === idx ? '#34d399' : '#fff',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.92rem',
                        fontWeight: selectedOption === idx ? 700 : 500,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>{optionText}</span>
                      {selectedOption === idx && <CheckCircle size={18} color="#34d399" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra sponsor interaction */}
              {selectedOption !== null && !extraBonusClaimed && (
                <div style={{
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px dashed rgba(6, 182, 212, 0.4)',
                  borderRadius: '14px',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div>
                    <strong style={{ color: '#22d3ee', fontSize: '0.9rem' }}>Quer Zerar 100% do Frete?</strong>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.82rem' }}>Interaja com mais um comercial rápido (+ R$ 5,00 de desconto).</div>
                  </div>
                  <button
                    onClick={() => setExtraBonusClaimed(true)}
                    style={{
                      background: '#06b6d4',
                      color: '#000',
                      border: 'none',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    + R$ 5,00 BÔNUS
                  </button>
                </div>
              )}
            </div>

            {/* Right Box: Live Cart & Freight Summary */}
            <div>
              <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '14px' }}>
                  <ShoppingBag size={22} color="#10b981" />
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>Resumo do Pedido</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
                  <span>Almoço Executivo + Bebida:</span>
                  <strong style={{ color: '#fff' }}>R$ 48,00</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
                  <span>Frete de Entrega Base (4 km):</span>
                  <span>R$ 10,00</span>
                </div>

                {/* Subsidies Applied */}
                {discountFromQuiz > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#34d399', fontSize: '0.95rem', fontWeight: 700 }}>
                    <span>🎁 Bônus Patrocinador (Pesquisa):</span>
                    <span>- R$ {discountFromQuiz.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}

                {discountFromExtra > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#22d3ee', fontSize: '0.95rem', fontWeight: 700 }}>
                    <span>🎁 Bônus Comercial Extra:</span>
                    <span>- R$ {discountFromExtra.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}

                <div style={{ borderTop: '2px dashed rgba(255, 255, 255, 0.15)', paddingTop: '16px', marginTop: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>Valor Final do Frete:</span>
                    <span style={{
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: finalFreight === 0 ? '#34d399' : '#f59e0b'
                    }}>
                      {finalFreight === 0 ? 'GRÁTIS (R$ 0,00)' : `R$ ${finalFreight.toFixed(2).replace('.', ',')}`}
                    </span>
                  </div>

                  {finalFreight === 0 && (
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid #10b981',
                      color: '#34d399',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}>
                      <Sparkles size={16} />
                      Parabéns! 100% do frete foi pago pelo patrocinador.
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
                  <button
                    onClick={handleReset}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <RotateCcw size={14} />
                    Reiniciar Simulação
                  </button>

                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                    O entregador recebe 100% do valor!
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
