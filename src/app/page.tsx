import React from 'react';
import Hero from '@/components/Hero/Hero';
import Dedication from '@/components/Dedication/Dedication';
import Footer from '@/components/Footer/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.sectionDivider} aria-hidden="true" />
      <RevealOnScroll>
        <Dedication />
      </RevealOnScroll>
      <Footer />
    </main>
  );
}
