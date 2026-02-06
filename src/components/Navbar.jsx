import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800/50 text-white px-6 py-4 font-sans flex justify-between items-center rounded-4xl dynamic-height fixed top-2.5 left-1/2 -translate-x-1/2 w-[95%] z-50 backdrop-blur-sm border-b border-white/10">
      <h1 className="text-5xl font-bold text-blue-500 ">ρⱺ𝗋𝗍𝖿ⱺᥣ𝗂ⱺ</h1>
      <div className="space-x-4">
         <Link to="/" className="hover:text-black bg-blue-600 p-1 rounded-lg dynamic-width inline-block text-center">Home</Link>
        <Link to="/About" className="hover:text-black bg-blue-600 p-1 rounded-lg dynamic-width inline-block text-center">About</Link>
        <Link to="/skills" className="hover:text-black bg-blue-600 p-1 rounded-lg dynamic-width inline-block text-center">Skills</Link>
         <Link to="/MyWork" className="hover:text-black bg-blue-600 p-1 rounded-lg dynamic-width inline-block text-center">My Work</Link>
          <Link to="/contact" className="hover:text-black bg-blue-600 p-1 rounded-lg dynamic-width inline-block text-center">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;