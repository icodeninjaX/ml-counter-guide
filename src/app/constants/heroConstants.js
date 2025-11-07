/**
 * Hero Constants
 * Centralized constants for hero roles, difficulties, and related configurations
 */

// Hero Roles
export const HERO_ROLES = {
  MARKSMAN: 'Marksman',
  TANK: 'Tank',
  MAGE: 'Mage',
  ASSASSIN: 'Assassin',
  SUPPORT: 'Support',
  FIGHTER: 'Fighter',
};

// Array of all roles for filtering/iteration
export const ALL_ROLES = Object.values(HERO_ROLES);

// Hero Difficulty Levels
export const DIFFICULTY_LEVELS = {
  EASY: 'Easy',
  MODERATE: 'Moderate',
  HARD: 'Hard',
};

// Array of all difficulty levels
export const ALL_DIFFICULTIES = Object.values(DIFFICULTY_LEVELS);

// Role Colors (for gradient backgrounds)
export const ROLE_COLORS = {
  [HERO_ROLES.MARKSMAN]: 'from-blue-500 to-blue-700',
  [HERO_ROLES.TANK]: 'from-green-500 to-green-700',
  [HERO_ROLES.MAGE]: 'from-purple-500 to-purple-700',
  [HERO_ROLES.ASSASSIN]: 'from-red-500 to-red-700',
  [HERO_ROLES.SUPPORT]: 'from-yellow-500 to-yellow-700',
  [HERO_ROLES.FIGHTER]: 'from-orange-500 to-orange-700',
};

// Role Icons (emoji representations)
export const ROLE_ICONS = {
  [HERO_ROLES.MARKSMAN]: '🏹',
  [HERO_ROLES.TANK]: '🛡️',
  [HERO_ROLES.MAGE]: '🔮',
  [HERO_ROLES.ASSASSIN]: '🗡️',
  [HERO_ROLES.SUPPORT]: '💚',
  [HERO_ROLES.FIGHTER]: '⚔️',
};

// Difficulty Colors
export const DIFFICULTY_COLORS = {
  [DIFFICULTY_LEVELS.EASY]: 'bg-green-700',
  [DIFFICULTY_LEVELS.MODERATE]: 'bg-yellow-700',
  [DIFFICULTY_LEVELS.HARD]: 'bg-red-700',
};

// Skill Types
export const SKILL_TYPES = {
  PASSIVE: 'Passive',
  SKILL_1: 'Skill 1',
  SKILL_2: 'Skill 2',
  ULTIMATE: 'Ultimate',
};

// Role Descriptions (for tooltips/help text)
export const ROLE_DESCRIPTIONS = {
  [HERO_ROLES.MARKSMAN]: 'Ranged physical damage dealers with high attack speed',
  [HERO_ROLES.TANK]: 'Durable heroes with crowd control abilities to protect the team',
  [HERO_ROLES.MAGE]: 'Magic damage dealers with powerful burst or sustained damage',
  [HERO_ROLES.ASSASSIN]: 'High mobility heroes that excel at eliminating priority targets',
  [HERO_ROLES.SUPPORT]: 'Heroes that provide healing, buffs, and utility to the team',
  [HERO_ROLES.FIGHTER]: 'Versatile melee heroes with balanced offense and defense',
};

// Difficulty Descriptions
export const DIFFICULTY_DESCRIPTIONS = {
  [DIFFICULTY_LEVELS.EASY]: 'Simple mechanics, great for beginners',
  [DIFFICULTY_LEVELS.MODERATE]: 'Requires some practice and game knowledge',
  [DIFFICULTY_LEVELS.HARD]: 'High skill ceiling, requires mastery to excel',
};

/**
 * Get role color gradient classes
 * @param {string} role - The hero role
 * @returns {string} Tailwind CSS gradient classes
 */
export function getRoleColor(role) {
  return ROLE_COLORS[role] || 'from-gray-500 to-gray-700';
}

/**
 * Get difficulty color class
 * @param {string} difficulty - The difficulty level
 * @returns {string} Tailwind CSS background color class
 */
export function getDifficultyColor(difficulty) {
  return DIFFICULTY_COLORS[difficulty] || 'bg-gray-700';
}

/**
 * Get role icon
 * @param {string} role - The hero role
 * @returns {string} Emoji icon
 */
export function getRoleIcon(role) {
  return ROLE_ICONS[role] || '❓';
}

/**
 * Get role description
 * @param {string} role - The hero role
 * @returns {string} Role description
 */
export function getRoleDescription(role) {
  return ROLE_DESCRIPTIONS[role] || 'Unknown role';
}

/**
 * Get difficulty description
 * @param {string} difficulty - The difficulty level
 * @returns {string} Difficulty description
 */
export function getDifficultyDescription(difficulty) {
  return DIFFICULTY_DESCRIPTIONS[difficulty] || 'Unknown difficulty';
}
