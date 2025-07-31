import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Ghautham M' },
    { icon: MapPin, label: 'Location', value: 'Erode, India' },

    { icon: Mail, label: 'Email', value: 'ghauthamm@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7339010563' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my background, skills, and what drives me to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <div className="relative mx-auto lg:mx-0 w-64 h-64 lg:w-80 lg:h-80">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-blue-500 rounded-full p-1">
                <div className="w-full h-full bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                  <img
                    src="/ghauthamphoto.jpg"
                    alt="Ghautham M - Fullstack Developer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback-icon w-full h-full rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                    <User className="w-24 h-24 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-800"></div>
            </div>

            {/* Personal Information */}
            <div className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{info.label}:</span>
                      <span className="ml-2 text-gray-900 dark:text-white font-medium">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Who I Am */}
            <div className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate fullstack developer with a strong foundation in both frontend and backend technologies. 
                I love turning complex problems into simple, beautiful, and intuitive solutions. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* What I Do */}
            <div className="bg-white dark:bg-dark-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Web Development</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Creating responsive and dynamic web applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">UI/UX Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Designing intuitive user interfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">API Development</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Building robust RESTful APIs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Database Design</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Optimizing database performance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 