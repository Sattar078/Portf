import React from 'react'

const section2 = () => {
  return (
    <div className='h-screen w-full'> 
     <section className="relative py-28 px-6 overflow-hidden">

    <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <span className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
          ABOUT ME
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          Building modern web experiences <br />
          <span className="text-blue-500">with clean code & creativity</span>
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Hi, I’m <span className="text-white font-semibold">Sattar Kureshi</span>,
          a frontend-focused web developer passionate about crafting fast,
          scalable, and visually engaging web applications.
        </p>

        <p className="text-slate-500 text-base leading-relaxed mb-10">
          I enjoy working with modern technologies like React, Tailwind CSS, and
          JavaScript to transform ideas into interactive digital products. My
          goal is to build interfaces that not only look good but also feel
          intuitive and performant.
        </p>

        {/* INFO ROW */}
        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">📍</span> India
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">🎓</span> Computer Science Student
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">💻</span> Frontend Developer
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="relative">
        <div className="absolute -inset-6 bg-linear-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 blur-3xl rounded-3xl" />
        
        <div className="relative bg-slate-950/70 backdrop-blur-2xl border border-white/10 rounded-3xl p-10">
          <h3 className="text-white text-2xl font-bold mb-6">
            What I Focus On
          </h3>

          <ul className="space-y-4 text-slate-400">
            <li>⚡ High-performance & responsive UIs</li>
            <li>🎨 Clean design with modern aesthetics</li>
            <li>🧠 Component-based architecture</li>
            <li>🔐 API integration & authentication</li>
            <li>🚀 Continuous learning & improvement</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default section2