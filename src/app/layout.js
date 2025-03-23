import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import BackToTopButton from './components/BackToTopButton';

export const metadata = {
  title: 'Mobile Legends Counter Guide',
  description: 'Find the perfect counter picks for your matches',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
          <Navbar />
          <div className="container mx-auto px-4 pb-8 flex-grow">
            {children}
          </div>
          <Footer />
        </body>
      </ThemeProvider>
      <BackToTopButton />
    </html>
  );
}