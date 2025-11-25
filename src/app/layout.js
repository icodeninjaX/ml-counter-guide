import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Mobile Legends Counter Guide',
  description: 'Find the perfect counter picks for your Mobile Legends matches. Comprehensive hero guides, counters, and strategies.',
  keywords: 'Mobile Legends, ML, counter guide, hero counters, MLBB, strategy guide',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Mobile Legends Counter Guide',
    description: 'Find the perfect counter picks for your Mobile Legends matches',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="container mx-auto px-4 pb-8 flex-grow">
          {children}
        </div>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}