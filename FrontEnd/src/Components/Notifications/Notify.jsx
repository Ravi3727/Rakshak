import React from 'react'


const generateRandomData = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack'];
  const ages = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
  return Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: names[index],
    age: ages[index],
    photo: `https://randomuser.me/api/portraits/med/men/${index + 1}.jpg`,
  }));
};
function Notify() {
  const users = generateRandomData();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">All Notifications</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {users.map((user) => (
        <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={user.photo}
            alt={user.name}
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">Age: {user.age}</p>
            <div className='flex w-10/12 justify-between p-2 mx-auto '>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => alert(`Location of ${user.name}`)}
            >
              See Location
            </button>

            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={() => alert(`Location of ${user.name}`)}
            >
              See Profile
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Notify