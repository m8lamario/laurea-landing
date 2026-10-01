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
    "I traguardi più belli acquistano valore grazie alle persone con cui possiamo condividerli.\nQuesta pagina raccoglie alcuni ricordi di un giorno speciale e li condivide con chi, da vicino o da lontano, ha fatto parte del percorso.",
  prescriptionRx: 'VINUM ROSATUM 750 ML',
  prescriptionIndications: [
    'Trattamento consigliato per festeggiamenti e traguardi memorabili.',
    'Assumere preferibilmente in buona compagnia, con abbondanza di brindisi e sorrisi.',
    'Ripetere a ogni nuovo momento felice. Nessuna controindicazione nota.',
  ],
  fullAlbumUrl: 'https://photos.app.goo.gl/mariagrazia-medicina-2026',
};

export const friendsGallery: GalleryImage[] = [
  {
    id: 'amici-foto-01',
    src: '/images/laurea/amici/foto-01.jpeg',
    alt: 'Laurea con gli amici, foto 1',
    width: 3024,
    height: 4032,
    aspect: 'tall',
  },
  {
    id: 'amici-foto-02',
    src: '/images/laurea/amici/foto-02.jpg',
    alt: 'Laurea con gli amici, foto 2',
    width: 1200,
    height: 1600,
    aspect: 'tall',
  },
  {
    id: 'amici-foto-03',
    src: '/images/laurea/amici/foto-03.jpg',
    alt: 'Laurea con gli amici, foto 3',
    width: 1200,
    height: 1600,
    aspect: 'tall',
  },
  {
    id: 'amici-foto-04',
    src: '/images/laurea/amici/foto-04.jpg',
    alt: 'Laurea con gli amici, foto 4',
    width: 3024,
    height: 4032,
    aspect: 'tall',
  },
  {
    id: 'amici-foto-05',
    src: '/images/laurea/amici/foto-05.jpg',
    alt: 'Laurea con gli amici, foto 5',
    width: 1200,
    height: 1600,
    aspect: 'tall',
  },
  {
    id: 'amici-foto-06',
    src: '/images/laurea/amici/foto-06.jpg',
    alt: 'Laurea con gli amici, foto 6',
    width: 3024,
    height: 4032,
    aspect: 'tall',
  },
];

export const familyGallery: GalleryImage[] = [
  {
    id: 'parenti-foto-01',
    src: '/images/laurea/parenti/foto-01.jpeg',
    alt: 'Laurea con i parenti, foto 1',
    width: 3024,
    height: 4032,
    aspect: 'tall',
  },
  {
    id: 'parenti-foto-02',
    src: '/images/laurea/parenti/foto-02.jpg',
    alt: 'Laurea con i parenti, foto 2',
    width: 1200,
    height: 1600,
    aspect: 'tall',
  },
  {
    id: 'parenti-foto-03',
    src: '/images/laurea/parenti/foto-03.jpg',
    alt: 'Laurea con i parenti, foto 3',
    width: 2632,
    height: 3510,
    aspect: 'tall',
  },
  {
    id: 'parenti-foto-04',
    src: '/images/laurea/parenti/foto-04.jpeg',
    alt: 'Laurea con i parenti, foto 4',
    width: 1200,
    height: 1600,
    aspect: 'tall',
  },
  {
    id: 'parenti-foto-05',
    src: '/images/laurea/parenti/foto-05.jpeg',
    alt: 'Laurea con i parenti, foto 5',
    width: 1200,
    height: 1600,
    aspect: 'tall',
  },
  {
    id: 'parenti-foto-06',
    src: '/images/laurea/parenti/foto-06.jpg',
    alt: 'Laurea con i parenti, foto 6',
    width: 1200,
    height: 1600,
    aspect: 'tall',
  },
];
