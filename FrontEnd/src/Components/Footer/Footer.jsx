import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Women Safety. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mb-2">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        </div>
        <p className="text-sm">
          If you need immediate help, please call emergency services or contact local authorities.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
