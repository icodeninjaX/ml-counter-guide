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
  description: 'Find the perfect counter picks for your matches',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col`}>
        <Navbar />
        <div className="container mx-auto px-4 pb-8 flex-grow">
          {children}
        </div>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}