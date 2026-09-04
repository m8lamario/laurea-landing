import React from 'react';
import styles from './Hero.module.css';
import { siteConfig } from '@/data/gallery';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduzione">
      <div className={styles.card}>
        {/* Caduceus Symbol (SVG) */}
        <div className={styles.caduceus} aria-hidden="true">
          <svg
            className={styles.caduceusSvg}
            viewBox="0 0 48 54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Asclepius Staff and Snake Motif */}
            <line x1="24" y1="2" x2="24" y2="52" strokeWidth="2.4" />
            <circle cx="24" cy="4" r="3.2" fill="currentColor" />
            <path
              d="M14 14 C14 8, 34 8, 34 16 C34 24, 14 22, 14 30 C14 38, 34 36, 34 44 C34 48, 26 49, 24 50"
              strokeWidth="2"
            />
          </svg>
        </div>

        <p className={styles.eyebrow}>Prescrizione speciale</p>

        <div className={styles.titleGroup}>
          <h1 className={styles.degreeTitle}>
            {siteConfig.degreeTitle}
            <span className={styles.candidateName}>{siteConfig.firstName}</span>
          </h1>
        </div>

        {/* Date code grid */}
        <div className={styles.dateCodeWrapper}>
          <div
            className={styles.dateGrid}
            role="img"
            aria-label={`Data della laurea: ${siteConfig.dateFull}`}
          >
            {siteConfig.dateDigits.map((digit, idx) => {
              const isAccent = siteConfig.accentDigitIndices.includes(idx);
              return (
                <span
                  key={idx}
                  className={`${styles.dateCell} ${isAccent ? styles.accentCell : ''}`}
                >
                  {digit}
                </span>
              );
            })}
          </div>
          <p className={styles.dateLabel}>{siteConfig.dateFull}</p>
        </div>

        <p className={styles.introText}>{siteConfig.introText}</p>

        <div className={styles.ctaWrapper}>
          <a href="#gallery" className={styles.ctaButton}>
            <span>Sfoglia i ricordi</span>
            <span className={styles.arrowIcon} aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
