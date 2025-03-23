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
          {roles.map(role => (
            <button 
              key={role.id}
              onClick={() => setSelectedRole(role.id === 'all' ? '' : role.id)}
              className={`px-4 py-2 rounded-lg transition duration-200 flex items-center ${
                (role.id === 'all' && selectedRole === '') || selectedRole === role.id
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span className="mr-2">{role.icon}</span>
              {role.name}
            </button>
          ))}
        </div>
      </div>
    );
  }