import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './src/sections/home/home';
import About from './src/sections/about/about';
import Projects from './src/sections/projects/projects';
import Resume from './src/sections/resume/resume';
import Connect from './src/sections/connect/connect';


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;