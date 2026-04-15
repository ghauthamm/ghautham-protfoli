import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
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
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 4;
      });
    }, 50);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
            className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
                className="w-16 h-16 rounded-full border-4 border-cyan-400/30 border-t-cyan-300"
              />
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-6 text-2xl font-bold text-white tracking-wide"
              >
                Ghautham Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-2 text-sm text-slate-300"
              >
                Loading {loadingProgress}%
              </motion.p>
              <div className="w-52 h-1 rounded-full bg-white/10 mt-4 overflow-hidden">
                <motion.div
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          style={{ scaleX: progress }}
          className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500"
        />
      )}
      <Navbar />
      <motion.main variants={pageVariants} initial="hidden" animate="visible">
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Hero />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Services />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Experience />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Education />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;