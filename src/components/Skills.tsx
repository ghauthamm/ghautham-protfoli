import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Zap, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Languages",
      icon: Layout,
      gradient: 'from-blue-500 to-cyan-500',
      barColor: 'from-blue-500 to-cyan-400',
      skills: [
        { name: "C", level: 75 },
        { name: "Java", level: 80 },
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 82 }
      ]
    },
    {
      title: "Frontend",
      icon: Code,
      gradient: 'from-emerald-500 to-teal-500',
      barColor: 'from-emerald-500 to-teal-400',
      skills: [
        { name: "HTML", level: 92 },
        { name: "CSS", level: 90 },
        { name: "React.js", level: 88 },
        { name: "React Native", level: 80 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      gradient: 'from-purple-500 to-pink-500',
      barColor: 'from-purple-500 to-pink-400',
      skills: [
        { name: "Node.js", level: 84 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "Tools & Cloud",
      icon: Zap,
      gradient: 'from-amber-500 to-orange-500',
      barColor: 'from-amber-500 to-orange-400',
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Jenkins", level: 75 },
        { name: "Docker", level: 78 },
        { name: "AWS (Basics)", level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    "REST APIs", "Machine Learning", "Random Forest", "SVM", "Logistic Regression", "XGBoost",
    "Flutter", "ERP Workflows", "Business Logic", "Database Design", "CRUD Operations", "Problem Solving"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const skillBarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 15 }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-32 h-32 bg-primary-100/50 dark:bg-primary-500/5 rounded-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-24 h-24 bg-purple-100/50 dark:bg-purple-500/5 rounded-2xl"
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
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Technical expertise across programming languages, web and mobile development, backend systems, databases, and cloud tools.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
              onHoverStart={() => setActiveCategory(categoryIndex)}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  animate={activeCategory === categoryIndex ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 0.8 }}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-3 shadow-sm`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={skillBarVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-xs text-primary-600 dark:text-primary-400 font-semibold bg-primary-50 dark:bg-primary-500/10 px-2 py-0.5 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 + 0.5, type: "spring", bounce: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r ${category.barColor} h-2.5 rounded-full relative`}
                      >
                        {/* Glowing tip */}
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/50 blur-sm"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Additional Skills
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={tagVariants}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  rotate: [0, -2, 2, 0],
                }}
                className="bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 px-3 py-2.5 rounded-xl text-sm font-medium text-center hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 border border-gray-200/50 dark:border-gray-700/50 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;