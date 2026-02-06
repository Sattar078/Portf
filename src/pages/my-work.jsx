import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Layout,
  Gamepad2,
  Atom,
  Layers,
  ChevronRight,
  Monitor,
  Zap,
  Globe,
  Sparkles,
  Trash2,
} from "lucide-react";
import Navbar from "../components/Navbar";


/**
 * MyWork — Single Page Portfolio (Fog Theme)
 * Stack: React + Tailwind + Framer Motion
 */

const MyWork = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [customProjects, setCustomProjects] = useState([]);
  const [deletedStaticIds, setDeletedStaticIds] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("myProjects")) || [];
    setCustomProjects(storedProjects);
    const storedDeletedIds = JSON.parse(localStorage.getItem("deletedStaticIds")) || [];
    setDeletedStaticIds(storedDeletedIds);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Nexus Dashboard",
      type: "react",
      category: "React Application",
      desc: "High-performance analytics dashboard with real-time sync and advanced state handling.",
      icon: <Atom />,
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Streamline SaaS",
      type: "react",
      category: "React Application",
      desc: "Modular SaaS project management platform focused on scalability and UX.",
      icon: <Zap />,
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Vanguard Landing",
      type: "html-css",
      category: "HTML & CSS",
      desc: "Pixel-perfect marketing site using advanced CSS Grid & Flexbox.",
      icon: <Layout />,
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Pure Portfolio",
      type: "html-css",
      category: "HTML & CSS",
      desc: "Minimal portfolio focused on typography and semantic HTML.",
      icon: <Monitor />,
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "EcoSphere Concept",
      type: "html-css",
      category: "HTML & CSS",
      desc: "Experimental UI with smooth transitions and SVG animations.",
      icon: <Globe />,
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Titan Corporate",
      type: "html-css",
      category: "HTML & CSS",
      desc: "Corporate multi-page template with mobile-first performance focus.",
      icon: <Layers />,
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Void Runner",
      type: "game",
      category: "Web Game",
      desc: "Fast-paced JavaScript game with collision logic and score tracking.",
      icon: <Gamepad2 />,
      link: "#",
      github: "#",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const allProjects = [
    ...customProjects.map((p) => ({ ...p, icon: <Code2 /> })),
    ...projects.filter((p) => !deletedStaticIds.includes(p.id)),
  ];

  const filteredProjects =
    filter === "all" ? allProjects : allProjects.filter((p) => p.type === filter);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  };

  const handleAddProject = () => {
    const password = prompt("Enter Admin Password:");
    if (password === "Sattar#2007") {
      navigate("/add-project");
    } else {
      alert("Incorrect Password!");
    }
  };

  const handleDeleteProject = (id) => {
    const password = prompt("Enter Admin Password:");
    if (password === "Sattar#2007") {
      const isCustom = customProjects.some((p) => p.id === id);
      if (isCustom) {
        const updatedProjects = customProjects.filter((p) => p.id !== id);
        setCustomProjects(updatedProjects);
        localStorage.setItem("myProjects", JSON.stringify(updatedProjects));
      } else {
        const updatedDeletedIds = [...deletedStaticIds, id];
        setDeletedStaticIds(updatedDeletedIds);
        localStorage.setItem("deletedStaticIds", JSON.stringify(updatedDeletedIds));
      }
    } else {
      alert("Incorrect Password!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-slate-300 overflow-x-hidden">
      <Navbar />

      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10">
        {/* ================= HEADER ================= */}
        <section className="pt-32 pb-20 text-center max-w-6xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mt-8 mb-6 tracking-tighter">
            𝕡𝕣𝕠𝕛𝕖𝕔𝕥 <span className="text-blue-500">ARCHIVE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg">
            A curated collection of applications, experiments, and interactive
            experiences built with modern web technologies.
          </p>

          {/* FILTER */}
          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            {["all", "react", "html-css", "game"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition ${
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "text-slate-500 hover:text-blue-500"
                }`}
              >
                {cat.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Add Future Project Button */}
          <div className="mt-10 flex justify-center">
            <button onClick={handleAddProject} className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 border border-white/10 text-slate-300 hover:bg-slate-700 hover:text-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] text-xs font-bold tracking-widest uppercase cursor-pointer relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
              <Sparkles size={16} className="text-blue-500" />
              Add Future Project
            </button>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="pb-32 px-6 max-w-7xl mx-auto">
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="visible"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVars}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -10 }}
                  className="bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition group"
                >
                  <div className="relative aspect-4/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                    />
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="absolute top-4 right-4 p-2 bg-red-600/80 text-white rounded-full hover:bg-red-700 transition opacity-0 group-hover:opacity-100 cursor-pointer backdrop-blur-sm"
                      title="Delete Project"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600/20 text-blue-500 rounded-xl">
                        {React.cloneElement(project.icon, { size: 22 })}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 mb-8 flex-1">
                      {project.desc}
                    </p>

                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                      <div className="flex gap-4">
                        <a href={project.github}>
                          <Github className="hover:text-blue-400" />
                        </a>
                        <a href={project.link}>
                          <ExternalLink className="hover:text-blue-400" />
                        </a>
                      </div>
                      <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">
                        Explore <ChevronRight size={14} className="inline" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="py-5 px-10 border-t border-gray-800 text-center mt-10">
          ALL Rights Reserved © {new Date().getFullYear()} Sattar Kureshi
        </footer>
      </main>
    </div>
  );
};

export default MyWork;
