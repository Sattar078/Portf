import React, { useState, useEffect } from "react";
import {
  Cpu,
  MapPin,
  Mail,
  Calendar,
  Terminal,
  ChevronRight,
  Gamepad,
  Music,
  Camera,
  Award,
  Sparkles,
  X,
  Github,
  Linkedin,
} from "lucide-react";
import Navbar from "../components/Navbar";

/* ----------------------------------
   Hackathon Data
-----------------------------------*/
const staticHackathons = [
  {
    name: "Abhikalp 2025",
    date: "June 2025",
    project: "AI sign language translator",
    desc: "Built a web app that analyzed sign language and translated it to text using AI and analyze speech and convert it to sign language.",
  },
  {
    name: "The Unstoppable Hackathon",
    date: "December 2025",
    project: "Open Source",
    desc: "Contribute Open Source and generate a lot of PR's and 5+ accepted .",
  },
  {
    name: "OpenHack",
    date: "Jun 2023",
    project: "Real-time Chat App",
    desc: "Implemented WebSocket-based real-time chat with authentication and user presence tracking.",
  },
];

const About = () => {
  const [certificates, setCertificates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCert, setNewCert] = useState({ name: "", issuer: "", date: "" });
  const [customHackathons, setCustomHackathons] = useState([]);
  const [isHackathonModalOpen, setIsHackathonModalOpen] = useState(false);
  const [newHackathon, setNewHackathon] = useState({ name: "", date: "", project: "", desc: "" });

  useEffect(() => {
    const storedCerts = JSON.parse(localStorage.getItem("myCertificates")) || [];
    setCertificates(storedCerts);
    const storedHackathons = JSON.parse(localStorage.getItem("myHackathons")) || [];
    setCustomHackathons(storedHackathons);
  }, []);

  const handleInputChange = (e) => {
    setNewCert({ ...newCert, [e.target.name]: e.target.value });
  };

  const handleAddCertificate = (e) => {
    e.preventDefault();
    const updatedCerts = [...certificates, newCert];
    setCertificates(updatedCerts);
    localStorage.setItem("myCertificates", JSON.stringify(updatedCerts));
    setIsModalOpen(false);
    setNewCert({ name: "", issuer: "", date: "" });
  };

  const handleHackathonInputChange = (e) => {
    setNewHackathon({ ...newHackathon, [e.target.name]: e.target.value });
  };

  const handleAddHackathon = (e) => {
    e.preventDefault();
    const updatedHackathons = [...customHackathons, newHackathon];
    setCustomHackathons(updatedHackathons);
    localStorage.setItem("myHackathons", JSON.stringify(updatedHackathons));
    setIsHackathonModalOpen(false);
    setNewHackathon({ name: "", date: "", project: "", desc: "" });
  };

  const allHackathons = [...staticHackathons, ...customHackathons];

  const handleAuth = (action) => {
    const password = prompt("Enter Admin Password:");
    if (password === "Sattar#2007") {
      action();
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-950 text-slate-300 font-sans selection:bg-blue-600/30 selection:text-white">
       <Navbar />
      
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10">

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mt-8 mb-6 tracking-tighter">
            I'm <span className="text-blue-500">Sattar Kureshi</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-xl font-bold uppercase tracking-widest">
            UI/UX Developer
          </p>
        </section>

        {/* Biography & Education */}
        <section className="py-20 px-6 bg-white/2 border-y border-white/5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Bio */}
            <div className="lg:col-span-7">
              <h2 className="text-blue-500 font-bold uppercase tracking-tighter text-sm mb-4">
                // Biography
              </h2>

              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                Solving problems one <span className="text-blue-400">commit</span> at a time.
              </h3>

              <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
                <p>
                  I’m a frontend-focused web developer who loves building fast,
                  clean, and scalable user interfaces using modern tools like
                  React and Tailwind CSS.
                </p>
                <p>
                  My interest in development started with simple web pages and
                  evolved into crafting full single-page applications with APIs
                  and authentication.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-950/20 border border-blue-900/20">
                  <MapPin size={20} className="text-blue-500" />
                  <span className="text-sm">Jaipur, Rajasthan, India</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-950/20 border border-blue-900/20">
                  <Mail size={20} className="text-blue-500" />
                  <span className="text-sm">sattaarkureshi87@example.com</span>
                </div>

                {/* GitHub Button */}
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-blue-950/20 border border-blue-900/20 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group cursor-pointer">
                  <Github size={20} className="text-blue-500 group-hover:text-white transition-colors" />
                  <span className="text-sm font-bold group-hover:text-white transition-colors">GitHub</span>
                </a>

                {/* LinkedIn Button */}
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-blue-950/20 border border-blue-900/20 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] group cursor-pointer">
                  <Linkedin size={20} className="text-blue-500 group-hover:text-white transition-colors" />
                  <span className="text-sm font-bold group-hover:text-white transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="lg:col-span-5">
              <h2 className="text-blue-500 font-bold uppercase tracking-tighter text-sm mb-6">
                // Academic Study
              </h2>

              <div className="relative pl-6 space-y-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-blue-900/30">
                <div className="relative">
                  <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-black" />
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-1">
                    <Calendar size={12} /> 2024 — Present
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    <h2>Bachelor of Technology</h2>
                    <span className="text-gray-500">(Computer Science)</span>
                  </h4>
                  <p className="text-blue-100/60 font-medium">
                    Government Engineering College, Jaipur
                    Rajasthan Technical Institute of Engineering (kota)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hackathons & Certificates */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Hackathons Column */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-4xl font-bold text-white">
                Hackathon Log
              </h3>
              <button onClick={() => handleAuth(() => setIsHackathonModalOpen(true))} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-white/10 text-slate-300 hover:bg-slate-700 hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-[10px] font-bold tracking-widest uppercase cursor-pointer relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
                <Sparkles size={14} className="text-blue-500" />
                Add Journey
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {allHackathons.map((hack, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-blue-600/10 text-blue-500">
                      <Terminal size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{hack.name}</h4>
                      <p className="text-blue-400 text-sm">{hack.project}</p>
                      <p className="text-slate-400 mt-2">{hack.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div>
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-4xl font-bold text-white">
                Certifications
              </h3>
              <button onClick={() => handleAuth(() => setIsModalOpen(true))} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-white/10 text-slate-300 hover:bg-slate-700 hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-[10px] font-bold tracking-widest uppercase cursor-pointer relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
                <Sparkles size={14} className="text-blue-500" />
                Add Certificate
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {certificates.map((cert, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-purple-600/10 text-purple-500">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                      <p className="text-purple-400 text-sm">{cert.issuer}</p>
                      <p className="text-slate-500 text-xs mt-2">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
              {certificates.length === 0 && (
                <div className="p-8 rounded-2xl bg-slate-900/30 border border-white/5 border-dashed text-center">
                  <p className="text-slate-500">No certificates added yet.</p>
                </div>
              )}
            </div>
          </div>

        </section>

        {/* Footer */}
        <footer className="py-5 px-10 border-t border-gray-800 text-center mt-10">
         ALL Rights Reserved © {new Date().getFullYear()} Sattar Kureshi
        </footer>

      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-slate-900 border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl z-10">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                  <X size={24} />
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-6">Add Certificate</h2>
              
              <form onSubmit={handleAddCertificate} className="space-y-4">
                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Certificate Name</label>
                      <input 
                          type="text" 
                          name="name"
                          value={newCert.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="e.g. AWS Certified Developer"
                          required
                      />
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Issuer</label>
                      <input 
                          type="text" 
                          name="issuer"
                          value={newCert.issuer}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="e.g. Amazon Web Services"
                          required
                      />
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Date</label>
                      <input 
                          type="text" 
                          name="date"
                          value={newCert.date}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="e.g. Dec 2023"
                          required
                      />
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all mt-4 border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:-translate-y-1 relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
                      Save Certificate
                  </button>
              </form>
          </div>
        </div>
      )}

      {/* Hackathon Modal */}
      {isHackathonModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsHackathonModalOpen(false)}></div>
          <div className="relative bg-slate-900 border border-white/10 p-8 rounded-3xl w-full max-w-md shadow-2xl z-10">
              <button onClick={() => setIsHackathonModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                  <X size={24} />
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-6">Add Hackathon Journey</h2>
              
              <form onSubmit={handleAddHackathon} className="space-y-4">
                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Hackathon Name</label>
                      <input 
                          type="text" 
                          name="name"
                          value={newHackathon.name}
                          onChange={handleHackathonInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="e.g. Smart India Hackathon"
                          required
                      />
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Date</label>
                      <input 
                          type="text" 
                          name="date"
                          value={newHackathon.date}
                          onChange={handleHackathonInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="e.g. Nov 2024"
                          required
                      />
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Project Name</label>
                      <input 
                          type="text" 
                          name="project"
                          value={newHackathon.project}
                          onChange={handleHackathonInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                          placeholder="e.g. AI Traffic Manager"
                          required
                      />
                  </div>

                  <div>
                      <label className="block text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">Description</label>
                      <textarea 
                          name="desc"
                          value={newHackathon.desc}
                          onChange={handleHackathonInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                          placeholder="Brief description of what you built..."
                          rows="3"
                          required
                      ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all mt-4 border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:-translate-y-1 relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
                      Save Journey
                  </button>
              </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
