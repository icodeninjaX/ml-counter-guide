'use client';

import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize with null to indicate loading state
  const [darkMode, setDarkMode] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Read from localStorage on mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    // Default to true (dark mode) if no preference stored
    const isDark = storedDarkMode === null ? true : storedDarkMode === 'true';
    setDarkMode(isDark);
    setMounted(true);

    // Apply the class immediately
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  // Sync dark class with darkMode state
  useEffect(() => {
    if (darkMode === null) return; // Skip if not initialized

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}