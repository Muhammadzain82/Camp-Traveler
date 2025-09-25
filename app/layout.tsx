// app/layout.tsx (or app/layout.jsx)
import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Travel',
  description: 'Camp Traveler'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}