import { existsSync } from 'node:fs';
import path from 'node:path';
import styles from './Gallery.module.css';
import { familyGallery, friendsGallery, GalleryImage } from '@/data/gallery';
import GalleryGroup from './GalleryGroup';

const GOOGLE_PHOTOS_FRIENDS_URL = 'https://photos.app.goo.gl/LMemz6niPpDxmnkh9';
const GOOGLE_PHOTOS_FAMILY_URL = 'https://photos.app.goo.gl/J9RFPPFJpAwBqEYb9';

function getAvailableImages(images: GalleryImage[]) {
  return images.filter((image) =>
    existsSync(path.join(process.cwd(), 'public', image.src.slice(1))),
  );
}

export default function Gallery() {
  return (
    <section
      id="archivio-ricordi"
      className={styles.gallerySection}
      aria-labelledby="gallery-title"
    >
      <header className={styles.heading}>
        <h2 className={styles.title} id="gallery-title">
          ARCHIVIO RICORDI
        </h2>
        <p className={styles.subtitle}>
          PRESCRIZIONE DIGITALE · CONSULTAZIONE ILLIMITATA
        </p>
      </header>

      <GalleryGroup
        title="AMICI"
        images={getAvailableImages(friendsGallery)}
        albumUrl={GOOGLE_PHOTOS_FRIENDS_URL}
      />
      <GalleryGroup
        title="FAMIGLIA"
        images={getAvailableImages(familyGallery)}
        albumUrl={GOOGLE_PHOTOS_FAMILY_URL}
      />
    </section>
  );
}
