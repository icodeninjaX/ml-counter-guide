'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { heroes } from '../data/heroes';

export default function NotFound() {
    const [searchTerm, setSearchTerm] = useState('');

    // Get 4 random popular heroes to suggest
    const suggestedHeroes = heroes.slice(0, 4);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-2xl"
            >
                {/* 404 Error */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        Hero Not Found
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Looks like this hero has retreated to base! The page you're looking for doesn't exist.
                    </p>
                </div>

                {/* Search Box */}
                <div className="mb-8">
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search for a hero..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg
                            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    {searchTerm && (
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
                            {heroes
                                .filter((hero) =>
                                    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .slice(0, 5)
                                .map((hero) => (
                                    <Link
                                        key={hero.id}
                                        href={`/heroes/${hero.id}`}
                                        className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition"
                                    >
                                        <span className="text-gray-900 dark:text-gray-100">
                                            {hero.name}
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                                            ({hero.role})
                                        </span>
                                    </Link>
                                ))}
                            {heroes.filter((hero) =>
                                hero.name.toLowerCase().includes(searchTerm.toLowerCase())
                            ).length === 0 && (
                                    <p className="text-gray-600 dark:text-gray-400">
                                        No heroes found matching "{searchTerm}"
                                    </p>
                                )}
                        </div>
                    )}
                </div>

                {/* Suggested Heroes */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                        Popular Heroes
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {suggestedHeroes.map((hero) => (
                            <Link
                                key={hero.id}
                                href={`/heroes/${hero.id}`}
                                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
                            >
                                <div className="text-center">
                                    <div className="text-3xl mb-2">🛡️</div>
                                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                                        {hero.name}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {hero.role}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        href="/heroes"
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        View All Heroes
                    </Link>
                    <Link
                        href="/"
                        className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
