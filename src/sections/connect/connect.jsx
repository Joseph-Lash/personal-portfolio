import React from 'react';
import { motion } from 'framer-motion';
import './connect.css';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

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

const Connect = () => {
  return (
    <motion.div
      className="connect-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="connect-title">Connect With Me</h1>
      <p className="connect-subtext">Feel free to reach out on any of these platforms:</p>
      <div className="connect-icons">
        <a href="https://www.linkedin.com/in/joeylash" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:joeylash57@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Joseph-Lash" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/joeylashphotography" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </motion.div>
  );
};

export default Connect;