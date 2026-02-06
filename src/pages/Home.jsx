import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

// Home Component
const Home = () => {
  return (
    // Main Container
    <div className="min-h-screen w-full overflow-x-hidden text-center bg-gray-950 relative" >
      {/* Global Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <Hero />
    
       {/* Footer Section */}
       <footer className="py-5 px-10 border-t border-gray-800 text-center mt-10">
         ALL Rights Reserved © {new Date().getFullYear()} Sattar Kureshi
      </footer>
    </div>
    </div>
  );
};

export default Home;