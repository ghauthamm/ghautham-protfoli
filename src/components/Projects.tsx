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
      githubUrl: "https://github.com/ghautham/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/ghautham/task-app",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard with interactive charts, location-based forecasts, and historical data visualization using Chart.js.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "https://weather-dashboard.com",
      githubUrl: "https://github.com/ghautham/weather-app",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, SEO optimization, and admin dashboard for content management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
      liveUrl: "https://blog-platform.com",
      githubUrl: "https://github.com/ghautham/blog-platform",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/ghautham/chat-app",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS with smooth animations and dark mode.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8b6a6b?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/ghautham/portfolio",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              className="bg-white dark:bg-dark-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
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
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-lg text-sm font-medium transition-colors duration-300"
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
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ghautham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View More Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 