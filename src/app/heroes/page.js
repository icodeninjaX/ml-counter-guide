'use client';

import { useState } from 'react';
import RoleFilter from '../components/RoleFilter';

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
  
  // Filter heroes based on search and role selection
  const filteredHeroes = heroes
    .filter(hero => selectedRole ? hero.role === selectedRole : true)
    .filter(hero => hero.name.toLowerCase().includes(searchQuery.toLowerCase()));

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
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Mobile Legends Heroes
      </h1>
      
      {/* Search and Filter Section */}
      <div className="mb-10 bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg border border-gray-700">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search heroes..."
            className="w-full pl-10 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Role Filter Component */}
        <RoleFilter selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
        
        {/* Compare Status & Button */}
        {compareList.length > 0 && (
          <div className="mt-6 bg-blue-900 bg-opacity-30 p-4 rounded-lg border border-blue-700 flex justify-between items-center">
            <div>
              <p className="text-blue-300 font-medium">
                {compareList.length === 1 
                  ? "Select one more hero to compare" 
                  : "You can now compare these heroes"
                }
              </p>
              <div className="flex mt-2 gap-2">
                {compareList.map(id => {
                  const hero = heroes.find(h => h.id === id);
                  return (
                    <span key={id} className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-sm">
                      {hero?.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={resetComparison}
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded transition duration-200"
              >
                Reset
              </button>
              {compareList.length === 2 && (
                <button 
                  onClick={openCompareModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
                >
                  Compare
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Hero Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredHeroes.map((hero, index) => (
          <div 
            key={hero.id} 
            className={`hero-card bg-gray-800 bg-opacity-70 rounded-xl overflow-hidden shadow-lg border ${
              compareList.includes(hero.id) ? 'border-blue-500' : 'border-gray-700'
            } hover:border-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-blue-400">{hero.name}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold text-gray-300">
                  {hero.role}
                </span>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  hero.difficulty === 'Easy' ? 'bg-green-800 text-green-200' :
                  hero.difficulty === 'Moderate' ? 'bg-yellow-800 text-yellow-200' :
                  'bg-red-800 text-red-200'
                }`}>
                  {hero.difficulty}
                </span>
              </div>
              
              <div className="flex justify-between mt-4">
                <a 
                  href={`/heroes/${hero.id}`}
                  className="text-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex-grow mr-2"
                >
                  View Details
                </a>
                <button 
                  onClick={() => handleCompare(hero.id)}
                  className={`p-2 rounded-lg transition duration-300 ${
                    compareList.includes(hero.id) 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  title={compareList.includes(hero.id) ? "Remove from comparison" : "Add to comparison"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredHeroes.length === 0 && (
        <div className="text-center mt-12 p-8 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
          <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-400 text-xl">No heroes found. Try a different search or filter.</p>
        </div>
      )}
      
      {/* Comparison Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-blue-400">Hero Comparison</h3>
              <button 
                onClick={() => setShowCompareModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {compareList.map(id => {
                const hero = heroes.find(h => h.id === id);
                return hero ? (
                  <div key={id} className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-xl font-bold text-blue-300 mb-2">{hero.name}</h4>
                    <div className="space-y-2">
                      <p><span className="text-gray-400">Role:</span> {hero.role}</p>
                      <p><span className="text-gray-400">Difficulty:</span> {hero.difficulty}</p>
                      
                      {/* This is a placeholder for additional comparison data */}
                      <div className="mt-4 pt-4 border-t border-gray-600">
                        <p className="text-gray-300">For a complete comparison, view the detailed hero pages.</p>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
            
            <div className="flex justify-center mt-6">
              <button 
                onClick={() => setShowCompareModal(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}