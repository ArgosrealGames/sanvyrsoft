'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  const titleWords = (t.hero?.title || 'Architects of the Digital Future').split(' ');

  return (
    <section className={styles.hero}>
      {/* Background Decorative Elements */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>{t.nav?.portfolio || 'PORTFOLIO'} 2026</span>
          <h1 className={styles.title}>
            {titleWords.map((word: string, i: number) => (
              <span key={i} className={i === 2 ? styles.highlight : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className={styles.subtitle}>{t.hero?.subtitle}</p>
          
          <div className={styles.actions}>
            <a href="#services" className={styles.primaryBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {t.hero?.cta || 'Explore o Ecossistema'}
            </a>
            
            <Link href="/projetos" className={styles.secondaryBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {t.hero?.secondary_cta || 'Nossos Projetos'}
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.techWrapper}>
             <div className={styles.core}>
                <div className={styles.ring1}></div>
                <div className={styles.ring2}></div>
                <div className={styles.ring3}></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
