export const heroes = [
  {
    id: 1,
    name: 'Miya',
    role: 'Marksman',
    difficulty: 'Easy',
    image: '/images/heroes/miya.png',
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
    image: '/images/heroes/tigreal.png',
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
    image: '/images/heroes/eudora.png',
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
    image: '/images/heroes/karrie.png',
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
    image: '/images/heroes/lancelot.png',
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
    image: '/images/heroes/gusion.png',
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
    image: '/images/heroes/estes.png',
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
    image: '/images/heroes/chou.png',
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
  },
  {
    id: 9,
    name: 'Fanny',
    role: 'Assassin',
    difficulty: 'Hard',
    image: '/images/heroes/fanny.png',
    description: 'Fanny is an assassin known for her extreme mobility using steel cables. She can fly across the map and deal massive damage to unsuspecting enemies.',
    strengths: ['Unmatched mobility', 'High burst damage', 'Strong early game invasion', 'Can escape easily'],
    weaknesses: ['Extremely high skill ceiling', 'Energy dependent', 'Vulnerable to crowd control', 'Weak late game'],
    counters: [
      { id: 11, name: 'Layla', reason: 'Can dive Layla easily before she can react' },
      { id: 3, name: 'Eudora', reason: 'Can dodge Eudora\'s stun with fast cable movement if timed right' }
    ],
    countered_by: [
      { id: 10, name: 'Franco', reason: 'Can suppress Fanny with his ultimate, stopping her flight' },
      { id: 8, name: 'Chou', reason: 'Can kick Fanny out of her flight path' }
    ],
    synergies: [
      { id: 7, name: 'Estes', reason: 'Can heal Fanny when she returns from a dive' },
      { id: 2, name: 'Tigreal', reason: 'Can group enemies for Fanny to wall spam' }
    ],
    skills: [
      { name: 'Air Superiority', type: 'Passive', description: 'Deals extra damage while flying and restores energy.' },
      { name: 'Tornado Strike', type: 'Skill 1', description: 'Fanny spins her blade, dealing damage to nearby enemies.' },
      { name: 'Steel Cable', type: 'Skill 2', description: 'Fanny throws a cable that pulls her to the first obstacle it hits. Each successive cable reduces energy cost.' },
      { name: 'Cut Throat', type: 'Ultimate', description: 'Fanny initiates a quick attack on an enemy, dealing massive physical damage.' }
    ],
    tips: [
      'Practice cable management in training mode before playing ranked',
      'Always keep an eye on your energy bar',
      'Look for narrow corridors to maximize wall spam damage',
      'Invade enemy jungle early to steal buffs'
    ],
    build: {
      recommended: ['Tough Boots', 'Bloodlust Axe', 'Antique Cuirass', 'Malefic Roar', 'Athena\'s Shield', 'Immortality'],
      situational: ['Blade of Despair', 'Rose Gold Meteor', 'Sea Halberd']
    }
  },
  {
    id: 10,
    name: 'Franco',
    role: 'Tank',
    difficulty: 'Moderate',
    image: '/images/heroes/franco.png',
    description: 'Franco is a tank who specializes in hooking enemies and suppressing them. He is a nightmare for squishy heroes and assassins.',
    strengths: ['Game-changing hooks', 'Suppression ultimate (cannot be purified)', 'High durability', 'Roam pressure'],
    weaknesses: ['Missed hooks make him less useful', 'No wave clear', 'Mana hungry', 'Slow movement'],
    counters: [
      { id: 9, name: 'Fanny', reason: 'Can stop Fanny in her tracks with his ultimate' },
      { id: 5, name: 'Lancelot', reason: 'Can lock down Lancelot preventing him from using skills' }
    ],
    countered_by: [
      { id: 2, name: 'Tigreal', reason: 'Can counter-initiate if Franco hooks him' },
      { id: 12, name: 'Zilong', reason: 'Can run away or flip Franco if hooked' }
    ],
    synergies: [
      { id: 3, name: 'Eudora', reason: 'Guaranteed kill on hooked target with Eudora\'s burst' },
      { id: 11, name: 'Layla', reason: 'Can protect Layla and feed her kills' }
    ],
    skills: [
      { name: 'Wasteland Force', type: 'Passive', description: 'Increases movement speed and regenerates HP when out of combat.' },
      { name: 'Iron Hook', type: 'Skill 1', description: 'Franco launches an iron hook in a designated direction, pulling the first enemy hit towards him.' },
      { name: 'Fury Shock', type: 'Skill 2', description: 'Franco lashes out, dealing physical damage to enemies and slowing them.' },
      { name: 'Bloody Hunt', type: 'Ultimate', description: 'Franco suppresses an enemy unit, hacking them for 6 times and dealing damage.' }
    ],
    tips: [
      'Predict enemy movement when using Iron Hook',
      'Use Flicker + Ultimate to catch key targets off guard',
      'Roam with your jungler or mage to secure kills',
      'Don\'t be afraid to hook the enemy tank if your team can melt them'
    ],
    build: {
      recommended: ['Rapid Boots', 'Dominance Ice', 'Athena\'s Shield', 'Antique Cuirass', 'Immortality', 'Thunder Belt'],
      situational: ['Guardian Helmet', 'Oracle', 'Twilight Armor']
    }
  },
  {
    id: 11,
    name: 'Layla',
    role: 'Marksman',
    difficulty: 'Easy',
    image: '/images/heroes/layla.png',
    description: 'Layla is a marksman with the longest attack range in the game at max level. She deals more damage the further she is from her target.',
    strengths: ['Longest attack range', 'High late game damage', 'Easy to play', 'Good zoning'],
    weaknesses: ['No mobility', 'Very squishy', 'Weak early game', 'Vulnerable to assassins'],
    counters: [
      { id: 2, name: 'Tigreal', reason: 'Can melt Tigreal from outside his engagement range' },
      { id: 10, name: 'Franco', reason: 'Can poke Franco down if positioned behind minions' }
    ],
    countered_by: [
      { id: 9, name: 'Fanny', reason: 'Easy target for Fanny to dive' },
      { id: 12, name: 'Zilong', reason: 'Can be charged and flipped by Zilong easily' }
    ],
    synergies: [
      { id: 2, name: 'Tigreal', reason: 'Can keep enemies away from Layla' },
      { id: 10, name: 'Franco', reason: 'Can hook enemies into Layla\'s range' }
    ],
    skills: [
      { name: 'Malefic Gun', type: 'Passive', description: 'Damage increases with the distance between Layla and the enemy.' },
      { name: 'Malefic Bomb', type: 'Skill 1', description: 'Fires a malefic energy bomb, dealing damage and increasing movement speed if it hits.' },
      { name: 'Void Projectile', type: 'Skill 2', description: 'Fires an energy ball that explodes, dealing damage and slowing enemies.' },
      { name: 'Destruction Rush', type: 'Ultimate', description: 'Fires an energy cannon, dealing massive damage to enemies in a line. Increases attack range passively.' }
    ],
    tips: [
      'Always maintain maximum distance to maximize damage',
      'Use Skill 1 to check bushes and gain movement speed',
      'Save your ultimate to snipe low HP enemies escaping',
      'Never walk alone in the river'
    ],
    build: {
      recommended: ['Swift Boots', 'Windtalker', 'Berserker\'s Fury', 'Haas\'s Claws', 'Malefic Roar', 'Blade of Despair'],
      situational: ['Wind of Nature', 'Rose Gold Meteor', 'Immortality']
    }
  },
  {
    id: 12,
    name: 'Zilong',
    role: 'Fighter',
    difficulty: 'Easy',
    image: '/images/heroes/zilong.png',
    description: 'Zilong is a fighter/assassin who excels at charging down enemies and flipping them. He is a split push threat and a carry killer.',
    strengths: ['High burst and mobility', 'Strong split pusher', 'Good crowd control (flip)', 'Attack speed buff'],
    weaknesses: ['Squishy for a fighter', 'Vulnerable to CC', 'Weak team fight presence', 'Relies on ultimate'],
    counters: [
      { id: 11, name: 'Layla', reason: 'Can close the gap instantly and burst her' },
      { id: 1, name: 'Miya', reason: 'Can chase Miya down even if she uses ultimate' }
    ],
    countered_by: [
      { id: 2, name: 'Tigreal', reason: 'Can push Zilong away after he engages' },
      { id: 8, name: 'Chou', reason: 'Can outplay Zilong with his mobility and CC' }
    ],
    synergies: [
      { id: 3, name: 'Eudora', reason: 'Can burst down the target Zilong flips' },
      { id: 7, name: 'Estes', reason: 'Can keep Zilong alive during his dives' }
    ],
    skills: [
      { name: 'Dragon Flurry', type: 'Passive', description: 'Every 3 basic attacks, the next basic attack hits multiple times and heals Zilong.' },
      { name: 'Spear Flip', type: 'Skill 1', description: 'Lifts an enemy over his back, dealing damage.' },
      { name: 'Spear Strike', type: 'Skill 2', description: 'Dashes to the target, dealing damage and reducing their physical defense.' },
      { name: 'Supreme Warrior', type: 'Ultimate', description: 'Increases movement speed and attack speed, and becomes immune to slow effects.' }
    ],
    tips: [
      'Use Ultimate to escape or chase down enemies',
      'Wait for the enemy to use their escape skill before using Spear Strike',
      'Focus on split pushing when team fights are not favorable',
      'Target the enemy marksman or mage first'
    ],
    build: {
      recommended: ['Rapid Boots', 'Windtalker', 'Berserker\'s Fury', 'Blade of the Heptaseas', 'Malefic Roar', 'Blade of Despair'],
      situational: ['Rose Gold Meteor', 'Immortality', 'Demon Hunter Sword']
    }
  },
  {
    id: 13,
    name: 'Alucard',
    role: 'Fighter',
    difficulty: 'Easy',
    image: '/images/heroes/alucard.png',
    description: 'Alucard is a fighter with immense lifesteal capabilities. He excels at chasing down enemies and sustaining through 1v1 fights.',
    strengths: ['High lifesteal', 'Strong chase ability', 'Good 1v1 potential', 'No mana cost'],
    weaknesses: ['Weak to anti-heal', 'Vulnerable to CC', 'Falls off late game', 'Melee range'],
    counters: [
      { id: 11, name: 'Layla', reason: 'Can stick to Layla and burst her down' },
      { id: 3, name: 'Eudora', reason: 'Can survive her burst with lifesteal if not one-shot' }
    ],
    countered_by: [
      { id: 8, name: 'Chou', reason: 'Can kick Alucard away and disrupt his lifesteal' },
      { id: 10, name: 'Franco', reason: 'Suppression prevents Alucard from casting skills or lifestealing' }
    ],
    synergies: [
      { id: 7, name: 'Estes', reason: 'Amplifies Alucard\'s sustainability to unkillable levels' },
      { id: 2, name: 'Tigreal', reason: 'Sets up enemies for Alucard to cleave' }
    ],
    skills: [
      { name: 'Pursuit', type: 'Passive', description: 'Next basic attack after a skill deals extra damage and dashes to the target.' },
      { name: 'Groundsplitter', type: 'Skill 1', description: 'Leaps to an area, dealing damage and slowing enemies.' },
      { name: 'Whirling Smash', type: 'Skill 2', description: 'Slashes nearby enemies, dealing physical damage.' },
      { name: 'Fission Wave', type: 'Ultimate', description: 'Increases lifesteal and fires a powerful wave of energy.' }
    ],
    tips: [
      'Always use a skill before basic attacking to trigger your passive',
      'Don\'t engage if the enemy has heavy CC or anti-heal',
      'Farm quickly to get your core items',
      'Target squishy heroes first'
    ],
    build: {
      recommended: ['Warrior Boots', 'Haas\'s Claws', 'Endless Battle', 'Berserker\'s Fury', 'Malefic Roar', 'Blade of Despair'],
      situational: ['Rose Gold Meteor', 'Immortality', 'Brute Force Breastplate']
    }
  },
  {
    id: 14,
    name: 'Nana',
    role: 'Mage',
    difficulty: 'Easy',
    image: '/images/heroes/nana.png',
    description: 'Nana is a mage/support who specializes in crowd control and zoning. Her Molina is one of the most annoying skills in the game.',
    strengths: ['Excellent crowd control', 'Good zoning', 'Passive resurrection', 'Annoying poke'],
    weaknesses: ['Low mobility', 'Low burst damage', 'Squishy', 'Skillshot dependent'],
    counters: [
      { id: 9, name: 'Fanny', reason: 'Molina can stop Fanny\'s flight' },
      { id: 2, name: 'Tigreal', reason: 'Can interrupt Tigreal\'s set with Molina' }
    ],
    countered_by: [
      { id: 11, name: 'Layla', reason: 'Can outrange Nana and kill her from safe distance' },
      { id: 5, name: 'Lancelot', reason: 'Can dodge Nana\'s skills with his immunity' }
    ],
    synergies: [
      { id: 10, name: 'Franco', reason: 'Can hook enemies transformed by Molina' },
      { id: 6, name: 'Gusion', reason: 'Can burst down targets controlled by Nana' }
    ],
    skills: [
      { name: 'Molina\'s Gift', type: 'Passive', description: 'Transforms into Molina when taking fatal damage, becoming immune and gaining movement speed.' },
      { name: 'Magic Boomerang', type: 'Skill 1', description: 'Throws a boomerang that deals damage and slows enemies.' },
      { name: 'Molina Smooch', type: 'Skill 2', description: 'Summons Molina to chase enemies and transform them, slowing and reducing magic defense.' },
      { name: 'Molina Blitz', type: 'Ultimate', description: 'Summons Molina to attack an area 3 times, stunning enemies hit twice.' }
    ],
    tips: [
      'Place Molina in bushes to scout or zone enemies',
      'Save your passive for escaping dangerous situations',
      'Use Ultimate to follow up on teammate\'s CC',
      'Poke enemies constantly with your Boomerang'
    ],
    build: {
      recommended: ['Magic Shoes', 'Enchanted Talisman', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Blood Wings'],
      situational: ['Necklace of Durance', 'Winter Truncheon', 'Immortality']
    }
  },
  {
    id: 15,
    name: 'Clint',
    role: 'Marksman',
    difficulty: 'Easy',
    image: '/images/heroes/clint.png',
    description: 'Clint is a marksman who deals massive burst damage with his passive. He is strong in the laning phase and scales well into late game.',
    strengths: ['High burst damage', 'Long range passive', 'Good laning phase', 'Immobilize skill'],
    weaknesses: ['Low mobility', 'Skill dependent', 'Vulnerable to assassins', 'Slow attack speed'],
    counters: [
      { id: 11, name: 'Layla', reason: 'Can burst Layla before she scales' },
      { id: 4, name: 'Karrie', reason: 'Outranges Karrie in the early game' }
    ],
    countered_by: [
      { id: 5, name: 'Lancelot', reason: 'Can dodge Clint\'s skills and close the gap' },
      { id: 12, name: 'Zilong', reason: 'Can run down Clint easily' }
    ],
    synergies: [
      { id: 2, name: 'Tigreal', reason: 'Can group enemies for Clint\'s AoE skills' },
      { id: 10, name: 'Franco', reason: 'Hook + Clint\'s burst is a guaranteed kill' }
    ],
    skills: [
      { name: 'Double Shot', type: 'Passive', description: 'After using a skill, the next basic attack penetrates enemies and deals extra damage.' },
      { name: 'Quick Draw', type: 'Skill 1', description: 'Fires 5 bullets rapidly at enemies in a cone.' },
      { name: 'Trapping Recoil', type: 'Skill 2', description: 'Shoots a trap net, immobilizing the enemy and knocking Clint back.' },
      { name: 'Grenade Bombardment', type: 'Ultimate', description: 'Launches a grenade that explodes on impact. Can store up to 5 charges.' }
    ],
    tips: [
      'Weave basic attacks between skills to maximize damage',
      'Use Skill 2 to escape or set up kills',
      'Poke enemies in lane with Skill 1 and Passive',
      'Keep your distance and burst down squishies'
    ],
    build: {
      recommended: ['Thunder Belt', 'Warrior Boots', 'Endless Battle', 'Berserker\'s Fury', 'Malefic Roar', 'Blade of Despair'],
      situational: ['Rose Gold Meteor', 'Wind of Nature', 'Immortality']
    }
  },
  {
    id: 16,
    name: 'Balmond',
    role: 'Fighter',
    difficulty: 'Easy',
    image: '/images/heroes/balmond.png',
    description: 'Balmond is a fighter/tank who spins to win. He is very durable and can execute low HP enemies with his ultimate.',
    strengths: ['High durability', 'True damage execution', 'Good sustain', 'Easy to play'],
    weaknesses: ['Kitable', 'Interruptible skills', 'Predictable', 'Low mobility'],
    counters: [
      { id: 7, name: 'Estes', reason: 'Can burst through Estes\' healing with Ultimate' },
      { id: 11, name: 'Layla', reason: 'Can sustain her damage and execute her' }
    ],
    countered_by: [
      { id: 4, name: 'Karrie', reason: 'True damage melts Balmond' },
      { id: 3, name: 'Eudora', reason: 'Can burst Balmond before he can heal' }
    ],
    synergies: [
      { id: 7, name: 'Estes', reason: 'Makes Balmond unkillable in team fights' },
      { id: 14, name: 'Nana', reason: 'Nana controls enemies while Balmond spins on them' }
    ],
    skills: [
      { name: 'Bloodthirst', type: 'Passive', description: 'Restores HP upon killing minions or heroes.' },
      { name: 'Soul Lock', type: 'Skill 1', description: 'Dashes forward, dealing damage and slowing enemies.' },
      { name: 'Cyclone Sweep', type: 'Skill 2', description: 'Spins with his axe, dealing continuous damage to nearby enemies.' },
      { name: 'Lethal Counter', type: 'Ultimate', description: 'Smashes the ground, dealing damage based on the target\'s missing HP.' }
    ],
    tips: [
      'Use Ultimate to secure kills on low HP enemies (it deals more damage the lower they are)',
      'Spin on minion waves to heal up',
      'Build tanky to survive in the middle of team fights',
      'Don\'t be afraid to tower dive if you have your passive up'
    ],
    build: {
      recommended: ['Warrior Boots', 'Cursed Helmet', 'Guardian Helmet', 'Antique Cuirass', 'Athena\'s Shield', 'Immortality'],
      situational: ['Radiant Armor', 'Blade Armor', 'Bloodlust Axe']
    }
  },
  {
    id: 17,
    name: 'Saber',
    role: 'Assassin',
    difficulty: 'Easy',
    image: '/images/heroes/saber.png',
    description: 'Saber is an assassin who specializes in locking down and instantly eliminating a single target. He is the terror of squishy heroes.',
    strengths: ['Guaranteed kill on squishies', 'Armor reduction', 'High mobility', 'Easy to execute'],
    weaknesses: ['Single target only', 'Useless after combo', 'Squishy', 'Vulnerable to CC'],
    counters: [
      { id: 9, name: 'Fanny', reason: 'Can lock down Fanny and burst her before she can fly' },
      { id: 11, name: 'Layla', reason: 'Free food for Saber' }
    ],
    countered_by: [
      { id: 2, name: 'Tigreal', reason: 'Can disrupt Saber\'s combo or peel for his carry' },
      { id: 16, name: 'Balmond', reason: 'Too tanky for Saber to burst' }
    ],
    synergies: [
      { id: 6, name: 'Gusion', reason: 'Can follow up on Saber\'s pick for a double assassin threat' },
      { id: 3, name: 'Eudora', reason: 'Target lock duo: anyone they look at dies' }
    ],
    skills: [
      { name: 'Enemy\'s Bane', type: 'Passive', description: 'Attacks reduce enemy Physical Defense.' },
      { name: 'Orbiting Swords', type: 'Skill 1', description: 'Releases swords that orbit him, dealing damage to enemies hit.' },
      { name: 'Charge', type: 'Skill 2', description: 'Dashes to a location, dealing damage.' },
      { name: 'Triple Sweep', type: 'Ultimate', description: 'Knocks an enemy up and deals massive burst damage.' }
    ],
    tips: [
      'Camp bushes to ambush squishy heroes',
      'Wait for the enemy tank to engage before going for the backline',
      'Use Skill 1 to poke and reduce armor before engaging',
      'Don\'t hesitate to trade your life for the enemy carry'
    ],
    build: {
      recommended: ['Magic Shoes', 'Blade of the Heptaseas', 'Hunter Strike', 'Malefic Roar', 'Blade of Despair', 'Immortality'],
      situational: ['Rose Gold Meteor', 'Endless Battle', 'Sea Halberd']
    }
  },
  {
    id: 18,
    name: 'Alice',
    role: 'Mage',
    difficulty: 'Moderate',
    image: '/images/heroes/alice.png',
    description: 'Alice is a blood mage who excels at sustaining in team fights. She becomes a tanky monster in the late game.',
    strengths: ['High sustain', 'Good mobility', 'AoE damage', 'Tanky late game'],
    weaknesses: ['Mana hungry', 'Weak early game', 'Vulnerable to anti-heal', 'Needs stacks'],
    counters: [
      { id: 1, name: 'Miya', reason: 'Can dive Miya and survive her damage' },
      { id: 7, name: 'Estes', reason: 'Can out-sustain Estes\' healing in long fights' }
    ],
    countered_by: [
      { id: 4, name: 'Karrie', reason: 'True damage ignores Alice\'s defenses' },
      { id: 13, name: 'Alucard', reason: 'Can out-lifesteal Alice in a 1v1' }
    ],
    synergies: [
      { id: 2, name: 'Tigreal', reason: 'Groups enemies for Alice\'s ultimate' },
      { id: 7, name: 'Estes', reason: 'Healing on top of lifesteal makes Alice unkillable' }
    ],
    skills: [
      { name: 'Blood Ancestry', type: 'Passive', description: 'Gains max HP and mana by collecting blood orbs from dead minions/heroes.' },
      { name: 'Flowing Blood', type: 'Skill 1', description: 'Shoots a blob of blood. Can reactivate to teleport to its location.' },
      { name: 'Blood Awe', type: 'Skill 2', description: 'Deals damage and immobilizes nearby enemies.' },
      { name: 'Blood Ode', type: 'Ultimate', description: 'Enters blood-draining mode, dealing damage and healing herself.' }
    ],
    tips: [
      'Focus on farming stacks in the early game',
      'Manage your mana carefully; you are useless without it',
      'Use Skill 1 to engage or escape unpredictably',
      'Teleport into the middle of the enemy team with Ultimate active'
    ],
    build: {
      recommended: ['Demon Shoes', 'Clock of Destiny', 'Dominance Ice', 'Winter Truncheon', 'Lightning Truncheon', 'Oracle'],
      situational: ['Ice Queen Wand', 'Radiant Armor', 'Immortality']
    }
  },
  {
    id: 19,
    name: 'Rafaela',
    role: 'Support',
    difficulty: 'Easy',
    image: '/images/heroes/rafaela.png',
    description: 'Rafaela is a support who provides healing and movement speed to her team. She is great for kiting and chasing.',
    strengths: ['Team speed boost', 'Healing', 'Vision (Skill 1)', 'Easy to play'],
    weaknesses: ['Squishy', 'Low damage', 'No hard CC (except Ult)', 'Mana hungry'],
    counters: [
      { id: 14, name: 'Nana', reason: 'Can cleanse Nana\'s slow and speed up team to dodge Molina' },
      { id: 16, name: 'Balmond', reason: 'Can kite Balmond indefinitely' }
    ],
    countered_by: [
      { id: 17, name: 'Saber', reason: 'One-shots Rafaela easily' },
      { id: 6, name: 'Gusion', reason: 'Can burst Rafaela before she can heal' }
    ],
    synergies: [
      { id: 15, name: 'Clint', reason: 'Speed boost helps Clint position for his passive' },
      { id: 13, name: 'Alucard', reason: 'Helps Alucard stick to targets' }
    ],
    skills: [
      { name: 'Deity Penalization', type: 'Passive', description: 'Deals true damage to the enemy that killed her upon death.' },
      { name: 'Light of Retribution', type: 'Skill 1', description: 'Deals damage to nearby enemies and slows them. Reveals hidden enemies.' },
      { name: 'Holy Healing', type: 'Skill 2', description: 'Heals nearby allies and increases their movement speed.' },
      { name: 'Holy Baptism', type: 'Ultimate', description: 'Shoots a beam of light, stunning enemies in a line.' }
    ],
    tips: [
      'Spam Skill 1 to check bushes for enemies',
      'Use Skill 2 to help your team engage or disengage',
      'Save Ultimate for interrupting enemy channels or peeling',
      'Stay behind your tank and carry'
    ],
    build: {
      recommended: ['Demon Shoes', 'Enchanted Talisman', 'Dominance Ice', 'Athena\'s Shield', 'Immortality', 'Flask of the Oasis'],
      situational: ['Necklace of Durance', 'Antique Cuirass', 'Thunder Belt']
    }
  },
  {
    id: 20,
    name: 'Bruno',
    role: 'Marksman',
    difficulty: 'Moderate',
    image: '/images/heroes/bruno.png',
    description: 'Bruno is a marksman who relies on his mechanical legs to kick energy balls. He deals high critical damage.',
    strengths: ['High critical damage', 'Good mobility', 'Stun skill', 'Strong early game'],
    weaknesses: ['Short range', 'Ball catching mechanic', 'Vulnerable to CC', 'Skill dependent'],
    counters: [
      { id: 4, name: 'Karrie', reason: 'Can burst Karrie down with crits' },
      { id: 16, name: 'Balmond', reason: 'Can interrupt Balmond\'s spin with his slide tackle' }
    ],
    countered_by: [
      { id: 11, name: 'Layla', reason: 'Outranges Bruno significantly' },
      { id: 10, name: 'Franco', reason: 'Can hook Bruno when he tries to catch his ball' }
    ],
    synergies: [
      { id: 19, name: 'Rafaela', reason: 'Speed boost helps Bruno catch his balls' },
      { id: 2, name: 'Tigreal', reason: 'Keeps enemies in place for Bruno\'s bouncing ultimate' }
    ],
    skills: [
      { name: 'Mecha Legs', type: 'Passive', description: 'Gains critical chance when skills deal damage.' },
      { name: 'Volley Shot', type: 'Skill 1', description: 'Kicks a powerball that bounces back. Catching it resets cooldown.' },
      { name: 'Flying Tackle', type: 'Skill 2', description: 'Slides forward, stunning enemies.' },
      { name: 'Wave of the World', type: 'Ultimate', description: 'Kicks an energy ball that bounces between enemies.' }
    ],
    tips: [
      'Practice catching your ball to maximize damage output',
      'Use Skill 2 to reposition or interrupt enemies',
      'Ultimate is great for team fights in tight spaces',
      'Don\'t get too greedy trying to catch a ball in a dangerous spot'
    ],
    build: {
      recommended: ['Swift Boots', 'Haas\'s Claws', 'Berserker\'s Fury', 'Windtalker', 'Malefic Roar', 'Immortality'],
      situational: ['Wind of Nature', 'Rose Gold Meteor', 'Sea Halberd']
    }
  }
];
