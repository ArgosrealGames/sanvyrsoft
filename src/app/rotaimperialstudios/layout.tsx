'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Film, 
  Building2, 
  TrendingUp, 
  GraduationCap, 
  Clapperboard, 
  Mail, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles,
  ArrowLeft,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export default function RotaImperialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: 'Visão Geral', href: '/rotaimperialstudios', icon: <Film size={17} /> },
    { name: 'O Projeto', href: '/rotaimperialstudios/projeto', icon: <Building2 size={17} /> },
    { name: 'Investidores', href: '/rotaimperialstudios/investidores', icon: <TrendingUp size={17} /> },
    { name: 'Studio Academy', href: '/rotaimperialstudios/studio-academy', icon: <GraduationCap size={17} /> },
    { name: 'Faça Parte', href: '/rotaimperialstudios/faca-parte', icon: <Clapperboard size={17} /> },
    { name: 'Contato', href: '/rotaimperialstudios/contato', icon: <Mail size={17} /> },
  ];

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conversar sobre o complexo e oportunidades no Rota Imperial Studios.'
  );
  const whatsappUrl = `https://wa.me/5551991867278?text=${whatsappMessage}`;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0d0b09',
      color: '#f5efe3',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Top Bar Corporativa Sanvyrsoft */}
      <div style={{
        background: 'rgba(20, 16, 12, 0.95)',
        borderBottom: '1px solid rgba(245, 158, 11, 0.15)',
        padding: '6px 20px',
        fontSize: '0.82rem',
        color: 'rgba(255, 255, 255, 0.7)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 60
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link 
            href="/projetos" 
            style={{ 
              color: '#fbbf24', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              fontWeight: 600
            }}
          >
            <ArrowLeft size={13} /> Voltar aos Projetos Sanvyrsoft
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={12} color="#fbbf24" /> Taquara - RS (40 km de Gramado)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>
            Contato: <strong style={{ color: '#fff' }}>contact@sanvyrsoft.com</strong>
          </span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              color: '#34d399', 
              textDecoration: 'none', 
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <MessageCircle size={13} /> (51) 99186-7278
          </a>
        </div>
      </div>

      {/* Main Navbar Rota Imperial */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(13, 11, 9, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(245, 158, 11, 0.25)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo & Slogan */}
          <Link 
            href="/rotaimperialstudios"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
              border: '1px solid rgba(251, 191, 36, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 900,
              fontSize: '1.25rem',
              letterSpacing: '1px',
              boxShadow: '0 4px 15px rgba(217, 119, 6, 0.35)'
            }}>
              RI
            </div>
            <div>
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.25rem',
                fontWeight: 900,
                letterSpacing: '1.5px',
                color: '#fff',
                textTransform: 'uppercase',
                lineHeight: 1.1
              }}>
                Rota Imperial <span style={{ color: '#fbbf24' }}>Studios</span>
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'rgba(255, 255, 255, 0.65)',
                letterSpacing: '0.8px',
                textTransform: 'uppercase'
              }}>
                Complexo Cinematográfico &amp; Fundo Privado
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', gap: '6px' }} className="desktop-nav">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.8)',
                    background: isActive ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'none',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: '#fff',
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.25)'
              }}
              className="desktop-cta"
            >
              <MessageCircle size={15} />
              WhatsApp Direto
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                padding: '8px',
                color: '#fbbf24',
                cursor: 'pointer',
                display: 'inline-flex'
              }}
              className="mobile-toggle"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'rgba(18, 14, 11, 0.98)',
            borderTop: '1px solid rgba(245, 158, 11, 0.2)',
            padding: '16px 20px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#fbbf24' : '#fff',
                    background: isActive ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: isActive ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {item.icon}
                    {item.name}
                  </div>
                  <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
                </Link>
              );
            })}

            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#000',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                <MessageCircle size={18} />
                Falar com a Diretoria no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer Rota Imperial Studios */}
      <footer style={{
        background: '#070605',
        borderTop: '1px solid rgba(245, 158, 11, 0.25)',
        padding: '50px 24px 30px 24px',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: '0.9rem'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px',
          marginBottom: '40px'
        }}>
          {/* Coluna 1: Sobre */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 900,
                fontSize: '0.95rem'
              }}>
                RI
              </div>
              <span style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '1px'
              }}>
                ROTA IMPERIAL STUDIOS
              </span>
            </div>
            <p style={{ lineHeight: 1.6, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px' }}>
              O primeiro Complexo Cinematográfico de 15 Hectares e Fundo 100% Privado do Sul do Brasil. Tecnologia de ponta (LED Virtual &amp; Kits RED) e velocidade de Venture Capital no Vale do Paranhana, colado a Gramado (RS).
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#fbbf24', fontWeight: 600 }}>
              <ShieldCheck size={14} /> Governança Bancária &amp; Proteção de Capital
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '14px', letterSpacing: '0.5px' }}>
              MAPA DO PORTAL
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/rotaimperialstudios" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                • Visão Geral &amp; Notícia de Imprensa
              </Link>
              <Link href="/rotaimperialstudios/projeto" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                • Engenharia, Zonas &amp; 3 Fases
              </Link>
              <Link href="/rotaimperialstudios/investidores" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                • Fundo Privado, Waterfall &amp; ROI
              </Link>
              <Link href="/rotaimperialstudios/studio-academy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                • Studio Academy &amp; Mão de Obra Local
              </Link>
              <Link href="/rotaimperialstudios/faca-parte" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                • Para Produtores &amp; Submissão de Roteiros
              </Link>
            </div>
          </div>

          {/* Coluna 3: Localização & Ativos */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '14px', letterSpacing: '0.5px' }}>
              LOCALIZAÇÃO ESTRATÉGICA
            </h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
              <MapPin size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                Taquara - RS (Vale do Paranhana)<br />
                A 40 km de Gramado / Região das Hortênsias<br />
                Área Total: 15 Hectares (150.000 m²)
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
              Proximidade imediata com a rede hoteleira e apelo turístico de Gramado somado à competitividade territorial de Taquara.
            </p>
          </div>

          {/* Coluna 4: Contatos Oficiais */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '14px', letterSpacing: '0.5px' }}>
              CONTATOS &amp; ATENDIMENTO
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <div>
                E-mail Geral &amp; Parcerias:<br />
                <a href="mailto:contact@sanvyrsoft.com" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 600 }}>
                  contact@sanvyrsoft.com
                </a>
              </div>
              <div>
                WhatsApp Oficial:<br />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#34d399', textDecoration: 'none', fontWeight: 600 }}>
                  +55 (51) 99186-7278
                </a>
              </div>
              <div style={{ marginTop: '6px' }}>
                <Link 
                  href="/rotaimperialstudios/contato"
                  style={{
                    display: 'inline-block',
                    background: 'rgba(245, 158, 11, 0.15)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    color: '#fbbf24',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.82rem'
                  }}
                >
                  Formulário de Contato &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior de Direitos Autorais */}
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <div>
            &copy; 2026 <strong>Rota Imperial Studios</strong> &amp; <strong>Sanvyrsoft Inc.</strong> Todos os direitos reservados.
          </div>
          <div>
            Desenvolvido pela startup <Link href="/" style={{ color: '#fbbf24', textDecoration: 'none' }}>Sanvyrsoft</Link>
          </div>
        </div>
      </footer>

      {/* Global CSS for Responsive Nav */}
      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
