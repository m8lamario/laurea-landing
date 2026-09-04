import React from 'react';
import styles from './Footer.module.css';
import { siteConfig } from '@/data/gallery';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.date}>{siteConfig.dateDisplay}</div>

      <div className={styles.doctorName}>{siteConfig.doctorName}</div>

      {/* Barcode graphic */}
      <div className={styles.barcodeWrapper} aria-hidden="true">
        <svg
          className={styles.barcodeSvg}
          viewBox="0 0 140 32"
          fill="currentColor"
        >
          {/* Stylized barcode lines */}
          <rect x="0" y="0" width="2" height="32" />
          <rect x="5" y="0" width="3" height="32" />
          <rect x="11" y="0" width="1.5" height="32" />
          <rect x="15" y="0" width="4" height="32" />
          <rect x="22" y="0" width="2" height="32" />
          <rect x="27" y="0" width="1" height="32" />
          <rect x="31" y="0" width="3" height="32" />
          <rect x="37" y="0" width="2" height="32" />
          <rect x="42" y="0" width="4" height="32" />
          <rect x="49" y="0" width="1.5" height="32" />
          <rect x="54" y="0" width="3" height="32" />
          <rect x="60" y="0" width="2" height="32" />
          <rect x="65" y="0" width="1" height="32" />
          <rect x="69" y="0" width="4" height="32" />
          <rect x="76" y="0" width="2" height="32" />
          <rect x="81" y="0" width="3" height="32" />
          <rect x="87" y="0" width="1.5" height="32" />
          <rect x="91" y="0" width="2" height="32" />
          <rect x="96" y="0" width="4" height="32" />
          <rect x="103" y="0" width="1" height="32" />
          <rect x="107" y="0" width="3" height="32" />
          <rect x="113" y="0" width="2" height="32" />
          <rect x="118" y="0" width="4" height="32" />
          <rect x="125" y="0" width="1.5" height="32" />
          <rect x="129" y="0" width="3" height="32" />
          <rect x="135" y="0" width="2" height="32" />
          <rect x="139" y="0" width="1" height="32" />
        </svg>
        <span className={styles.barcodeLabel}>* 29092026-MED *</span>
      </div>

      <div className={styles.validityBadge}>
        Prescrizione digitale · Validità illimitata
      </div>

      <p className={styles.subcopy}>
        Scansionare al bisogno. Possibili effetti attesi: nostalgia e bei ricordi.
      </p>
    </footer>
  );
}
