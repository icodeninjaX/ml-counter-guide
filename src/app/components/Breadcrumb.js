'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();

  // Generate breadcrumb segments from pathname
  const segments = pathname.split('/').filter(Boolean);

  // Don't show breadcrumb on home page
  if (segments.length === 0) {
    return null;
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/');
      // Capitalize and format segment name
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      // Check if it's a number (hero ID)
      const isNumber = !isNaN(segment);

      return {
        name: isNumber ? `Hero #${segment}` : name,
        path: path,
      };
    }),
  ];

  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <motion.ol
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-2 text-sm"
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center"
            >
              {!isLast ? (
                <>
                  <Link
                    href={item.path}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
                  >
                    {item.name}
                  </Link>
                  <svg
                    className="w-4 h-4 mx-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </>
              ) : (
                <span className="text-gray-400 font-medium">{item.name}</span>
              )}
            </motion.li>
          );
        })}
      </motion.ol>
    </nav>
  );
}
