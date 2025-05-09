import React from 'react';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from '../AnimatedRoutes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <AnimatedRoutes/>
      <Footer/>
    </Router>
  );
};

export default App;