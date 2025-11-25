'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb';

export default function About() {
    return (
        <main className="flex min-h-screen flex-col p-4 pt-8">
            <Breadcrumb currentPage="About" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto w-full"
            >
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                        About Mobile Legends Counter Guide
                    </h1>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Your ultimate resource for mastering Mobile Legends through strategic counter-picking
                    </p>
                </div>

                {/* Mission Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass rounded-xl shadow-xl p-8 mb-8 border border-gray-300 dark:border-gray-700"
                >
                    <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 inline-block pb-2">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Mobile Legends Counter Guide was created to help players of all skill levels improve their gameplay through
                        strategic hero selection. We believe that knowing which heroes counter your opponents can be the difference
                        between victory and defeat. Our goal is to provide comprehensive, accurate, and easy-to-understand counter
                        information for every hero in Mobile Legends: Bang Bang.
                    </p>
                </motion.section>

                {/* How to Use */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass rounded-xl shadow-xl p-8 mb-8 border border-gray-300 dark:border-gray-700"
                >
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 inline-block pb-2">
                        How to Use This Guide
                    </h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                1
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                    Browse Heroes
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Navigate to the Heroes page to see all available heroes. Use the search and filter features to find
                                    specific heroes by name or role.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                2
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                    Check Counter Information
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Click on any hero to view detailed counter information, including who they counter, who counters them,
                                    and effective strategies for playing as or against them.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                3
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                    Compare Heroes
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Use the comparison feature to view two heroes side-by-side and understand their matchup dynamics,
                                    strengths, and weaknesses.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                4
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                    Apply in Matches
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Use the knowledge gained from this guide during the draft phase to make informed decisions about
                                    which heroes to pick or ban based on your opponents&apos; selections.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Methodology */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass rounded-xl shadow-xl p-8 mb-8 border border-gray-300 dark:border-gray-700"
                >
                    <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 inline-block pb-2">
                        Our Methodology
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Our counter recommendations are based on several key factors:
                    </p>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Hero Abilities:</strong> We analyze each hero&apos;s skill set to identify natural advantages and disadvantages</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Role Dynamics:</strong> Understanding how different roles interact (e.g., assassins vs. marksmen)</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Game Phase Analysis:</strong> Considering early, mid, and late game strengths</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Community Insights:</strong> Incorporating feedback from experienced Mobile Legends players</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Competitive Meta:</strong> Staying updated with professional tournaments and high-rank gameplay</span>
                        </li>
                    </ul>
                </motion.section>

                {/* Features */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass rounded-xl shadow-xl p-8 mb-8 border border-gray-300 dark:border-gray-700"
                >
                    <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 inline-block pb-2">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                Comprehensive Hero Database
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Detailed information for every hero including skills, strengths, weaknesses, and counters.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                Counter Relationships
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                See which heroes counter others and understand why, with specific strategic insights.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                Team Synergies
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Discover which heroes work well together and how to build effective team compositions.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                Item Build Guides
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Recommended and situational item builds for optimal hero performance.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                Hero Comparison Tool
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Compare two heroes side-by-side to understand matchup dynamics.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-blue-300 mb-2">
                                Search & Filter
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Quickly find heroes by name or filter by role for efficient navigation.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Contact/Credits */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass rounded-xl shadow-xl p-8 mb-8 border border-gray-300 dark:border-gray-700"
                >
                    <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 inline-block pb-2">
                        About the Project
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        This project is built with modern web technologies including Next.js, React, Tailwind CSS, and Framer Motion
                        to provide a fast, responsive, and visually appealing user experience.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        We&apos;re continuously updating our hero database and counter information to keep up with game patches and meta changes.
                        If you have suggestions or feedback, we&apos;d love to hear from you!
                    </p>
                </motion.section>

                {/* Disclaimer */}
                <div className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <p>
                        <strong>Disclaimer:</strong> Mobile Legends Counter Guide is a fan-made resource and is not affiliated with
                        Moonton or Mobile Legends: Bang Bang. All game content and materials are trademarks and copyrights of their respective owners.
                    </p>
                </div>
            </motion.div>
        </main>
    );
}
