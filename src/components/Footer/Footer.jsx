import React from 'react';
import './footer.css';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Joseph Lash. All rights reserved.</p>

      {/* Mobile icons */}
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:youremail@example.com"><FaEnvelope /></a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;