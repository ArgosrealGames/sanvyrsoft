'use client';

import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className={styles.hero}>
      {/* Background Decorative Elements */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>{t.nav.portfolio} 2026</span>
          <h1 className={styles.title}>
            {t.hero.title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i === 2 ? styles.highlight : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>{t.hero.cta}</button>
            <button className={styles.secondaryBtn}>{t.hero.secondary_cta}</button>
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
