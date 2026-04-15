import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar />
      <motion.main variants={pageVariants} initial="hidden" animate="visible">
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Services />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Education />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;