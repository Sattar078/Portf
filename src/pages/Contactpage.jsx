import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";

const Contactpage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Icon URLs
  const arrow = "https://cdn-icons-png.flaticon.com/512/271/271228.png";
  const EMail = "https://cdn-icons-png.flaticon.com/128/9068/9068642.png";
  const Phone = "https://cdn-icons-png.flaticon.com/128/724/724664.png";

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    // Main Container
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-950 text-slate-300">
      <Navbar />

       {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">

      {/* Left Side: Contact Information Text */}
      <div className=" w-full text-left">
        <span className="font-bold">
          WE ARE HERE TO HELP YOU
        </span>
        <div className="text-4xl font-bold mb-4">DISCUSS YOUR <span className="text-blue-500">  WEBSITE</span> RELATED NEED</div>
        <span className="my-10">Are you looking for top-quality web-solutions tailored to your needs? reach out to us today and let's build something amazing together!</span>
        
        {/* Email Section */}
        <div className="py-6 pb-0">
        <div className="font-bold flex gap-3 items-center mb-4">
          <img src={EMail} alt="mail" className="h-10 w-10" />
        <span> <h1>E-mail </h1>sattaarkureshi87@gmail.com </span>
        </div>
        </div>

        {/* Phone Section */}
        <div className="py-6">
        <div className="font-bold flex gap-3 items-center mb-4">
          <img src={Phone} alt="mail" className="h-10 w-10" />
        <span> <h1>Phone </h1>9079521298 </span>
        </div>
        </div>
        </div>

      {/* Right Side: Contact Form */}
      <div className=" w-full h-full text-center bg-gray-950 text-white rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4  text-blue-500"> Contact Form</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        {/* Name Input */}
        <input required type="text" placeholder="Enter your name" className="h-15 w-full px-4 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        
        {/* Email Input */}
        <input required type="email" placeholder="Enter Your E-mail" className="h-15 w-full px-4 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        
        {/* Industry Selection */}
        <select required name="industry" id="industry" className="h-15 w-full px-4 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Industry</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
        </select>
        
        {/* Requirement Textarea */}
        <textarea required name="Write Your Requirement" id="" className="w-full h-48 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write Your Requirement" rows="5"></textarea>
        
        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white h-10 rounded-4xl flex items-center justify-center px-4 hover:bg-blue-600 transition-colors duration-300 hover:text-white hover:shadow-lg cursor-pointer">
          <img src={arrow} alt="right arrow" className="w-5 h-5 mr-2" /> 
        Get A Solution
        </button>
        </form>
      </div>
    </div>

    <footer className="relative z-10 py-5 px-10 border-t border-gray-800 text-center mt-10">
      ALL Rights Reserved © {new Date().getFullYear()} Sattar Kureshi
    </footer>

    {/* Success Popup */}
    {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div className="relative bg-slate-900 border border-blue-500/30 p-8 rounded-3xl w-full max-w-md shadow-2xl text-center transform transition-all scale-100">
                <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                <p className="text-slate-300 mb-6">
                    Thank you for contacting. Sattar Kureshi will respond to you soon. <br />
                    Best wishes for your day!
                </p>
                <p className="text-xs text-blue-400 animate-pulse">Redirecting to Home...</p>
            </div>
        </div>
    )}
    </div>
  );
};

export default Contactpage;