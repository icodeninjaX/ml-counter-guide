'use client';

import { motion } from 'framer-motion';

export default function RoleFilter({ selectedRole, setSelectedRole }) {
  const roles = [
    { id: 'all', name: 'All', icon: '⭐' },
    { id: 'Marksman', name: 'Marksman', icon: '🎯' },
    { id: 'Tank', name: 'Tank', icon: '🛡️' },
    { id: 'Mage', name: 'Mage', icon: '🔮' },
    { id: 'Assassin', name: 'Assassin', icon: '🗡️' },
    { id: 'Support', name: 'Support', icon: '❤️' },
    { id: 'Fighter', name: 'Fighter', icon: '👊' },
  ];

  return (
    <div>
      <label className="block text-gray-300 mb-3 font-medium">Filter by Role:</label>
      <div className="flex flex-wrap gap-2">
        {roles.map((role, index) => {
          const isActive = (role.id === 'all' && selectedRole === '') || selectedRole === role.id;

          return (
            <motion.button
              key={role.id}
              onClick={() => setSelectedRole(role.id === 'all' ? '' : role.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center relative overflow-hidden ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50'
                  : 'glass text-gray-300 hover:bg-gray-600 border border-gray-600'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeRole"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 mr-2">{role.icon}</span>
              <span className="relative z-10">{role.name}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}