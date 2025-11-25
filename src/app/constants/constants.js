// Hero role constants
export const HERO_ROLES = {
  MARKSMAN: 'Marksman',
  TANK: 'Tank',
  MAGE: 'Mage',
  ASSASSIN: 'Assassin',
  SUPPORT: 'Support',
  FIGHTER: 'Fighter',
};

// Array for filtering/mapping
export const ROLE_OPTIONS = [
  HERO_ROLES.MARKSMAN,
  HERO_ROLES.TANK,
  HERO_ROLES.MAGE,
  HERO_ROLES.ASSASSIN,
  HERO_ROLES.SUPPORT,
  HERO_ROLES.FIGHTER,
];

// Difficulty level constants
export const DIFFICULTY_LEVELS = {
  EASY: 'Easy',
  MODERATE: 'Moderate',
  HARD: 'Hard',
};

// Array for filtering/mapping
export const DIFFICULTY_OPTIONS = [
  DIFFICULTY_LEVELS.EASY,
  DIFFICULTY_LEVELS.MODERATE,
  DIFFICULTY_LEVELS.HARD,
];

// Counter strength ratings
export const COUNTER_STRENGTH = {
  SOFT: 'soft',
  MEDIUM: 'medium',
  HARD: 'hard',
};

// Sort options for hero list
export const SORT_OPTIONS = {
  NAME_ASC: 'name_asc',
  NAME_DESC: 'name_desc',
  DIFFICULTY_ASC: 'difficulty_asc',
  DIFFICULTY_DESC: 'difficulty_desc',
};

// Difficulty value mapping for sorting
export const DIFFICULTY_VALUES = {
  [DIFFICULTY_LEVELS.EASY]: 1,
  [DIFFICULTY_LEVELS.MODERATE]: 2,
  [DIFFICULTY_LEVELS.HARD]: 3,
};
