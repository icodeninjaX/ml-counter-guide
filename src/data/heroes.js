export const heroes = [
  {
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
  {
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
  {
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
  {
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
  {
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
  },
  {
    id: 6,
    name: 'Gusion',
    role: 'Assassin',
    difficulty: 'Hard',
    description: 'Gusion is a highly mobile assassin with exceptional burst damage. He can eliminate enemies in seconds with his dagger combo.',
    strengths: ['Extremely high burst damage', 'Excellent mobility', 'Low cooldowns with proper combo', 'Strong early to mid game'],
    weaknesses: ['Requires high mechanical skill', 'Squishy and vulnerable to crowd control', 'Combo-dependent', 'Falls off late game if not ahead'],
    counters: [
      { id: 1, name: 'Miya', reason: 'Can burst Miya down before she can respond with her low HP pool' },
      { id: 4, name: 'Karrie', reason: 'Can eliminate Karrie quickly with his burst combo' }
    ],
    countered_by: [
      { id: 2, name: 'Tigreal', reason: 'Can lock down Gusion with crowd control, preventing his combo' },
      { id: 8, name: 'Chou', reason: 'Can interrupt Gusion\'s combo with knock-up and has enough tankiness to survive' }
    ],
    synergies: [
      { id: 3, name: 'Eudora', reason: 'Can follow up on Eudora\'s stun for guaranteed combo execution' },
      { id: 5, name: 'Lancelot', reason: 'Double assassin comp can delete enemies instantly in team fights' }
    ],
    skills: [
      { name: 'Dagger Specialist', type: 'Passive', description: 'Every time Gusion uses a skill, his next basic attack deals extra magic damage and reduces all skill cooldowns.' },
      { name: 'Sword Spike', type: 'Skill 1', description: 'Gusion throws out multiple daggers in a fan-shaped area, dealing magic damage. Daggers can be recalled using this skill again.' },
      { name: 'Shadowblade Slaughter', type: 'Skill 2', description: 'Gusion blinks in a specified direction, dealing magic damage to enemies along the way and marking them.' },
      { name: 'Incandescence', type: 'Ultimate', description: 'Gusion channels his power and throws multiple daggers at once, dealing massive magic damage to enemies in a cone area.' }
    ],
    tips: [
      'Master the dagger recall mechanic to maximize damage and reduce cooldowns',
      'Use Shadowblade Slaughter to engage, burst, then use it again to escape',
      'Practice your combo in training mode: Skill 1 → Ultimate → Skill 2 → Recall Skill 1',
      'Focus on eliminating enemy damage dealers in the backline'
    ],
    build: {
      recommended: ['Magic Shoes', 'Calamity Reaper', 'Holy Crystal', 'Divine Glaive', 'Blood Wings', 'Immortality'],
      situational: ['Winter Truncheon', 'Genius Wand', 'Concentrated Energy']
    }
  },
  {
    id: 7,
    name: 'Estes',
    role: 'Support',
    difficulty: 'Easy',
    description: 'Estes is a support hero with powerful healing abilities. He can sustain his team through extended fights and turn the tide of battle.',
    strengths: ['Strongest healing in the game', 'Can sustain team through long fights', 'Provides crowd control immunity', 'Good poke damage'],
    weaknesses: ['Very squishy', 'No escape abilities', 'Vulnerable to burst damage', 'Relies on team to deal damage'],
    counters: [
      { id: 3, name: 'Eudora', reason: 'Can heal through Eudora\'s burst if positioned safely' },
      { id: 4, name: 'Karrie', reason: 'Can keep Karrie alive through sustained fights' }
    ],
    countered_by: [
      { id: 5, name: 'Lancelot', reason: 'Can quickly eliminate Estes before he can heal his team' },
      { id: 6, name: 'Gusion', reason: 'Can burst Estes down instantly with his combo' }
    ],
    synergies: [
      { id: 1, name: 'Miya', reason: 'Can keep Miya alive while she deals consistent damage from range' },
      { id: 4, name: 'Karrie', reason: 'Provides sustain for Karrie in extended team fights' }
    ],
    skills: [
      { name: 'Moonlight Immersion', type: 'Passive', description: 'Every time Estes uses a skill, he regenerates HP for himself and nearby allies over time.' },
      { name: 'Moonlight Immersion', type: 'Skill 1', description: 'Estes summons a rain of moonlight in an area, dealing magic damage to enemies and slowing them.' },
      { name: 'Domain of Moon Goddess', type: 'Skill 2', description: 'Estes blesses an ally, restoring their HP and granting them immunity to crowd control effects briefly.' },
      { name: 'Blessing of Moon Goddess', type: 'Ultimate', description: 'Estes channels the power of the moon goddess, continuously healing all nearby allies for several seconds.' }
    ],
    tips: [
      'Stay behind your team and focus on keeping everyone alive',
      'Use your Skill 2 to save allies from crowd control abilities',
      'Position carefully to avoid being targeted by assassins',
      'Use your ultimate when multiple allies are low on HP for maximum value'
    ],
    build: {
      recommended: ['Magic Shoes', 'Enchanted Talisman', 'Necklace of Durance', 'Holy Crystal', 'Ice Queen Wand', 'Immortality'],
      situational: ['Winter Truncheon', 'Oracle', 'Athena\'s Shield']
    }
  },
  {
    id: 8,
    name: 'Chou',
    role: 'Fighter',
    difficulty: 'Moderate',
    description: 'Chou is a versatile fighter with excellent crowd control and mobility. He can be played as a tank or damage dealer depending on build.',
    strengths: ['High mobility', 'Strong crowd control', 'Can block projectiles', 'Flexible build paths', 'Good at isolating enemies'],
    weaknesses: ['Combo-dependent', 'Vulnerable when skills are on cooldown', 'Requires good timing', 'Moderate skill floor'],
    counters: [
      { id: 5, name: 'Lancelot', reason: 'Can interrupt Lancelot\'s combo with knock-up and sustain his burst' },
      { id: 6, name: 'Gusion', reason: 'Can disrupt Gusion\'s combo and survive his burst damage' }
    ],
    countered_by: [
      { id: 4, name: 'Karrie', reason: 'True damage penetrates Chou\'s defenses even with tank build' },
      { id: 2, name: 'Tigreal', reason: 'Tigreal can lock down Chou and prevent him from executing combos' }
    ],
    synergies: [
      { id: 3, name: 'Eudora', reason: 'Can set up Eudora\'s combo by kicking enemies into her range' },
      { id: 2, name: 'Tigreal', reason: 'Can chain crowd control with Tigreal for devastating team fight combos' }
    ],
    skills: [
      { name: 'Only Fast', type: 'Passive', description: 'When Chou uses a basic attack or skill, his movement speed increases and his next basic attack deals extra damage.' },
      { name: 'Jeet Kune Do', type: 'Skill 1', description: 'Chou performs a three-part combo punch, each dealing physical damage. The third punch knocks enemies airborne.' },
      { name: 'Shunpo', type: 'Skill 2', description: 'Chou dashes in a specified direction and gains a shield. His next basic attack within a short time will slow enemies. Can be used to block projectiles.' },
      { name: 'The Way of Dragon', type: 'Ultimate', description: 'Chou delivers a powerful kick that knocks back and stuns an enemy hero, dealing physical damage based on the target\'s maximum HP.' }
    ],
    tips: [
      'Use Skill 1\'s third hit to knock up enemies, then follow with your ultimate',
      'Time your Skill 2 to block important enemy projectiles or crowd control',
      'Master the Flicker + Ultimate combo to instantly kick priority targets',
      'Build tank items if your team needs a frontline, damage items if you need to carry'
    ],
    build: {
      recommended: ['Warrior Boots', 'Bloodlust Axe', 'Endless Battle', 'Blade of Despair', 'Oracle', 'Immortality'],
      situational: ['Dominance Ice', 'Antique Cuirass', 'Thunder Belt', 'Brute Force Breastplate']
    }
  }
];
