import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronRight, Download } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Vehicle Service Management System",
      description: "Developed a booking and service tracking system with a structured database for customer and service records, including real-time service status updates.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Realtime Updates"],
      liveUrl: "https://github.com/ghauthamm",
      githubUrl: "https://github.com/ghauthamm/Vehicle-Service-Management-System",
      featured: true,
      category: 'fullstack'
    },
    {
      title: "AI-Powered Crop Yield Prediction",
      description: "Built a mobile app using Flutter and Firebase, integrated machine learning models for crop prediction, and delivered insights based on soil and weather data.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Python", "Machine Learning", "Data Analysis"],
      liveUrl: "https://github.com/ghauthamm",
      apkUrl: "https://github.com/ghauthamm",
      githubUrl: "https://github.com/ghauthamm",
      featured: true,
      category: 'ml'
    },
    {
      title: "Samy Trends - Online Clothing Store",
      description: "A full-stack e-commerce web application for managing clothing products where users can browse products, view details, and interact with a modern shopping interface. Features include responsive product listings, product detail view, real-time data handling with Firebase, and Firebase Hosting deployment. My contribution covered complete UI design and development, backend and database integration, deployment, and responsive optimization across devices. Future enhancements: add to cart and checkout, payment integration (Razorpay/Stripe), authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Firebase", "Firestore", "Firebase Hosting"],
      liveUrl: "https://samy-trend.web.app/",
      githubUrl: "https://github.com/ghauthamm",
      featured: true,
      category: 'fullstack'
    },
    {
      title: "Food Delivery Management System",
      description: "A mobile-based food delivery management system built with Flutter and Firebase to manage employees, clients, orders, and inventory in real time. It automates order tracking and stock updates, supports employee attendance and role records, maintains customer profiles with order history, and provides order lifecycle tracking from pending to delivered. Contributions include end-to-end mobile app development, Firebase real-time synchronization, implementation of employee, client, order, and stock modules, and responsive UI optimization. Future enhancements include payment integration, push notifications, live map tracking, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Cloud Firestore", "Realtime Database", "Firebase Auth"],
      liveUrl: "https://github.com/ghauthamm/Food-Catering-Admin-Management-System-flutter",
      apkUrl: "https://github.com/ghauthamm/Food-Catering-Admin-Management-System-flutter",
      githubUrl: "https://github.com/ghauthamm/Food-Catering-Admin-Management-System-flutter",
      featured: true,
      category: 'fullstack'
    },
    {
      title: "MobileCare - Mobile Shop and Service Web App",
      description: "A responsive web application for mobile product and service management, allowing users to browse phones and accessories, explore repair services, and use a customer-friendly contact flow. It includes organized product categories, service descriptions with booking-oriented flow, and modern navigation across mobile and desktop. Built and deployed as a fast live web app, with future scope for cart, checkout, payments, login, admin analytics dashboard, and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Firebase Hosting"],
      liveUrl: "https://mobilecare-shop.web.app/",
      githubUrl: "https://github.com/ghauthamm/MohanMobiCare_website",
      featured: true,
      category: 'fullstack'
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Machine Learning', value: 'ml' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        damping: 15,
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 30,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50/50 dark:bg-dark-800/50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Key academic and practical projects spanning full-stack development, machine learning, mobile apps, and database design.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mt-8"
          >
            {filters.map((f) => (
              <motion.button
                key={f.value}
                onClick={() => setFilter(f.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === f.value
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500'
                  }`}
              >
                {f.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
              >
                {/* Project Image with parallax */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                  {project.featured && (
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
                      className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                    >
                      ✨ Featured
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies with stagger */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 + 0.3, type: "spring", bounce: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/50 dark:border-gray-600/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl text-sm font-medium shadow-sm group/btn"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                      <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-xl text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.apkUrl && (
                      <motion.a
                        href={project.apkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 border border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl text-sm font-medium"
                      >
                        <Download className="w-4 h-4" />
                        APK
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/ghauthamm"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold transition-all duration-300 shadow-lg overflow-hidden group"
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View More Projects</span>
            <ExternalLink className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;