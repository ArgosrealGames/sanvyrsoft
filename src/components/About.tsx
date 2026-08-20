'use client';

import React from 'react';
import styles from './About.module.css';
import { 
  Database, 
  Smartphone, 
  Cpu, 
  Activity, 
  Gamepad2, 
  Clapperboard, 
  Globe 
} from 'lucide-react';

interface AboutProps {
  t: any;
}

export default function About({ t }: AboutProps) {
  const aboutData = t.about_section || {};
  const divisions = aboutData.divisions || [
    {
      id: 'software',
      title: 'Softwares B2B & ERP',
      desc: 'Desenvolvimento de sistemas de gestão empresarial customizados, plataformas SaaS e soluções corporativas B2B escaláveis em nuvem para automação e máxima produtividade operacional.'
    },
    {
      id: 'apps',
      title: 'APPs & Dispositivos Móveis',
      desc: 'Criação de aplicativos nativos e multiplataforma para iOS e Android, com foco em experiência do usuário (UX/UI), segurança de dados e integrações robustas de APIs e pagamentos.'
    },
    {
      id: 'electronics',
      title: 'Engenharia Eletrônica & PICs',
      desc: 'Projetos de engenharia eletrônica do conceito ao circuito integrado (CI), com esquemáticos de PCB, placas de alta densidade e programação de firmware em microcontroladores PICs (chips) para automação e dispositivos dedicados.'
    },
    {
      id: 'healthtech',
      title: 'HealthTech & Equipamentos Hospitalares',
      desc: 'Engenharia médica com patentes registradas (como o sistema de prevenção de quedas SML-3000) e monitores multiparamétricos de sinais vitais, em rigorosa conformidade com padrões hospitalares.'
    },
    {
      id: 'games',
      title: 'Games para PC & Consoles',
      desc: 'Desenvolvimento de jogos autorais e sob demanda para PlayStation, PC e consoles modernos, com física avançada, inteligência artificial e narrativas interativas imersivas.'
    },
    {
      id: 'cinema',
      title: 'Cinema Virtual, Mocap & Pós-Produção',
      desc: 'Produção audiovisual com engines Unreal e Unity, captura em câmeras RED de cinema digital, pós-produção e color grading em DaVinci Resolve e trajes proprietários de Motion Capture (Mocap) desenvolvidos pela própria Sanvyrsoft.'
    },
    {
      id: 'web_seo',
      title: 'Sites, SEO 1ª Página & Marcas',
      desc: 'Desenvolvimento de sites corporativos e e-commerce de ultra-alta velocidade, estratégias para indexação no topo das buscas do Google, design de logotipo, identidade visual completa e assessoria em registro de marcas e patentes no INPI.'
    }
  ];

  const iconMap: Record<string, { icon: React.ReactNode; gradient: string }> = {
    software: {
      icon: <Database size={28} />,
      gradient: 'linear-gradient(135deg, #6366f1, #a855f7)'
    },
    apps: {
      icon: <Smartphone size={28} />,
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    electronics: {
      icon: <Cpu size={28} />,
      gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)'
    },
    healthtech: {
      icon: <Activity size={28} />,
      gradient: 'linear-gradient(135deg, #10b981, #059669)'
    },
    games: {
      icon: <Gamepad2 size={28} />,
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
    },
    cinema: {
      icon: <Clapperboard size={28} />,
      gradient: 'linear-gradient(135deg, #ef4444, #f43f5e)'
    },
    web_seo: {
      icon: <Globe size={28} />,
      gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)'
    }
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.orbGlow}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>{aboutData.badge || 'ECOSSISTEMA & ENGENHARIA MULTIDISCIPLINAR'}</span>
          <h2 className={styles.title}>{t.nav?.about || 'Quem Somos'}</h2>
          <p className={styles.subtitle}>
            {aboutData.subtitle || t.footer?.about || 'A Sanvyrsoft é uma empresa de desenvolvimento de tecnologia de alto impacto que integra software, engenharia eletrônica, equipamentos hospitalares, entretenimento digital e posicionamento de marcas.'}
          </p>
        </div>

        <div className={styles.grid}>
          {divisions.map((div: any) => {
            const config = iconMap[div.id] || iconMap.software;
            return (
              <div key={div.id} className={styles.card}>
                <div className={styles.iconWrapper} style={{ background: config.gradient }}>
                  {config.icon}
                </div>
                <h3 className={styles.cardTitle}>{div.title}</h3>
                <p className={styles.cardDesc}>{div.desc}</p>
                <div className={styles.cardTag}>
                  <span>SANVYRSOFT TECH</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
