import type { Metadata, Viewport } from 'next';
import { Roboto_Condensed, Courier_Prime, Caveat } from 'next/font/google';
import './globals.css';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier-prime',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mariagrazia — Laurea in Medicina e Chirurgia',
  description: 'Laurea in Medicina e Chirurgia di Mariagrazia Mottola.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#F8F3E9',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${robotoCondensed.variable} ${courierPrime.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
