import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EDL Bygg & Kakel AB - Professionella byggtjänster i Skåne',
  description: 'Er pålitliga partner för snickeri, badrumsrenovering och byggprojekt i Malmé och Skåne. Certifierade hantverkare med över 20 års erfarenhet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={`${inter.className} bg-white min-h-screen`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
