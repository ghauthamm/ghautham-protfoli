import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kongu Engineering College",
      location: "Perundurai, Erode-638060",
      period: "2024 - 2026",
      gpa: "7.38 CGPA",
      description: "Pursuing Master's degree in Computer Applications with focus on advanced software development, database management, and modern programming technologies.",
      achievements: [
        "Currently pursuing MCA with strong academic performance",
        "Specialized in advanced software development methodologies",
        "Learning modern programming frameworks and tools",
        "Participating in technical workshops and seminars"
      ],
      courses: [
        "Advanced Software Engineering",
        "Database Management Systems",
        "Web Technologies",
        "Machine Learning",
        "Cloud Computing",
        "Mobile Application Development"
      ],
      relevant: true
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
      relevant: true
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "SVN Matric Higher Secondary School",
      location: "Erode-638004",
      period: "2019 - 2021",
      gpa: "74.84%",
      description: "Science stream with Mathematics and Computer Science as core subjects, building strong foundation for higher studies.",
      achievements: [
        "Completed HSC with good percentage",
        "Strong foundation in Mathematics and Science",
        "Basic programming knowledge acquired",
        "Participated in school science competitions"
      ],
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English",
        "Tamil"
      ],
      relevant: false
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
      courses: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Tamil"
      ],
      relevant: false
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey from secondary education to pursuing my Master's degree in Computer Applications.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary-600" />
            Academic Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-primary-400"></div>
            
            <div className="space-y-6 lg:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-4 border-white dark:border-dark-800 ${
                    edu.relevant ? 'bg-primary-600' : 'bg-gray-400'
                  }`}></div>
                  
                  {/* Content Card */}
                  <div className="ml-8 lg:ml-12 bg-white dark:bg-dark-900 rounded-lg p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 lg:mb-4">
                      <h4 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      {edu.relevant && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 mt-2 sm:mt-0">
                          <Award className="w-3 h-3 mr-1" />
                          Relevant
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span className="font-medium text-sm lg:text-base">{edu.institution}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 lg:gap-4 text-xs lg:text-sm text-gray-500 dark:text-gray-400 mb-3 lg:mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="font-medium text-primary-600 dark:text-primary-400">
                        {edu.gpa}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="mb-3 lg:mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm lg:text-base">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-xs lg:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm lg:text-base">Relevant Courses:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 