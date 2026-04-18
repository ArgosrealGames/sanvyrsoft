'use client';

import React from 'react';
import styles from './Services.module.css';
import { Cloud, Gamepad2, Database, LayoutPanelLeft } from 'lucide-react';

interface ServicesProps {
  t: any;
}

export default function Services({ t }: ServicesProps) {
  const serviceCards = [
    {
      id: 'saas',
      title: t.services.saas.title,
      desc: t.services.saas.desc,
      icon: <Cloud size={32} />,
      gradient: 'linear-gradient(135deg, #6366f1, #a855f7)'
    },
    {
      id: 'games',
      title: t.services.games.title,
      desc: t.services.games.desc,
      icon: <Gamepad2 size={32} />,
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    {
      id: 'management',
      title: t.services.management.title,
      desc: t.services.management.desc,
      icon: <Database size={32} />,
      gradient: 'linear-gradient(135deg, #10b981, #3b82f6)'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.services.title}</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {serviceCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper} style={{ background: card.gradient }}>
                  {card.icon}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
              <div className={styles.cardBg}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
