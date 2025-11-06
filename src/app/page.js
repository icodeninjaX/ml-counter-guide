'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import StatsCounter from './components/StatsCounter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pt-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
          Mobile Legends Counter Guide
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Find the perfect counter picks for your matches and improve your win rate!
        </p>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/heroes" className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Heroes
          </Link>
        </motion.div>
      </div>

      {/* Stats Counter Section */}
      <div className="max-w-4xl w-full mb-10">
        <StatsCounter />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full glass rounded-xl shadow-xl p-8 mb-10 border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent"
      >
        <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-blue-500 inline-block text-blue-600 dark:text-blue-400">Counter-Picking Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 dark:border-blue-400">
            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">Understand Hero Roles</h3>
            <p className="text-gray-700 dark:text-gray-300">Each hero in Mobile Legends has a specific role. Understanding these roles is crucial for effective counter-picking.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 dark:border-blue-400">
            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">Analyze Hero Weaknesses</h3>
            <p className="text-gray-700 dark:text-gray-300">Every hero has weaknesses. Counter-picking is about exploiting those weaknesses with your hero selection.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 dark:border-blue-400">
            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">Consider Team Composition</h3>
            <p className="text-gray-700 dark:text-gray-300">Counter-picking isnt just about individual matchups—its about how your team works together against the enemy team.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 dark:border-blue-400">
            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">Adapt Your Build</h3>
            <p className="text-gray-700 dark:text-gray-300">Sometimes the right item build can help counter specific heroes, even if your hero isnt a direct counter.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl w-full glass rounded-xl shadow-xl p-8 border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent"
      >
        <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-blue-500 inline-block text-blue-600 dark:text-blue-400">About This Guide</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">This guide is designed to help Mobile Legends players make better hero selections through understanding counter picks. Whether youre a beginner or an experienced player, knowing which heroes counter others can give you a significant advantage in matches.</p>
        <p className="text-gray-700 dark:text-gray-300">Use the navigation to explore heroes and their counters, and improve your gameplay strategy!</p>
      </motion.section>
    </main>
  );
}