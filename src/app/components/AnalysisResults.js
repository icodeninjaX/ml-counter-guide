'use client';

import { motion } from 'framer-motion';

export default function AnalysisResults({ analysis, isLoading }) {
    if (isLoading) {
        return (
            <div className="w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-8"
                >
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">Analyzing Your Gameplay...</h3>
                            <p className="text-sm text-gray-400">This may take a moment. Our AI is reviewing your performance.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!analysis) {
        return null;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl mx-auto space-y-6"
        >
            {/* Summary Section */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-3 text-blue-300 flex items-center">
                    <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Performance Summary
                </h2>
                <p className="text-gray-200 leading-relaxed">{analysis.summary}</p>

                {analysis.estimatedRank && (
                    <div className="mt-4 inline-block bg-blue-500/20 border border-blue-400/50 rounded-lg px-4 py-2">
                        <span className="text-sm text-gray-300">Estimated Skill Level: </span>
                        <span className="font-semibold text-blue-300">{analysis.estimatedRank}</span>
                    </div>
                )}
            </motion.div>

            {/* Detected Heroes */}
            {analysis.detectedHeroes && analysis.detectedHeroes.length > 0 && (
                <motion.div variants={itemVariants} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-300 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        Detected Heroes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {analysis.detectedHeroes.map((hero, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-purple-500/20 border border-purple-400/50 rounded-full text-sm text-purple-200"
                            >
                                {hero}
                            </span>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Strengths Section */}
            {analysis.strengths && analysis.strengths.length > 0 && (
                <motion.div variants={itemVariants} className="bg-gray-800/50 border border-green-500/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-300 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        What You Did Well
                    </h3>
                    <div className="space-y-4">
                        {analysis.strengths.map((strength, index) => (
                            <div key={index} className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                                <h4 className="font-semibold text-green-200 mb-1 flex items-center justify-between">
                                    {strength.title}
                                    {strength.timestamp && (
                                        <span className="text-xs text-green-400 bg-green-900/40 px-2 py-1 rounded">
                                            {strength.timestamp}
                                        </span>
                                    )}
                                </h4>
                                <p className="text-gray-300 text-sm">{strength.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Areas for Improvement */}
            {analysis.improvements && analysis.improvements.length > 0 && (
                <motion.div variants={itemVariants} className="bg-gray-800/50 border border-yellow-500/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-yellow-300 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Areas for Improvement
                    </h3>
                    <div className="space-y-4">
                        {analysis.improvements.map((improvement, index) => (
                            <div key={index} className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                                <h4 className="font-semibold text-yellow-200 mb-1 flex items-center justify-between">
                                    {improvement.title}
                                    {improvement.timestamp && (
                                        <span className="text-xs text-yellow-400 bg-yellow-900/40 px-2 py-1 rounded">
                                            {improvement.timestamp}
                                        </span>
                                    )}
                                </h4>
                                <p className="text-gray-300 text-sm">{improvement.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Strategic Tips */}
            {analysis.tips && analysis.tips.length > 0 && (
                <motion.div variants={itemVariants} className="bg-gray-800/50 border border-blue-500/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Strategic Tips
                    </h3>
                    <ul className="space-y-3">
                        {analysis.tips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-300 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                                    {index + 1}
                                </span>
                                <p className="text-gray-300 text-sm flex-1">{tip}</p>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Export Button */}
            <motion.div variants={itemVariants} className="flex justify-center pt-4">
                <button
                    onClick={() => window.print()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export Results
                </button>
            </motion.div>
        </motion.div>
    );
}
