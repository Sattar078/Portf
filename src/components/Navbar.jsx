import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Cpu, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = "flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-white/10 text-slate-300 hover:bg-slate-700 hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-[10px] font-bold tracking-widest uppercase cursor-pointer relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-full";

  return (
    <nav className="bg-gray-800/50 text-white px-6 py-4 font-sans flex justify-between items-center rounded-4xl dynamic-height fixed top-2.5 left-1/2 -translate-x-1/2 w-[95%] z-50 backdrop-blur-sm border-b border-white/10">
      <h1 className="text-2xl md:text-5xl font-bold text-blue-500 ">ρⱺ𝗋𝗍𝖿ⱺᥣ𝗂ⱺ</h1>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
         <Link to="/" className={navLinkStyle}>
            <Home size={14} className="text-blue-500" /> Home
         </Link>
        <Link to="/About" className={navLinkStyle}>
            <User size={14} className="text-blue-500" /> About
        </Link>
        <Link to="/skills" className={navLinkStyle}>
            <Cpu size={14} className="text-blue-500" /> Skills
        </Link>
         <Link to="/MyWork" className={navLinkStyle}>
            <Briefcase size={14} className="text-blue-500" /> My Work
         </Link>
          <Link to="/contact" className={navLinkStyle}>
            <Mail size={14} className="text-blue-500" /> Contact
          </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-white/10 rounded-b-2xl p-4 flex flex-col space-y-4 md:hidden mt-2">
           <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 hover:text-black bg-blue-600 p-2 rounded-lg text-center"><Home size={18} /> Home</Link>
           <Link to="/About" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 hover:text-black bg-blue-600 p-2 rounded-lg text-center"><User size={18} /> About</Link>
           <Link to="/skills" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 hover:text-black bg-blue-600 p-2 rounded-lg text-center"><Cpu size={18} /> Skills</Link>
           <Link to="/MyWork" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 hover:text-black bg-blue-600 p-2 rounded-lg text-center"><Briefcase size={18} /> My Work</Link>
           <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 hover:text-black bg-blue-600 p-2 rounded-lg text-center"><Mail size={18} /> Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;