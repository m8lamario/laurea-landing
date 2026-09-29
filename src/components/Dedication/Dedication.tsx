import React from 'react';
import styles from './Dedication.module.css';
import { siteConfig } from '@/data/gallery';

export default function Dedication() {
  return (
    <section className={styles.dedication} aria-label="Dedica">
      <div className={styles.inner}>
        <h2 className={styles.title}>Grazie per esserci stati.</h2>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.text}>{siteConfig.dedicationText}</p>
      </div>
    </section>
  );
}
