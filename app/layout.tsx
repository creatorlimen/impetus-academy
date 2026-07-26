import type { Metadata } from 'next';
import { Fredoka, Mulish } from 'next/font/google';
import AcademyFooter from '@/components/AcademyFooter';
import AcademyNavbar from '@/components/AcademyNavbar';
import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
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
        className={`${mulish.variable} ${fredoka.variable} bg-shell text-card-foreground antialiased`}
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



