'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/data/gallery';
import Lightbox from '../Lightbox/Lightbox';
import styles from './Gallery.module.css';

interface GalleryGroupProps {
  title: string;
  images: GalleryImage[];
  albumUrl: string;
}

export default function GalleryGroup({
  title,
  images,
  albumUrl,
}: GalleryGroupProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setCurrentIndex(null), []);

  return (
    <section className={styles.group} aria-label={title}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`${styles.item} ${image.aspect === 'wide' ? styles.wide : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Apri foto ${index + 1}: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 900px) 50vw, (max-width: 1120px) 33vw, 360px"
              loading="lazy"
              className={styles.image}
            />
          </button>
        ))}
      </div>

      <div className={styles.ctaWrapper}>
        <a
          className={styles.ctaButton}
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          VISUALIZZA TUTTE LE FOTO <span aria-hidden="true">→</span>
        </a>
      </div>
      <Lightbox
        images={images}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
