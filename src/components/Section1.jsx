import React from 'react'

const Section1 = () => {
  return (
    <div className='min-h-screen w-full relative flex items-center justify-center pt-20 lg:pt-0'>
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Content */}
        <div className="text-left space-y-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">Available for Work</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500">
                    Sattar Kureshi
                </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                A passionate Frontend Developer crafting modern, responsive, and high-performance web applications. I turn complex problems into elegant, user-centric digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
                <a href="/contact" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1">
                    Contact Me
                </a>
                <a href="/MyWork" className="px-8 py-4 rounded-full bg-transparent border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-bold transition-all hover:bg-blue-500/10 hover:-translate-y-1">
                    View Work
                </a>
            </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-3xl"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 via-indigo-500 to-transparent p-1 animate-spin" style={{animationDuration: '10s'}}></div>
                
                {/* Static Border & Image */}
                <div className="absolute inset-1 rounded-full bg-gray-950 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img 
                            src="public/bg.jpeg" 
                            alt="Sattar Kureshi" 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                        />
                    </div>
                </div>

                {/* Floating Skill Badges */}
                <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-gray-900/90 backdrop-blur-md border border-blue-500/30 p-3 rounded-xl shadow-lg">
                    <span className="text-blue-400 font-bold text-xs">React</span>
                </div>
                
                <div className="absolute bottom-10 -left-8 bg-gray-900/90 backdrop-blur-md border border-cyan-500/30 p-3 rounded-xl shadow-lg">
                    <span className="text-cyan-400 font-bold text-xs">Tailwind</span>
                </div>

                <div className="absolute top-10 -left-4 bg-gray-900/90 backdrop-blur-md border border-yellow-500/30 p-3 rounded-xl shadow-lg">
                    <span className="text-yellow-400 font-bold text-xs">JS</span>
                </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Section1