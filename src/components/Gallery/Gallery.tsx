'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';
import { gallery, GalleryImage } from '@/data/gallery';
import Lightbox from '../Lightbox/Lightbox';
import RevealOnScroll from '../RevealOnScroll';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNavigate = (newIndex: number) => {
    setSelectedIndex(newIndex);
  };

  return (
    <section id="gallery" className={styles.gallerySection} aria-label="Galleria fotografica">
      <RevealOnScroll>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Memoria digitale</p>
          <h2 className={styles.title}>Archivio ricordi</h2>
          <p className={styles.subtitle}>
            Prescrizione digitale · consultazione illimitata
          </p>
        </div>
      </RevealOnScroll>

      <div className={styles.grid}>
        {gallery.map((item: GalleryImage, index: number) => {
          let spanClass = styles.spanSquare;
          if (item.aspect === 'wide') {
            spanClass = styles.spanWide;
          } else if (item.aspect === 'tall') {
            spanClass = styles.spanTall;
          }

          return (
            <figure
              key={item.id}
              className={`${styles.item} ${spanClass}`}
              onClick={() => handleOpen(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpen(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Visualizza fotografia: ${item.caption || item.alt}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 33vw"
                  priority={index < 2}
                  className={styles.image}
                />
              </div>

              {item.caption && (
                <figcaption className={styles.itemCaption}>
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {/* Lightbox modal */}
      <Lightbox
        images={gallery}
        currentIndex={selectedIndex}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </section>
  );
}
