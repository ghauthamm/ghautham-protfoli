import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Fullstack Developer',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      period: 'Jan 2023 - Present',
      description: 'Leading development of enterprise-level applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led a team of 5 developers in building a scalable e-commerce platform',
        'Improved application performance by 40% through optimization techniques',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Fullstack Developer',
      company: 'Digital Innovations Ltd',
      location: 'Mumbai, India',
      period: 'Mar 2021 - Dec 2022',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks and databases.',
      achievements: [
        'Built 3 client-facing applications with 99.9% uptime',
        'Reduced bug reports by 50% through improved testing practices',
        'Collaborated with UX team to improve user experience',
        'Participated in agile development processes'
      ],
      technologies: ['JavaScript', 'React', 'Express.js', 'MongoDB', 'Git']
    },
    {
      title: 'Frontend Developer',
      company: 'WebTech Solutions',
      location: 'Delhi, India',
      period: 'Jun 2020 - Feb 2021',
      description: 'Focused on creating responsive and interactive user interfaces for various client projects.',
      achievements: [
        'Developed 10+ responsive websites for clients',
        'Optimized website loading speed by 30%',
        'Implemented modern CSS frameworks and animations',
        'Worked closely with designers to implement pixel-perfect designs'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Education
          </h3>
          <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Bachelor of Technology in Computer Science
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                University of Technology
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                2016 - 2020 • Graduated with First Class
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Specialized in software engineering with focus on web development, 
                database management, and software architecture. Completed final year 
                project on "Modern Web Application Development".
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 