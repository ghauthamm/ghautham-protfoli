import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Code, Palette, Server, Database } from 'lucide-react';

const About: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const personalInfo = [
    { icon: User, label: 'Name', value: 'Ghautham M' },
    { icon: MapPin, label: 'Location', value: 'Erode, India' },
    { icon: Mail, label: 'Email', value: 'ghauthamm@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7339010563' }
  ];

  const stats = [
    { number: '10+', label: 'Projects', delay: 0 },
    { number: '5+', label: 'Technologies', delay: 0.1 },
    { number: '2+', label: 'Years Learning', delay: 0.2 },
    { number: '100%', label: 'Dedication', delay: 0.3 },
  ];

  const whatIDo = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications',
      gradient: 'from-blue-500 to-cyan-500',
      bgLight: 'bg-blue-50',
      bgDark: 'dark:bg-blue-500/10'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces',
      gradient: 'from-purple-500 to-pink-500',
      bgLight: 'bg-purple-50',
      bgDark: 'dark:bg-purple-500/10'
    },
    {
      icon: Server,
      title: 'API Development',
      description: 'Building robust RESTful APIs',
      gradient: 'from-emerald-500 to-teal-500',
      bgLight: 'bg-emerald-50',
      bgDark: 'dark:bg-emerald-500/10'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimizing database performance',
      gradient: 'from-amber-500 to-orange-500',
      bgLight: 'bg-amber-50',
      bgDark: 'dark:bg-amber-500/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50/50 dark:bg-dark-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-primary-100 dark:border-primary-900/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-60 h-60 border border-purple-100 dark:border-purple-900/30 rounded-full"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Get to know me better - my background, skills, and what drives me to create exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
            >
              <motion.span
                className="text-3xl md:text-4xl font-bold gradient-text block mb-1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: stat.delay + 0.3, bounce: 0.5 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image with animated border */}
            <div className="relative mx-auto lg:mx-0 w-64 h-64 lg:w-80 lg:h-80">
              <motion.div
                className="w-full h-full rounded-2xl p-1 shadow-xl shadow-primary-500/20 dark:shadow-primary-500/10"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                  backgroundSize: '300% 300%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-gray-200 dark:bg-dark-700 rounded-2xl overflow-hidden">
                  <img
                    src="/ghauthamphoto.jpg"
                    alt="Ghautham M - Fullstack Developer"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback-icon w-full h-full rounded-2xl flex items-center justify-center" style={{ display: 'none' }}>
                    <User className="w-24 h-24 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-dark-800 shadow-lg"
              />
            </div>

            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 8, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    className="flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center"
                    >
                      <info.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </motion.div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{info.label}:</span>
                      <span className="ml-2 text-gray-900 dark:text-white font-medium">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Who I Am */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate fullstack developer with a strong foundation in both frontend and backend technologies.
                I love turning complex problems into simple, beautiful, and intuitive solutions.
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </motion.div>

            {/* What I Do - with 3D tilt */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {whatIDo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: -5,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`flex items-start space-x-3 p-4 rounded-xl ${item.bgLight} ${item.bgDark} transition-all duration-300 cursor-default`}
                    style={{ perspective: 1000 }}
                  >
                    <motion.div
                      animate={hoveredCard === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;