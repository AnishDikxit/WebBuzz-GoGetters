import React from 'react';
import { Link } from 'react-router-dom';
import cricketLogo from '../assets/cricket-background.jpg'; // Example path to cricket logo

const Header = () => {
  return (
    <header className="bg-green-600 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src={cricketLogo} alt="Cricket Logo" className="h-10 w-10 mr-2" />
        <div className="text-xl font-bold">XYZ Cricket</div>
      </div>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/register" className="mx-2">Register</Link>
      </nav>
    </header>
  );
};

export default Header;