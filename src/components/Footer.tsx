import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ghauthamm', icon: Github, hoverBg: 'hover:bg-gray-700' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ghautham-m-250b80266/', icon: Linkedin, hoverBg: 'hover:bg-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com/ghautham', icon: Twitter, hoverBg: 'hover:bg-sky-500' },
    { name: 'Email', href: 'mailto:ghauthamm@gmail.com', icon: Mail, hoverBg: 'hover:bg-red-500' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white relative border-t border-gray-800 dark:border-gray-700/50 overflow-hidden">
      {/* Animated gradient line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['0% 50%', '200% 50%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Back to Top Button */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.2, y: -5, boxShadow: '0 15px 30px rgba(37, 99, 235, 0.4)' }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-10 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Ghautham
            </motion.h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              A passionate fullstack developer dedicated to creating innovative web solutions
              and turning ideas into reality through code.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                  className={`p-2.5 rounded-xl bg-gray-800 dark:bg-dark-700 transition-all duration-300 text-gray-400 hover:text-white ${link.hoverBg}`}
                  whileHover={{ scale: 1.15, y: -5, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 8 }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-left text-sm flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary-400 transition-colors duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              {[
                { icon: Mail, text: 'ghauthamm@gmail.com' },
                { icon: Github, text: '+91 7339010563' },
                { icon: Linkedin, text: 'Erode, India' },
              ].map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, color: '#93c5fd' }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <item.icon className="w-4 h-4 text-primary-400" />
                  {item.text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 dark:border-gray-700/50 mt-10 pt-8 origin-left"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {currentYear} Ghautham. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm flex items-center mt-2 md:mt-0"
            >
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                className="inline-flex mx-1.5"
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.span>
              {' '}by Ghautham
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;