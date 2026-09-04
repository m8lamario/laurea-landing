import React from 'react';
import Hero from '@/components/Hero/Hero';
import Prescription from '@/components/Prescription/Prescription';
import Dedication from '@/components/Dedication/Dedication';
import Gallery from '@/components/Gallery/Gallery';
import Album from '@/components/Album/Album';
import Footer from '@/components/Footer/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.sectionDivider} aria-hidden="true" />
      <RevealOnScroll>
        <Prescription />
      </RevealOnScroll>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <RevealOnScroll>
        <Dedication />
      </RevealOnScroll>
      <div className={styles.sectionDivider} aria-hidden="true" />
      <Gallery />
      <div className={styles.sectionDivider} aria-hidden="true" />
      <RevealOnScroll>
        <Album />
      </RevealOnScroll>
      <Footer />
    </main>
  );
}
