'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import RoleFilter from '../components/RoleFilter';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Breadcrumb from '../components/Breadcrumb';

// Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function Heroes() {
  // Hero data with difficulty levels included
  const heroes = [
    { id: 1, name: 'Miya', role: 'Marksman', difficulty: 'Easy' },
    { id: 2, name: 'Tigreal', role: 'Tank', difficulty: 'Easy' },
    { id: 3, name: 'Eudora', role: 'Mage', difficulty: 'Easy' },
    { id: 4, name: 'Karrie', role: 'Marksman', difficulty: 'Moderate' },
    { id: 5, name: 'Lancelot', role: 'Assassin', difficulty: 'Hard' },
    { id: 6, name: 'Gusion', role: 'Assassin', difficulty: 'Hard' },
    { id: 7, name: 'Estes', role: 'Support', difficulty: 'Easy' },
    { id: 8, name: 'Chou', role: 'Fighter', difficulty: 'Moderate' },
  ];

  const [selectedRole, setSelectedRole] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Debounce search query
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter heroes based on search and role selection
  const filteredHeroes = heroes
    .filter(hero => selectedRole ? hero.role === selectedRole : true)
    .filter(hero => hero.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));

  // Handle compare button click
  const handleCompare = (heroId) => {
    if (compareList.includes(heroId)) {
      setCompareList(compareList.filter(id => id !== heroId));
    } else {
      if (compareList.length < 2) {
        setCompareList([...compareList, heroId]);
      } else {
        // If already 2 heroes are selected, replace the first one
        setCompareList([compareList[1], heroId]);
      }
    }
  };

  // Handle compare modal
  const openCompareModal = () => {
    if (compareList.length === 2) {
      setShowCompareModal(true);
    }
  };

  // Reset comparison
  const resetComparison = () => {
    setCompareList([]);
    setShowCompareModal(false);
  };

  return (
    <div className="py-6">
      <Breadcrumb />
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
        Mobile Legends Heroes
      </h1>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 glass p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-transparent"
      >
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search heroes..."
            className="w-full pl-10 pr-10 p-3 glass border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
          {searchQuery !== debouncedSearchQuery && (
            <div className="absolute inset-y-0 right-10 flex items-center pr-3">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
        
        {/* Role Filter Component */}
        <RoleFilter selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
        
        {/* Compare Status & Button */}
        {compareList.length > 0 && (
          <div className="mt-6 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30 p-4 rounded-lg border border-blue-400 dark:border-blue-700 flex justify-between items-center">
            <div>
              <p className="text-blue-800 dark:text-blue-300 font-medium">
                {compareList.length === 1
                  ? "Select one more hero to compare"
                  : "You can now compare these heroes"
                }
              </p>
              <div className="flex mt-2 gap-2">
                {compareList.map(id => {
                  const hero = heroes.find(h => h.id === id);
                  return (
                    <span key={id} className="bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-200 px-2 py-1 rounded text-sm">
                      {hero?.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={resetComparison}
                className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-3 rounded transition duration-200"
              >
                Reset
              </button>
              {compareList.length === 2 && (
                <button
                  onClick={openCompareModal}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
                >
                  Compare
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Hero Cards Grid */}
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredHeroes.map((hero, index) => (
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass rounded-xl overflow-hidden shadow-lg border-2 bg-white dark:bg-transparent ${
                compareList.includes(hero.id) ? 'border-blue-500 shadow-blue-500/50' : 'border-gray-300 dark:border-gray-700'
              } hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30`}
            >
              <div className="p-6 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>

                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent relative z-10">
                  {hero.name}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  <span className="inline-block glass px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-transparent">
                    {hero.role}
                  </span>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    hero.difficulty === 'Easy' ? 'bg-green-800 text-green-200 border border-green-600' :
                    hero.difficulty === 'Moderate' ? 'bg-yellow-800 text-yellow-200 border border-yellow-600' :
                    'bg-red-800 text-red-200 border border-red-600'
                  }`}>
                    {hero.difficulty}
                  </span>
                </div>

                <div className="flex justify-between mt-4 relative z-10">
                  <a
                    href={`/heroes/${hero.id}`}
                    className="text-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex-grow mr-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    View Details
                  </a>
                  <motion.button
                    onClick={() => handleCompare(hero.id)}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      compareList.includes(hero.id)
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                        : 'glass text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 bg-gray-100 dark:bg-transparent'
                    }`}
                    title={compareList.includes(hero.id) ? "Remove from comparison" : "Add to comparison"}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Empty State */}
      {filteredHeroes.length === 0 && (
        <div className="text-center mt-12 p-8 bg-white dark:bg-gray-800 dark:bg-opacity-50 rounded-lg border border-gray-300 dark:border-gray-700">
          <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-600 dark:text-gray-400 text-xl">No heroes found. Try a different search or filter.</p>
        </div>
      )}
      
      {/* Comparison Modal */}
      {showCompareModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowCompareModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 border-2 border-blue-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Hero Comparison
              </h3>
              <motion.button
                onClick={() => setShowCompareModal(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compareList.map((id, index) => {
                const hero = heroes.find(h => h.id === id);
                return hero ? (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-100/90 to-gray-200/90 dark:from-gray-800/50 dark:to-gray-900/50 p-6 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
                  >
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                      {hero.name}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-200/50 dark:bg-gray-700/30 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-400 font-medium">Role:</span>
                        <span className="glass px-3 py-1 rounded-full text-sm font-semibold text-gray-800 dark:text-gray-300 border border-gray-400 dark:border-gray-600">
                          {hero.role}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-200/50 dark:bg-gray-700/30 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-400 font-medium">Difficulty:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          hero.difficulty === 'Easy' ? 'bg-green-800 text-green-200 border border-green-600' :
                          hero.difficulty === 'Moderate' ? 'bg-yellow-800 text-yellow-200 border border-yellow-600' :
                          'bg-red-800 text-red-200 border border-red-600'
                        }`}>
                          {hero.difficulty}
                        </span>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
                        <a
                          href={`/heroes/${hero.id}`}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          View detailed stats
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : null;
              })}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={() => setShowCompareModal(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}