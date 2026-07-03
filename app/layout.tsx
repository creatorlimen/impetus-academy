import type { Metadata } from 'next';
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from 'next/font/google';
import AcademyFooter from '@/components/AcademyFooter';
import AcademyNavbar from '@/components/AcademyNavbar';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Impetus Academy | Primary and Secondary School in Ijaye, Lagos',
    template: '%s | Impetus Academy',
  },
  description:
    'Impetus Integrated Learning Academy provides Primary and Secondary education in Ijaye, Lagos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} ${plexMono.variable} bg-shell text-card-foreground antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <AcademyNavbar />
        <main id="main-content" className="min-h-screen pt-24 md:pt-28">
          {children}
        </main>
        <AcademyFooter />
      </body>
    </html>
  );
}



