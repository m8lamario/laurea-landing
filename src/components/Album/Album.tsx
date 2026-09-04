import React from 'react';
import styles from './Album.module.css';
import { siteConfig } from '@/data/gallery';

export default function Album() {
  return (
    <section className={styles.section} aria-label="Album completo esterno">
      <div className={styles.card}>
        <p className={styles.eyebrow}>Follow-up</p>
        <h2 className={styles.title}>Tutte le foto della giornata</h2>
        <p className={styles.description}>
          L&apos;archivio completo ad alta risoluzione con tutti gli scatti della proclamazione e dei festeggiamenti.
        </p>

        <a
          href={siteConfig.fullAlbumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <span>Apri l&apos;album completo</span>
          <svg
            className={styles.externalIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
