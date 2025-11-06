'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroDetail({ params }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Hero data with expanded details
  const heroes = {
    '1': {
      id: 1,
      name: 'Miya',
      role: 'Marksman',
      difficulty: 'Easy',
      description: 'Miya is a marksman hero with high attack speed and damage output. She excels in the late game and can deal massive damage from a safe distance.',
      strengths: ['High attack speed', 'Good damage output', 'Invisibility skill', 'Strong late game scaling'],
      weaknesses: ['Low HP', 'No mobility skill', 'Vulnerable to burst damage', 'Weak early game'],
      counters: [
        { id: 3, name: 'Eudora', reason: 'Can burst Miya down before she can deal damage' },
        { id: 2, name: 'Tigreal', reason: 'Can disrupt Miya\'s positioning' }
      ],
      countered_by: [
        { id: 5, name: 'Lancelot', reason: 'Can quickly eliminate Miya with burst damage' },
        { id: 6, name: 'Gusion', reason: 'Can dive and burst Miya before she can respond' }
      ],
      synergies: [
        { id: 7, name: 'Estes', reason: 'Estes can heal Miya while she deals damage from a safe distance' },
        { id: 2, name: 'Tigreal', reason: 'Tigreal can set up kills for Miya with his crowd control abilities' }
      ],
      skills: [
        { name: 'Turret Attack', type: 'Passive', description: 'Miya shoots arrows at her enemies, dealing physical damage. Each hit increases her attack speed.' },
        { name: 'Arrow of Eclipse', type: 'Skill 1', description: 'Miya fires multiple arrows at nearby enemies, dealing physical damage.' },
        { name: 'Rain of Arrows', type: 'Skill 2', description: 'Miya shoots a rain of arrows in a specified direction, dealing physical damage and slowing enemies.' },
        { name: 'Hidden Moonlight', type: 'Ultimate', description: 'Miya enters stealth mode, becoming invisible and gaining attack speed afterwards.' }
      ],
      tips: [
        'Position yourself behind your tank in team fights',
        'Use Hidden Moonlight to escape when assassins try to dive you',
        'Focus on farming in the early game to reach your power spike faster',
        'Build attack speed items to maximize your damage output'
      ],
      build: {
        recommended: ['Swift Boots', 'Windtalker', 'Scarlet Phantom', 'Berserker\'s Fury', 'Endless Battle', 'Blade of Despair'],
        situational: ['Wind of Nature', 'Athena\'s Shield', 'Immortality']
      }
    },
    '2': {
      id: 2,
      name: 'Tigreal',
      role: 'Tank',
      difficulty: 'Easy',
      description: 'Tigreal is a tank hero with strong crowd control abilities. He excels at initiating team fights and protecting his teammates.',
      strengths: ['Good crowd control', 'Durable', 'Effective initiator', 'Can push enemies into unfavorable positions'],
      weaknesses: ['Slow movement speed', 'Skill-dependent', 'Vulnerable to true damage', 'Limited damage output'],
      counters: [
        { id: 3, name: 'Eudora', reason: 'Can follow up Tigreal\'s crowd control' },
        { id: 8, name: 'Chou', reason: 'Can combine crowd control with Tigreal for devastating combos' }
      ],
      countered_by: [
        { id: 4, name: 'Karrie', reason: 'True damage melts through Tigreal\'s defenses' },
        { id: 5, name: 'Lancelot', reason: 'Can dodge Tigreal\'s crowd control with his mobility' }
      ],
      synergies: [
        { id: 1, name: 'Miya', reason: 'Can protect Miya and set up kills for her' },
        { id: 3, name: 'Eudora', reason: 'Can hold enemies in place for Eudora\'s burst damage' }
      ],
      skills: [
        { name: 'Fearless', type: 'Passive', description: 'When Tigreal\'s HP falls below 30%, he gains extra Physical and Magic Defense for a short period of time.' },
        { name: 'Attack Wave', type: 'Skill 1', description: 'Tigreal releases a shockwave in a specified direction, dealing physical damage to enemies hit and slowing them down.' },
        { name: 'Sacred Hammer', type: 'Skill 2', description: 'Tigreal charges in a specified direction, dealing physical damage to enemies and pushing them back.' },
        { name: 'Implosion', type: 'Ultimate', description: 'Tigreal slams the ground with his hammer, pulling surrounding enemies to him and stunning them.' }
      ],
      tips: [
        'Use Sacred Hammer followed by Implosion for a powerful combo',
        'Position yourself to push enemies toward your team',
        'Act as a shield for your damage dealers',
        'Save your ultimate for key moments in team fights'
      ],
      build: {
        recommended: ['Tough Boots', 'Dominance Ice', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality', 'Blade Armor'],
        situational: ['Cursed Helmet', 'Thunder Belt', 'Oracle']
      }
    },
    '3': {
      id: 3,
      name: 'Eudora',
      role: 'Mage',
      difficulty: 'Easy',
      description: 'Eudora is a mage with high burst damage potential. She can eliminate enemy heroes quickly with her combo.',
      strengths: ['High burst damage', 'Stun ability', 'Easy to use', 'Effective against squishy heroes'],
      weaknesses: ['Low mobility', 'Long cooldowns', 'Vulnerable when skills are on cooldown', 'Predictable combo'],
      counters: [
        { id: 1, name: 'Miya', reason: 'Can burst Miya down before she can respond' },
        { id: 4, name: 'Karrie', reason: 'Can eliminate Karrie with a single combo' }
      ],
      countered_by: [
        { id: 5, name: 'Lancelot', reason: 'Can dodge Eudora\'s skills and quickly eliminate her' },
        { id: 6, name: 'Gusion', reason: 'Can outburst Eudora and has better mobility' }
      ],
      synergies: [
        { id: 2, name: 'Tigreal', reason: 'Can follow up on Tigreal\'s crowd control with her burst damage' },
        { id: 8, name: 'Chou', reason: 'Can combo with Chou\'s knock-up for guaranteed damage' }
      ],
      skills: [
        { name: 'Superconductor', type: 'Passive', description: 'Eudora\'s skills apply a Superconductor mark to enemies. When marked enemies are hit by her skills, they take additional magic damage.' },
        { name: 'Forked Lightning', type: 'Skill 1', description: 'Eudora releases a forked lightning at enemies, dealing magic damage and applying a Superconductor mark.' },
        { name: 'Electric Arrow', type: 'Skill 2', description: 'Eudora fires an electric arrow that stuns the target and deals magic damage.' },
        { name: 'Thunderstruck', type: 'Ultimate', description: 'Eudora summons a bolt of lightning that deals massive magic damage to a single enemy and nearby enemies.' }
      ],
      tips: [
        'Use your Skill 2 (stun) followed by other skills for the perfect combo',
        'Position carefully and stay behind your tank',
        'Focus on bursting down enemy damage dealers',
        'Avoid engaging when your skills are on cooldown'
      ],
      build: {
        recommended: ['Magic Shoes', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Blood Wings', 'Immortality'],
        situational: ['Winter Truncheon', 'Necklace of Durance', 'Genius Wand']
      }
    },
    '4': {
      id: 4,
      name: 'Karrie',
      role: 'Marksman',
      difficulty: 'Moderate',
      description: 'Karrie is a marksman who specializes in dealing true damage, making her effective against tank heroes.',
      strengths: ['True damage', 'Tank killer', 'Dash ability', 'Fast attack speed'],
      weaknesses: ['Requires good positioning', 'Short attack range', 'Weak early game', 'Mana hungry'],
      counters: [
        { id: 2, name: 'Tigreal', reason: 'True damage melts through his defenses' },
        { id: 8, name: 'Chou', reason: 'Can quickly melt Chou\'s HP with her true damage' }
      ],
      countered_by: [
        { id: 6, name: 'Gusion', reason: 'Can burst Karrie down quickly' },
        { id: 3, name: 'Eudora', reason: 'Can eliminate Karrie with a single combo' }
      ],
      synergies: [
        { id: 7, name: 'Estes', reason: 'Can sustain Karrie through fights' },
        { id: 2, name: 'Tigreal', reason: 'Can protect Karrie and set up kills' }
      ],
      skills: [
        { name: 'Lightwheel Mark', type: 'Passive', description: 'Karrie\'s basic attacks and skills mark enemies with a Lightwheel Mark. The 5th mark triggers true damage based on the target\'s maximum HP.' },
        { name: 'Wheelwind', type: 'Skill 1', description: 'Karrie throws lightwheels in a specified direction, dealing physical damage and applying Lightwheel Marks.' },
        { name: 'Phantomstep', type: 'Skill 2', description: 'Karrie dashes in a specified direction and enhances her next basic attack.' },
        { name: 'Lightwheel State', type: 'Ultimate', description: 'Karrie enters the Lightwheel State, reducing damage taken and enhancing her basic attacks to fire multiple lightwheels.' }
      ],
      tips: [
        'Use Phantomstep to reposition yourself in team fights',
        'Activate Lightwheel State when fighting tanks or in team fights',
        'Focus on building attack speed to trigger your passive more often',
        'Position safely to maximize your damage output'
      ],
      build: {
        recommended: ['Swift Boots', 'Endless Battle', 'Golden Staff', 'Demon Hunter Sword', 'Windtalker', 'Blade of Despair'],
        situational: ['Wind of Nature', 'Athena\'s Shield', 'Rose Gold Meteor']
      }
    },
    '5': {
      id: 5,
      name: 'Lancelot',
      role: 'Assassin',
      difficulty: 'Hard',
      description: 'Lancelot is an assassin with high mobility and burst damage. He excels at eliminating squishy heroes quickly.',
      strengths: ['High mobility', 'Burst damage', 'Immunity frames during skills', 'Strong early to mid game'],
      weaknesses: ['Skill-dependent', 'Weak when skills are on cooldown', 'Squishy', 'Falls off in late game'],
      counters: [
        { id: 3, name: 'Eudora', reason: 'Can dodge her skills and eliminate her quickly' },
        { id: 1, name: 'Miya', reason: 'Can dash to Miya and burst her down' }
      ],
      countered_by: [
        { id: 8, name: 'Chou', reason: 'Can knock up Lancelot and disrupt his combos' },
        { id: 2, name: 'Tigreal', reason: 'Can catch Lancelot with his crowd control abilities' }
      ],
      synergies: [
        { id: 3, name: 'Eudora', reason: 'Can follow up on Eudora\'s stun for guaranteed damage' },
        { id: 7, name: 'Estes', reason: 'Can heal Lancelot between engagements' }
      ],
      skills: [
        { name: 'Soul Cutter', type: 'Passive', description: 'After using a skill, Lancelot\'s next basic attack deals extra damage and applies a slow effect.' },
        { name: 'Puncture', type: 'Skill 1', description: 'Lancelot dashes in a specified direction, dealing damage to enemies along the way.' },
        { name: 'Thorned Rose', type: 'Skill 2', description: 'Lancelot performs a series of sword strikes in a triangular area, becoming immune to damage during the animation.' },
        { name: 'Phantom Execution', type: 'Ultimate', description: 'Lancelot charges toward an enemy, dealing massive physical damage.' }
      ],
      tips: [
        'Use Thorned Rose for the immunity frames to dodge enemy skills',
        'Chain your Puncture skill for maximum mobility',
        'Look for opportunities to eliminate enemy damage dealers',
        'Practice your skill timing to master Lancelot\'s combo'
      ],
      build: {
        recommended: ['Warrior Boots', 'Endless Battle', 'Blade of Despair', 'Berserker\'s Fury', 'Blade of the Heptaseas', 'Immortality'],
        situational: ['Hunter Strike', 'Rose Gold Meteor', 'Malefic Roar']
      }
    }
  };

  const hero = heroes[params.id];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!hero) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-xl border border-gray-300 dark:border-gray-700 max-w-md">
          <svg className="w-20 h-20 mx-auto text-gray-500 dark:text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-2">Hero Not Found</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-6">The hero you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/heroes" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            Go Back to Heroes
          </Link>
        </div>
      </div>
    );
  }

  // Define role colors
  const roleColors = {
    'Marksman': 'from-blue-500 to-blue-700',
    'Tank': 'from-green-500 to-green-700',
    'Mage': 'from-purple-500 to-purple-700',
    'Assassin': 'from-red-500 to-red-700',
    'Support': 'from-yellow-500 to-yellow-700',
    'Fighter': 'from-orange-500 to-orange-700'
  };

  return (
    <div className="py-6">
      {/* Hero Header */}
      <div className="bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-xl shadow-xl p-8 mb-8 border border-gray-300 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">{hero.name}</h1>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`bg-gradient-to-r ${roleColors[hero.role] || 'from-gray-500 to-gray-700'} px-3 py-1 rounded-full text-white font-medium`}>
                {hero.role}
              </span>
              <span className={`px-3 py-1 rounded-full text-white font-medium ${
                hero.difficulty === 'Easy' ? 'bg-green-700' :
                hero.difficulty === 'Moderate' ? 'bg-yellow-700' :
                'bg-red-700'
              }`}>
                Difficulty: {hero.difficulty}
              </span>
            </div>
          </div>
          
          <Link href="/heroes" className="mt-4 md:mt-0 inline-flex items-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-4 rounded-lg transition duration-300 self-start">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Heroes
          </Link>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{hero.description}</p>
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-300 dark:border-gray-700 mb-6">
          <div className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'skills'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-300'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('counters')}
              className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'counters'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-300'
              }`}
            >
              Counters
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`mr-2 inline-block py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'tips'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-300'
              }`}
            >
              Tips & Builds
            </button>
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-xl shadow-xl p-8 mb-8 border border-gray-300 dark:border-gray-700 min-h-[400px]">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Strengths
                </h2>
                <ul className="space-y-2">
                  {hero.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-600 dark:bg-green-500 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-800 dark:text-gray-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Weaknesses
                </h2>
                <ul className="space-y-2">
                  {hero.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-800 dark:text-gray-300">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Synergies */}
            <div className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Hero Synergies
              </h2>
              
              {hero.synergies && hero.synergies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hero.synergies.map(synergy => (
                    <div key={synergy.id} className="bg-gray-50 dark:bg-gray-800 dark:bg-opacity-70 p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                      <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-1">{synergy.name}</h3>
                      <p className="text-gray-800 dark:text-gray-300 mb-2">{synergy.reason}</p>
                      <Link
                        href={`/heroes/${synergy.id}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center transition duration-200"
                      >
                        View details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-gray-700 dark:text-gray-400">
                  No synergy information available.
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">Hero Skills</h2>

            <div className="space-y-6">
              {hero.skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-5 rounded-lg shadow-md">
                  <div className="flex flex-wrap items-center mb-2">
                    <h3 className="font-bold text-xl text-yellow-600 dark:text-yellow-300 mr-3">{skill.name}</h3>
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md text-xs text-gray-800 dark:text-gray-300">{skill.type}</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Counters Tab */}
        {activeTab === 'counters' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Heroes this hero counters */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42.0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Heroes {hero.name} Counters
                </h2>

                {hero.counters && hero.counters.length > 0 ? (
                  <div className="space-y-4">
                    {hero.counters.map(counter => (
                      <div key={counter.id} className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-lg shadow-md border-l-4 border-green-500">
                        <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-1">{counter.name}</h3>
                        <p className="text-gray-800 dark:text-gray-300 mb-2">{counter.reason}</p>
                        <Link
                          href={`/heroes/${counter.id}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center transition duration-200"
                        >
                          View details
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-lg text-gray-600 dark:text-gray-400">
                    No counter information available.
                  </div>
                )}
              </div>

              {/* Heroes that counter this hero */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Heroes that Counter {hero.name}
                </h2>

                {hero.countered_by && hero.countered_by.length > 0 ? (
                  <div className="space-y-4">
                    {hero.countered_by.map(counter => (
                      <div key={counter.id} className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-lg shadow-md border-l-4 border-red-500">
                        <h3 className="font-bold text-lg text-red-600 dark:text-red-400 mb-1">{counter.name}</h3>
                        <p className="text-gray-800 dark:text-gray-300 mb-2">{counter.reason}</p>
                        <Link
                          href={`/heroes/${counter.id}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center transition duration-200"
                        >
                          View details
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-lg text-gray-600 dark:text-gray-400">
                    No counter information available.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Tips & Builds Tab */}
        {activeTab === 'tips' && (
          <div>
            {/* Tips Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Playing Tips</h2>

              <ul className="space-y-3">
                {hero.tips.map((tip, index) => (
                  <li key={index} className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-4 rounded-lg flex items-start">
                    <span className="inline-flex items-center justify-center bg-blue-500 text-white w-6 h-6 rounded-full mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-800 dark:text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Build Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Recommended Builds</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Recommended Items */}
                <div className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-yellow-600 dark:text-yellow-300 mb-4">Core Items</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {hero.build.recommended.map((item, index) => (
                      <div key={index} className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg text-center">
                        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl text-gray-800 dark:text-gray-200">
                          {index + 1}
                        </div>
                        <p className="text-gray-800 dark:text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Situational Items */}
                <div className="bg-gray-100 dark:bg-gray-700 dark:bg-opacity-50 p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-yellow-600 dark:text-yellow-300 mb-4">Situational Items</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {hero.build.situational.map((item, index) => (
                      <div key={index} className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg text-center">
                        <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-800 dark:text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Next/Previous Hero Navigation */}
      <div className="flex justify-between">
        {parseInt(params.id) > 1 && (
          <Link
            href={`/heroes/${parseInt(params.id) - 1}`}
            className="inline-flex items-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Previous Hero
          </Link>
        )}

        {parseInt(params.id) < Object.keys(heroes).length && (
          <Link
            href={`/heroes/${parseInt(params.id) + 1}`}
            className="inline-flex items-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-lg transition duration-300 ml-auto"
          >
            Next Hero
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}