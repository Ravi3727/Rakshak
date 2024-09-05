import React from 'react';

// Generate random data for helped people
const generateRandomHelpedPeople = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack'];
  return names.map((name, index) => ({
    id: index,
    name: name,
    location: `Location ${index + 1}`,
  }));
};

const UserProfile = () => {
  const userProfile = {
    name: 'Ravi',
    contact: 'ravi@example.com',
    address: '123 Kashmiri Gate, Delhi, India',
    helpCount: 10,
    totalRewards: 1200,
    rewardsLastMonth: 150,
  };

  // List of people the user has helped
  const helpedPeople = generateRandomHelpedPeople();

  return (
    <div className="p-6 max-w-4xl mt-16 mx-auto rounded-lg shadow-md" style={{ backgroundColor: 'rgb(31 41 55)' }}>
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 rounded-full flex items-center bg-gray-200 justify-center text-4xl font-bold text-gray-500">
          {userProfile.name[0]}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">{userProfile.name}</h1>
          <p className="text-lg text-gray-300">{userProfile.contact}</p>
          <p className="text-md text-gray-300">{userProfile.address}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-6 space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Help Given</h2>
          <p className="text-lg">{userProfile.helpCount} people helped</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Total Rewards</h2>
          <p className="text-lg">{userProfile.totalRewards}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Rewards Last Month</h2>
          <p className="text-lg">{userProfile.rewardsLastMonth}</p>
        </div>
      </div>

      {/* Helped People List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">People Helped</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {helpedPeople.map((person) => (
            <div key={person.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-600">Location: {person.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
