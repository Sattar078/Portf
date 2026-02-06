import React from 'react'

const section4 = () => {
  // Icon URLs
  const arrow = "https://cdn-icons-png.flaticon.com/512/271/271228.png";
  const EMail = "https://cdn-icons-png.flaticon.com/128/9068/9068642.png";
  const Phone = "https://cdn-icons-png.flaticon.com/128/724/724664.png";

  return (
    <div className='min-h-screen w-full relative overflow-hidden'>
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-800/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">

      {/* Left Side: Contact Information Text */}
      <div className=" w-full text-left text-slate-300">
        <span className="font-bold">
          WE ARE HERE TO HELP YOU
        </span>
        <div className="text-4xl font-bold mb-4 text-white">DISCUSS YOUR <span className="text-blue-500">  WEBSITE</span> RELATED NEED</div>
        <span className="my-10 block">Are you looking for top-quality web-solutions tailored to your needs? reach out to us today and let's build something amazing together!</span>
        
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
      <div className="relative w-full h-full">
        <div className="absolute -inset-6 bg-linear-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 blur-3xl rounded-3xl" />
        <div className="relative w-full h-full text-center bg-gray-950 text-white rounded-3xl p-8 border border-white/10">
        <h1 className="text-2xl font-bold mb-4  text-blue-500"> Contact Form</h1>
        
        {/* Name Input */}
        <input type="text" placeholder="Enter your name" className="h-15 w-full px-4 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        
        {/* Email Input */}
        <input type="text" placeholder="Enter Your E-mail" className="h-15 w-full px-4 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4" />
        
        {/* Industry Selection */}
        <select name="industry" id="industry" className="h-15 w-full px-4 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4">
          <option value="">Select Industry</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
        </select>
        
        {/* Requirement Textarea */}
        <textarea name="Write Your Requirement" id="" className="w-full h-48 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4" placeholder="Write Your Requirement" rows="5"></textarea>
        
        {/* Submit Button */}
        <button className="bg-blue-500 text-white h-10 rounded-4xl flex items-center px-4 mt-4 hover:bg-blue-600 transition-colors duration-300 hover:text-white hover:shadow-lg ">
          <img src={arrow} alt="right arrow" className="w-5 h-5" /> 
        Get A Solution
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default section4