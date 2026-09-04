export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  aspect: 'tall' | 'wide' | 'square';
}

export const siteConfig = {
  firstName: 'Mariagrazia',
  doctorName: 'Dott.ssa Mariagrazia Mottola',
  degreeTitle: 'LAUREA IN MEDICINA E CHIRURGIA',
  degreeSubtitle: 'Laurea in Medicina e Chirurgia',
  dateDisplay: '29 · 09 · 2026',
  dateFull: '29 settembre 2026',
  dateDigits: ['2', '9', '0', '9', '2', '6'],
  accentDigitIndices: [2, 3], // highlight month '09'
  introQuote: 'Un giorno speciale, da ricordare insieme.',
  introText:
    "Un traguardo importante, reso ancora più bello dalle persone che hanno condiviso il viaggio.",
  dedicationText:
    "I traguardi più belli sono quelli che possiamo condividere. Questa pagina raccoglie i ricordi di una giornata indimenticabile e delle persone che l'hanno resa speciale.",
  prescriptionRx: 'VINUM ROSATUM 750 ML',
  prescriptionIndications: [
    'Trattamento consigliato per festeggiamenti e traguardi memorabili.',
    'Assumere preferibilmente in buona compagnia, con abbondanza di brindisi e sorrisi.',
    'Ripetere a ogni nuovo momento felice. Nessuna controindicazione nota.',
  ],
  fullAlbumUrl: 'https://photos.app.goo.gl/mariagrazia-medicina-2026',
};

export const gallery: GalleryImage[] = [
  {
    id: 'foto-01',
    src: '/images/foto-01.jpg',
    alt: 'La proclamazione di Laurea in Medicina e Chirurgia di Mariagrazia',
    caption: 'La proclamazione · Aula Magna',
    width: 1200,
    height: 800,
    aspect: 'wide',
  },
  {
    id: 'foto-02',
    src: '/images/foto-02.jpg',
    alt: 'Mariagrazia con la corona d’alloro e tocco accademico',
    caption: 'Corona d’alloro · Dott.ssa Mottola',
    width: 800,
    height: 1060,
    aspect: 'tall',
  },
  {
    id: 'foto-03',
    src: '/images/foto-03.jpg',
    alt: 'I festeggiamenti e il brindisi con gli amici e colleghi di corso',
    caption: 'Il brindisi con i colleghi di corso',
    width: 900,
    height: 900,
    aspect: 'square',
  },
  {
    id: 'foto-04',
    src: '/images/foto-04.jpg',
    alt: 'La discussione della tesi di laurea in medicina',
    caption: 'Discussione della tesi sperimentale',
    width: 800,
    height: 1100,
    aspect: 'tall',
  },
  {
    id: 'foto-05',
    src: '/images/foto-05.jpg',
    alt: 'Abbracci e sorrisi con la famiglia dopo la proclamazione',
    caption: 'Con la famiglia · Emozioni condivise',
    width: 1200,
    height: 800,
    aspect: 'wide',
  },
  {
    id: 'foto-06',
    src: '/images/foto-06.jpg',
    alt: 'Dettaglio dell’etichetta ricetta della bomboniera e stetoscopio',
    caption: 'Dettagli speciali della festa',
    width: 900,
    height: 900,
    aspect: 'square',
  },
  {
    id: 'foto-07',
    src: '/images/foto-07.jpg',
    alt: 'Mariagrazia sorridente durante il taglio della torta di laurea',
    caption: 'Momento della torta e auguri',
    width: 800,
    height: 1060,
    aspect: 'tall',
  },
  {
    id: 'foto-08',
    src: '/images/foto-08.jpg',
    alt: 'Foto di gruppo con tutti gli invitati alla festa di laurea',
    caption: 'Tutti insieme · Una festa indimenticabile',
    width: 1200,
    height: 800,
    aspect: 'wide',
  },
];
