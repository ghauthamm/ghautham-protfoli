import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ghauthamm@gmail.com",
      href: "mailto:ghauthamm@gmail.com",
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7339010563",
      href: "tel:+917339010563",
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Erode, India",
      href: "#",
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ghauthamm",
      icon: Github,
      hoverBg: 'hover:bg-gray-800 dark:hover:bg-gray-700',
      hoverText: 'hover:text-white'
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ghautham-m-250b80266/",
      icon: Linkedin,
      hoverBg: 'hover:bg-blue-600',
      hoverText: 'hover:text-white'
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ghautham",
      icon: Twitter,
      hoverBg: 'hover:bg-sky-500',
      hoverText: 'hover:text-white'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50/50 dark:bg-dark-800/50">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's work together! Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Let's Connect */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 bg-white dark:bg-dark-800 rounded-2xl shadow-md shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-gray-100 dark:bg-dark-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.hoverBg} ${social.hoverText} border border-gray-200/50 dark:border-gray-600/50`}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 dark:bg-dark-700 dark:text-white transition-all duration-300 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 dark:bg-dark-700 dark:text-white transition-all duration-300 outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 dark:bg-dark-700 dark:text-white transition-all duration-300 outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 dark:bg-dark-700 dark:text-white transition-all duration-300 resize-none outline-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 ${submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white shadow-lg shadow-primary-500/25'
                  }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;