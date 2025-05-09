import React from 'react';
import { motion } from 'framer-motion';
import './resume.css';
import resumeImage from '../../assets/resume.png';

const pageVariants = {
  initial: { x: '100vw', opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: '-100vw', opacity: 0 }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.6
};

const Resume = () => {
  return (
    <motion.div
      className="resume-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="resume-title">My Resume</h1>

      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">View Resume In New Tab</a>

      <div className="resume-container">
        <img src={resumeImage} alt="Joseph Lash Resume" className="resume-img" />
      </div>
    </motion.div>
  );
};

export default Resume;