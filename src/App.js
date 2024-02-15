import React from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Routes, Route } from 'react-router-dom'
import Skills from "./routes/Skills";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/project' element={<Project />} />
      <Route path='/skills' element={<Skills />} />
    </Routes>
  );
}

export default App;
