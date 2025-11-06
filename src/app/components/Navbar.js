'use client';

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gray-900 backdrop-blur-sm bg-opacity-80 sticky top-0 z-10 shadow-lg mb-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
        <Link href="/" className="text-blue-400 font-bold text-xl flex items-center">
            <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </span>
            ML Counter
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition duration-200">Home</Link>
            <Link href="/heroes" className="text-gray-300 hover:text-blue-400 transition duration-200">Heroes</Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-700 space-y-2">
            <Link href="/" className="block text-gray-300 hover:text-blue-400 py-2 transition duration-200">Home</Link>
            <Link href="/heroes" className="block text-gray-300 hover:text-blue-400 py-2 transition duration-200">Heroes</Link>
          </div>
        )}
      </div>
    </nav>
  );
}