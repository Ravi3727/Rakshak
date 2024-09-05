import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          Welcome to Women Safety, a dedicated platform designed to enhance safety and provide support for women in our community. Our mission is to create a safer environment by offering real-time information, resources, and a support network to those in need.
        </p>
        <p className="text-lg mb-4">
          We are a team of passionate individuals committed to using technology to make a positive impact. Our platform provides up-to-date information on safety concerns and helps connect individuals with necessary resources and support.
        </p>
        <p className="text-lg">
          Our vision is to empower women and foster a community where everyone can feel secure. Thank you for being a part of our mission. Together, we can make a difference.
        </p>
      </div>
    </div>
  );
}

export default About;
