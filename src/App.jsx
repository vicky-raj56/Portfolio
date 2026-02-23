import React, { useState } from "react";
// import "./App.css"

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contect from "./pages/Contect";
import ProjectCards from "./components/ProjectCards";
import Navrbar from "./components/Navrbar";
import Footer from "./components/Footer";
import TechSkills from "./components/TechSkills";

function App() {
  const [theame, setTheame] = useState(true);
  return (
    <div>
      {/* <Navrbar  /> */}
      <Navrbar theame={theame} setTheame={setTheame} />

      <Routes>
        <Route
          path="/"
          element={<Home theame={theame} setTheame={setTheame} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectCards />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/tools" element={<TechSkills />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
