'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}