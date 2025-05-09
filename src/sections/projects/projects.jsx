import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import project1 from '../../assets/joeywebsite.png';
import project2 from '../../assets/knightknight.png';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    image: project1,
    description: 'Personal portfolio built with React and Framer Motion (the website you are viewing right now).',
  },
  {
    id: 2,
    title: 'Knight Knight',
    image: project2,
    description: '2D pixel platformer game made in Unity. (Work in Progress)',
  },
];

const pageVariants = {
  initial: { x: '100vw', opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: '-100vw', opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.6,
};

const Projects = () => {
  return (
    <motion.div
      className="projects-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;