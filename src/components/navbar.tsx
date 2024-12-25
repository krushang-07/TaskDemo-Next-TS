import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-6 bg-gray-100 p-4 rounded-lg shadow-md">
      <Link
        href="/"
        className="text-gray-700 font-semibold hover:text-blue-900 transition duration-300"
      >
        All
      </Link>
      <Link
        href="/?todos=active"
        className="text-gray-700 font-semibold hover:text-blue-900 transition duration-300"
      >
        Active
      </Link>
      <Link
        href="/?todos=completed"
        className="text-gray-700 font-semibold hover:text-blue-900 transition duration-300"
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
