import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../../assets/joeyimg.JPG';
import './about.css'

const pageVariants = {
  initial: {
    x: "100vw",
    opacity: 0
  },
  in: {
    x: 0,
    opacity: 1
  },
  out: {
    x: "-100vw",
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.6
};

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page"
    >
      <div className="about-header">
        <h1>About Me</h1>
        <p>Here's a quick look at who I am and what I do.</p>
      </div>

      <div className="about-columns">
        <div className="about-column">
          <img src={profilePic} alt="Joseph Lash" className="about-image" />
          <h3>Joseph Lash</h3>
          <p>Bachelor's of Science in Computer Science, Software Engineering</p>
          <p>Liberty University</p>
          <p>Graduating 2026</p> 
        </div>

        <div className="about-column">
          <h2>Narrative</h2>
          <p>
            I am currently pursuing my B.S. in computer science, with a cognate in software engineering, at Liberty University. I plan to graduate in May of 2026 and look forward to leaving a positive impact wherever I end up working.
          </p>
          <p>
            In my free time, I play tennis on my University's club tennis team, and also do photography. You can find my photography Instagram linked on this page.
          </p>
        </div>

        <div className="about-column">
          <h2>Skills</h2>
          <ul>
            <li>C++, C, Python, SQL, R</li>
            <li>x86 Assembly</li>
            <li>Operating Systems</li>
            <li>Data Structures and Algorithms</li>
            <li>React.js</li>
            <li>HTML, CSS, and JavaScript</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;