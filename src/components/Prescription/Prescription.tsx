import React from 'react';
import styles from './Prescription.module.css';
import { siteConfig } from '@/data/gallery';

export default function Prescription() {
  return (
    <section className={styles.section} aria-label="Prescrizione medica">
      <div className={styles.card}>
        <div className={styles.sideHeader} aria-hidden="true">
          PRESCRIZIONE
        </div>

        <div className={styles.content}>
          <div className={styles.headerRow}>
            <div className={styles.prescriptionMeta}>
              <span>Prescrizione N. 290926 · Servizio Celebrativo</span>
            </div>

            {/* Easter egg priority boxes: U B D P -> P ☒ (Prosecco) */}
            <div
              className={styles.priorityBox}
              title="Priorità: P = Prosecco"
              aria-label="Priorità prescrizione: Prosecco"
            >
              <span className={styles.priorityItem}>U ☐</span>
              <span className={styles.priorityItem}>B ☐</span>
              <span className={styles.priorityItem}>D ☐</span>
              <span className={`${styles.priorityItem} ${styles.priorityChecked}`}>
                P ☒ <span className={styles.priorityMeaning}>(Prosecco)</span>
              </span>
            </div>
          </div>

          <div className={styles.rxLine}>
            <span className={styles.rxSymbol}>R/</span>
            <span className={styles.rxItem}>{siteConfig.prescriptionRx}</span>
          </div>

          <div className={styles.instructions}>
            {siteConfig.prescriptionIndications.map((ind, i) => (
              <p key={i}>{ind}</p>
            ))}
          </div>

          <div className={styles.doctorBox}>
            <span className={styles.doctorLabel}>Timbro e firma del medico</span>
            <span className={styles.doctorSignature}>{siteConfig.doctorName}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
