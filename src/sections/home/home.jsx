import React from 'react';
import { motion } from 'framer-motion';
import './home.css'

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

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page"
    >
      <div className="home-intro">
        <h1>Hi, I'm Joseph Lash!</h1>
        <p>Thank you for visiting this website! This website showcases me, my skills, and my journey as a developer. I'm excited for the future!</p>
      </div>

      <div className="home-columns">
        <div className="column">
          <h2>Who I Am</h2>
          <p>I am a developer and an avid problem solver. My variety of experiences has shaped me into a well-rounded individual. I love building relationships and am committed to connecting with everyone on my team.</p>
        </div>

        <div className="column">
          <h2>Let's Explore</h2>
          <p>Dive into my work, learn about my process, and feel free to reach out. I'm always open to collaboration!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;