import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 dark:bg-primary-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse animation-delay-4000"></div>
        {/* Extra orb for dark mode depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 dark:bg-blue-600/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] dark:opacity-20 opacity-40"></div>

      <div className="container-custom relative z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            Available for opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="gradient-text">Ghautham M</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6"
          >
            Fullstack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build exceptional digital experiences that combine beautiful design with powerful functionality.
            Passionate about creating innovative web solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/25"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.button>
            <motion.a
              href="/ghautham_resume.pdf"
              download="Ghautham_M_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-xl transition-all duration-300 bg-white/50 dark:bg-white/5 backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;