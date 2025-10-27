'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
          type: "spring",
          stiffness: 100
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}