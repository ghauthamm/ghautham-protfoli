import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
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
      color: '#333',
      hoverBg: 'hover:bg-gray-800 dark:hover:bg-gray-600'
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ghautham-m-250b80266/",
      icon: Linkedin,
      color: '#0077b5',
      hoverBg: 'hover:bg-blue-600'
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ghautham",
      icon: Twitter,
      color: '#1da1f2',
      hoverBg: 'hover:bg-sky-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 15 }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50/50 dark:bg-dark-800/50 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 dark:bg-purple-500/5 rounded-full blur-3xl"
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
            transition={{ type: "spring" }}
            viewport={{ once: true }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Let's work together! Feel free to reach out for collaborations, opportunities, or just to say hello.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Let's Connect */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  }}
                  className="flex items-center p-4 bg-white dark:bg-dark-800 rounded-2xl shadow-md shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50 transition-all duration-300 group block"
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mr-4 shadow-sm`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links with bounce */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
            >
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, type: "spring", bounce: 0.6 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-gray-100 dark:bg-dark-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.hoverBg} hover:text-white border border-gray-200/50 dark:border-gray-600/50`}
                    whileHover={{
                      scale: 1.2,
                      y: -8,
                      rotate: [0, -10, 10, 0],
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form with animated inputs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700/50"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    animate={focusedField === field.id ? { scale: 1.02 } : { scale: 1 }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 dark:bg-dark-700 dark:text-white transition-all duration-300 outline-none"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div animate={focusedField === 'subject' ? { scale: 1.02 } : { scale: 1 }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 dark:bg-dark-700 dark:text-white transition-all duration-300 outline-none"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 dark:focus:border-primary-400 dark:bg-dark-700 dark:text-white transition-all duration-300 resize-none outline-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 15px 35px rgba(37, 99, 235, 0.35)' }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted || sending}
                className="relative w-full flex items-center justify-center gap-2 font-semibold py-3.5 px-6 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Button background */}
                <motion.div
                  className="absolute inset-0"
                  animate={submitted ? { background: 'linear-gradient(to right, #10b981, #059669)' } :
                    { background: 'linear-gradient(to right, #2563eb, #3b82f6)' }}
                  transition={{ duration: 0.5 }}
                />

                {/* Shimmer */}
                {!submitted && !sending && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                )}

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-white relative z-10"
                    >
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </motion.div>
                      Message Sent!
                    </motion.div>
                  ) : sending ? (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-white relative z-10"
                    >
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                        <Loader2 className="w-5 h-5" />
                      </motion.div>
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-white relative z-10"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;