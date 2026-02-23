import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown } from 'lucide-react';

const Education: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kongu Engineering College",
      location: "Perundurai, Erode-638060",
      period: "2024 - 2026",
      gpa: "7.43 CGPA",
      description: "Pursuing Master's degree in Computer Applications with focus on advanced software development, database management, and modern programming technologies.",
      achievements: [
        "Winner – Smart India Hackathon 2025 (National Level) - Led team to secure 1st Place under Government of Odisha (Electronics & IT Department)",
        "Won ₹1,50,000 cash prize for innovative software solution in SIH 2025",
        "1st Place – Top Coders Event - Recognized for exceptional coding and analytical skills",
        "Currently pursuing MCA with strong academic performance",
        "Specialized in advanced software development methodologies"
      ],
      courses: [
        "Advanced Software Engineering",
        "Database Management Systems",
        "Web Technologies",
        "Machine Learning",
        "Cloud Computing",
        "Mobile Application Development"
      ],
      relevant: true,
      gradient: 'from-primary-500 to-blue-500',
      emoji: '🎓'
    },
    {
      degree: "Bachelor of Computer Science (BSC)",
      institution: "Kongu Engineering College",
      location: "Perundurai, Erode-638060",
      period: "2021 - 2024",
      gpa: "7.01 CGPA",
      description: "Completed Bachelor's degree in Computer Science with comprehensive knowledge of programming, algorithms, and software development fundamentals.",
      achievements: [
        "Graduated with good academic performance",
        "Completed multiple programming projects",
        "Participated in coding competitions",
        "Member of Computer Science Club"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Web Development",
        "Computer Networks",
        "Software Engineering"
      ],
      relevant: true,
      gradient: 'from-emerald-500 to-teal-500',
      emoji: '🎯'
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "SVN Matric Higher Secondary School",
      location: "Erode-638004",
      period: "2019 - 2021",
      gpa: "74.84%",
      description: "Science stream with Mathematics and Computer Science as core subjects.",
      achievements: [
        "Completed HSC with good percentage",
        "Strong foundation in Mathematics and Science",
        "Basic programming knowledge acquired",
        "Participated in school science competitions"
      ],
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English", "Tamil"],
      relevant: false,
      gradient: 'from-purple-500 to-pink-500',
      emoji: '📚'
    },
    {
      degree: "Secondary Education (SSLC)",
      institution: "SVN Matric Higher Secondary School",
      location: "Erode-638004",
      period: "2017 - 2019",
      gpa: "65.6%",
      description: "Foundation years with focus on core subjects and basic computer literacy.",
      achievements: [
        "Completed SSLC with satisfactory performance",
        "Basic computer skills developed",
        "Strong foundation in core subjects",
        "Participated in school activities"
      ],
      courses: ["Mathematics", "Science", "Social Studies", "English", "Tamil"],
      relevant: false,
      gradient: 'from-amber-500 to-orange-500',
      emoji: '📖'
    }
  ];

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        damping: 15,
      }
    })
  };

  return (
    <section id="education" className="section-padding bg-gray-50/50 dark:bg-dark-800/50 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-20 w-40 h-40 border border-primary-200/20 dark:border-primary-500/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-20 w-60 h-60 border border-purple-200/20 dark:border-purple-500/10 rounded-full"
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary-500/25">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My academic journey from secondary education to pursuing my Master's degree in Computer Applications.
          </motion.p>
        </motion.div>

        {/* Education Timeline - Accordion Style */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(to bottom, #3b82f6, #10b981, #8b5cf6, #f59e0b)',
              }}
            />

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Animated Timeline Dot */}
                  <motion.div
                    className={`absolute left-4 w-5 h-5 rounded-full border-4 border-white dark:border-dark-800 bg-gradient-to-r ${edu.gradient} shadow-lg z-10`}
                    animate={expandedIndex === index ? {
                      scale: [1, 1.3, 1],
                      boxShadow: ['0 0 0 0 rgba(59,130,246,0.3)', '0 0 0 10px rgba(59,130,246,0)', '0 0 0 0 rgba(59,130,246,0)']
                    } : {}}
                    transition={{ duration: 2, repeat: expandedIndex === index ? Infinity : 0 }}
                  />

                  {/* Content Card - Accordion */}
                  <motion.div
                    className="ml-14 lg:ml-16"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Card Header - Always visible */}
                    <motion.button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="w-full text-left bg-white dark:bg-dark-800 rounded-2xl p-5 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{edu.emoji}</span>
                            <h4 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                              {edu.degree}
                            </h4>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                            <BookOpen className="w-4 h-4 mr-2 text-primary-500 dark:text-primary-400" />
                            <span className="font-medium text-sm">{edu.institution}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center bg-gray-50 dark:bg-dark-700/50 px-2.5 py-1 rounded-lg">
                              <Calendar className="w-3 h-3 mr-1.5" />
                              {edu.period}
                            </span>
                            <span className="flex items-center bg-gray-50 dark:bg-dark-700/50 px-2.5 py-1 rounded-lg">
                              <MapPin className="w-3 h-3 mr-1.5" />
                              {edu.location}
                            </span>
                            <span className={`font-bold text-sm bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                              {edu.gpa}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {edu.relevant && (
                            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-300 border border-primary-100 dark:border-primary-500/20">
                              <Award className="w-3 h-3 mr-1" />
                              Relevant
                            </span>
                          )}
                          <motion.div
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.button>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="bg-white dark:bg-dark-800 rounded-b-2xl px-5 pb-5 -mt-2 pt-4 border-x border-b border-gray-100 dark:border-gray-700/50">
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
                            >
                              {edu.description}
                            </motion.p>

                            <div className="mb-4">
                              <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Achievements:</h5>
                              <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-2">
                                {edu.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 + 0.2 }}
                                    className="flex items-start gap-2"
                                  >
                                    <motion.span
                                      animate={{ scale: [1, 1.3, 1] }}
                                      transition={{ delay: idx * 0.1 + 0.5, duration: 0.3 }}
                                      className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 flex-shrink-0"
                                    />
                                    {achievement}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Relevant Courses:</h5>
                              <div className="flex flex-wrap gap-2">
                                {edu.courses.map((course, idx) => (
                                  <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 + 0.3, type: "spring", bounce: 0.5 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-2.5 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs border border-gray-200/50 dark:border-gray-600/50 cursor-default"
                                  >
                                    {course}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;