import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddSkill = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    level: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      name: formData.name,
      level: parseInt(formData.level, 10),
    };

    const existingSkills = JSON.parse(localStorage.getItem("mySkills")) || [];
    localStorage.setItem("mySkills", JSON.stringify([...existingSkills, newSkill]));
    navigate("/skills");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-slate-300 overflow-x-hidden font-sans selection:bg-blue-600/30 selection:text-white">
      <Navbar />

      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 text-center tracking-tight">
          Add New <span className="text-blue-500">Skill</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          
          {/* Skill Name */}
          <div>
            <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Skill Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. TypeScript" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600" 
            />
          </div>

          {/* Proficiency Level */}
          <div>
            <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Proficiency Level (%)</label>
            <input 
              type="number" 
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
              min="0"
              max="100"
              placeholder="e.g. 85" 
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600" 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 mt-4"
          >
            Add Skill
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddSkill;