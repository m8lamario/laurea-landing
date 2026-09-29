import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { siteConfig } from '@/data/gallery';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduzione">
      <div className={styles.card}>
        <div className={styles.caduceus} aria-hidden="true">
          <Image
            src="/logo/Bastone.svg"
            alt=""
            width={52}
            height={52}
            className={styles.caduceusSvg}
            priority
          />
        </div>

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
