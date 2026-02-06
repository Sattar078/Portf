import React, { useState, useEffect } from "react";
import { Sparkles, X } from "lucide-react";
import Navbar from "../components/Navbar";

const MySkills = () => {
  const [customSkills, setCustomSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: "", percentage: "", proficiency: "Beginner" });

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem("mySkills")) || [];
    setCustomSkills(storedSkills);
  }, []);

  const staticSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 70 },
  ];

  const allSkills = [...staticSkills, ...customSkills];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const skillToAdd = {
      name: newSkill.name,
      level: parseInt(newSkill.percentage),
      proficiency: newSkill.proficiency
    };
    const updatedSkills = [...customSkills, skillToAdd];
    setCustomSkills(updatedSkills);
    localStorage.setItem("mySkills", JSON.stringify(updatedSkills));
    setIsModalOpen(false);
    setNewSkill({ name: "", percentage: "", proficiency: "Beginner" });
  };

  const handleAuth = () => {
    const password = prompt("Enter Admin Password:");
    if (password === "Sattar#2007") {
      setIsModalOpen(true);
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-950 text-slate-300">
      <Navbar />

      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-6 py-32 max-w-6xl mx-auto">

        {/* ===== Header ===== */}
        <div className="text-center mb-20">
          <span className="inline-block text-blue-500 text-xs font-black tracking-[0.4em] uppercase mb-4">
            Skills
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            MY <span className="text-blue-500">EXPERTISE</span>
          </h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
            A modern frontend skillset focused on clean architecture,
            performance, and production-ready user interfaces.
          </p>
        </div>

        {/* ===== Skills Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-slate-950/70 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-500/50 transition-all group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-blue-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {skill.name}
                    </h3>
                    {skill.proficiency && <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{skill.proficiency}</p>}
                  </div>
                  <span className="text-blue-400 font-black text-sm">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-blue-500 to-indigo-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          {/* ===== Git & GitHub Card ===== */}
          <div className="relative bg-slate-950/70 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-500/50 transition-all group md:col-span-2">
            <div className="absolute -inset-1 bg-blue-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Git & GitHub
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Production-level experience with Git workflows, branching
                strategies, pull requests, issue tracking, code reviews,
                and collaborative development using GitHub.
              </p>
            </div>
          </div>

        </div>

        {/* Add Future Skill Button */}
        <div className="mt-16 flex justify-center">
          <button onClick={handleAuth} className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all text-xs font-bold tracking-widest uppercase cursor-pointer">
            <Sparkles size={16} className="text-blue-500" />
            Add New Skill
          </button>
        </div>
      </section>

      <footer className="relative z-10 py-5 px-10 border-t border-gray-800 text-center mt-10">
        ALL Rights Reserved © {new Date().getFullYear()} Sattar Kureshi
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-slate-900 border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl z-10">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                  <X size={24} />
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-6">Add New Skill</h2>
              
              <form onSubmit={handleAddSkill} className="space-y-4">
                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Skill Name</label>
                      <input 
                          type="text" 
                          name="name"
                          value={newSkill.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="e.g. React Native"
                          required
                      />
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Proficiency</label>
                      <select 
                          name="proficiency"
                          value={newSkill.proficiency}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                      >
                          <option value="Beginner">Beginner</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Advanced">Advanced</option>
                          <option value="Pro">Pro</option>
                      </select>
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Percentage (%)</label>
                      <input 
                          type="number" 
                          name="percentage"
                          value={newSkill.percentage}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="0-100"
                          min="0"
                          max="100"
                          required
                      />
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all mt-4 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1">
                      Save Skill
                  </button>
              </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySkills;
