import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 border-orange-500 mb-4 border-2 rounded-b-xl ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Rakshak</Link>
        </div>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
          <Link to="/signup" className="hover:text-yellow-400">Signup</Link>
          <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
          <Link to="/activity-view" className="hover:text-yellow-400">Real-Time View</Link>
          <Link to="/notifications" className="hover:text-yellow-400">Notifications</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
