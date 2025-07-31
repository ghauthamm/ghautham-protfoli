import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Zap,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Postman", level: 85 },
        { name: "Jest", level: 75 },
        { name: "Agile", level: 80 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    "Redux", "Context API", "React Query", "Framer Motion", "Chart.js", "D3.js",
    "Socket.io", "JWT", "OAuth", "MySQL", "Elasticsearch", "Kubernetes",
    "Vercel", "Netlify", "Heroku", "Cypress", "Mocha", "Chai", "Swagger",
    "ESLint", "Prettier", "Storybook", "Webpack", "Vite"
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical skills and expertise across various technologies and frameworks.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-lg p-6"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Additional Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 