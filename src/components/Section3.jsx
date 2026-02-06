import React from 'react'

const section3 = () => {
return (
  <section className="relative py-28 px-6 overflow-hidden">

    {/* Background Glows */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-700/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
    </div>

    <div className="relative max-w-6xl mx-auto z-10">
      {/* SECTION TITLE */}
      <div className="mb-20 text-center">
        <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">
          My Skills
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-4">
          Technologies I Work With
        </h2>
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          A focused set of modern web technologies that I use to build
          scalable, high-performance, production-ready applications.
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="relative">
        <div className="absolute -inset-6 bg-linear-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 blur-3xl rounded-3xl" />
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* SKILL CARD */}
        <div className="relative group rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
          <div className="absolute -inset-4 bg-blue-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between mb-3">
              <span className="text-white font-semibold">HTML</span>
              <span className="text-slate-400">90%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative group rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
          <div className="absolute -inset-4 bg-indigo-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between mb-3">
              <span className="text-white font-semibold">CSS</span>
              <span className="text-slate-400">70%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-indigo-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative group rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
          <div className="absolute -inset-4 bg-yellow-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between mb-3">
              <span className="text-white font-semibold">JavaScript</span>
              <span className="text-slate-400">90%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-yellow-400 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative group rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
          <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between mb-3">
              <span className="text-white font-semibold">React</span>
              <span className="text-slate-400">80%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-cyan-400 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative group rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
          <div className="absolute -inset-4 bg-teal-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between mb-3">
              <span className="text-white font-semibold">Tailwind CSS</span>
              <span className="text-slate-400">70%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-teal-400 rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative group rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
          <div className="absolute -inset-4 bg-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="flex justify-between mb-3">
              <span className="text-white font-semibold">Git & GitHub</span>
              <span className="text-slate-400">Production Level</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-full bg-purple-500 rounded-full" />
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </section>
);
}

export default section3