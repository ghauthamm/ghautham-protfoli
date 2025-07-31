import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ghauthamm',
      icon: Github,
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      href: ' https://www.linkedin.com/in/ghautham-m-250b80266/',
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ghautham',
      icon: Twitter,
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    },
    {
      name: 'Email',
      href: 'ghauthamm@gmail.com',
      icon: Mail,
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
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

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Ghautham</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A passionate fullstack developer dedicated to creating innovative web solutions 
              and turning ideas into reality through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 ${link.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>ghauthamms@example.com</p>
              <p>+1 (91)7339010563</p>
              <p>Erode, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-dark-700 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ghautham. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Ghautham
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 