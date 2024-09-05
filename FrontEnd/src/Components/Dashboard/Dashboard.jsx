import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  
  const crimeData = {
    totalCases: 350,
    zones: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
    cases: [150, 80, 60, 30, 20],
  };

  const topCities = [
    { name: 'City A', crimes: 120 },
    { name: 'City B', crimes: 110 },
    { name: 'City C', crimes: 105 },
    { name: 'City D', crimes: 100 },
    { name: 'City E', crimes: 95 },
    { name: 'City F', crimes: 90 },
    { name: 'City G', crimes: 85 },
    { name: 'City H', crimes: 80 },
    { name: 'City I', crimes: 75 },
    { name: 'City J', crimes: 70 },
  ];

  const leastCities = [
    { name: 'City K', crimes: 10 },
    { name: 'City L', crimes: 15 },
    { name: 'City M', crimes: 20 },
    { name: 'City N', crimes: 25 },
    { name: 'City O', crimes: 30 },
    { name: 'City P', crimes: 35 },
    { name: 'City Q', crimes: 40 },
    { name: 'City R', crimes: 45 },
    { name: 'City S', crimes: 50 },
    { name: 'City T', crimes: 55 },
  ];

  
  const liveCount = crimeData.totalCases;
  let color;
  if (liveCount > 500) color = 'bg-red-500';
  else if (liveCount > 250) color = 'bg-yellow-500';
  else color = 'bg-green-500';


  const graphData = {
    labels: crimeData.zones,
    datasets: [
      {
        label: 'Number of Cases',
        data: crimeData.cases,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      {/* Live Count of Crime Cases */}
      <div className={`p-4 rounded-lg ${color} text-white`}>
        <h2 className="text-xl font-bold">Live Count of Crime Cases</h2>
        <p className="text-2xl">{liveCount}</p>
      </div>


        <div className='flex justify-evenly p-2 '>

        
      {/* Top 10 Cities with More Crimes */}
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">Top 10 Cities with More Crimes (Last 1 Month)</h2>
        <ul className="list-disc pl-5 mt-2">
          {topCities.map((city, index) => (
            <li key={index} className="text-lg">{city.name} - {city.crimes} cases</li>
          ))}
        </ul>
      </div>

      {/* Top 10 Cities with Minimum Crime Cases */}
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">Top 10 Cities with Minimum Crime Cases</h2>
        <ul className="list-disc pl-5 mt-2">
          {leastCities.map((city, index) => (
            <li key={index} className="text-lg">{city.name} - {city.crimes} cases</li>
          ))}
        </ul>
      </div>

      </div>
      {/* Graph Highlighting Red Zones */}
      <div className="p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">Crime Cases by Zone</h2>
        <Bar data={graphData} options={{ maintainAspectRatio: true }} />
      </div>
    </div>
  );
};

export default Dashboard;

