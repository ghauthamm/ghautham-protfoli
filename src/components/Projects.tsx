import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/ghauthamm/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/ghauthamm/task-app",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard with interactive charts, location-based forecasts, and historical data visualization using Chart.js.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "https://weather-dashboard.com",
      githubUrl: "https://github.com/ghauthamm/weather-app",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, SEO optimization, and admin dashboard for content management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
      liveUrl: "https://blog-platform.com",
      githubUrl: "https://github.com/ghauthamm/blog-platform",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/ghauthamm/chat-app",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS with smooth animations and dark mode.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8b6a6b?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/ghauthamm/portfolio",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50/50 dark:bg-dark-800/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects that demonstrate my skills in fullstack development and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50 hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    ✨ Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/50 dark:border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white rounded-xl text-sm font-medium transition-all duration-300 shadow-sm"
                  >
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-xl text-sm font-medium transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            <Github className="w-5 h-5" />
            View More Projects
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;