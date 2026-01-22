import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Premium Shopify Design Studio | Ascent Mgnt',
  description: 'We create brand-led Shopify experiences that feel expensive and convert naturally. Brand identity, packaging, and custom Shopify builds for discerning DTC brands.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
