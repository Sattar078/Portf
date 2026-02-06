import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contactpage from "./pages/Contactpage";
import About from "./pages/About";
import MyWork from "./pages/my-work";
import MySkills from "./pages/MySkills";
import AddProject from "./pages/AddProject";
import AddSkill from "./pages/AddSkill";

// Main App Component
function App() {
  return (
    // Router Setup
    <BrowserRouter>
      
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyWork" element={<MyWork />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/add-skill" element={<AddSkill />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;