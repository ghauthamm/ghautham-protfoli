import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Smartphone, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            icon: Code2,
            title: 'Web Development',
            description: 'Building high-performance, scalable web applications using modern frameworks like React and Next.js.',
            color: 'blue'
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Designing intuitive and aesthetically pleasing user interfaces that provide exceptional user experiences.',
            color: 'purple'
        },
        {
            icon: Globe,
            title: 'API Integration',
            description: 'Seamlessly connecting front-end applications with robust back-end services and third-party APIs.',
            color: 'emerald'
        },
        {
            icon: Smartphone,
            title: 'Responsive Design',
            description: 'Ensuring your applications look and function perfectly across all devices, from mobile to desktop.',
            color: 'amber'
        },
        {
            icon: Shield,
            title: 'Web Security',
            description: 'Implementing best practices for security to protect your data and users from common web vulnerabilities.',
            color: 'rose'
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Optimizing load times and runtime performance to ensure a smooth and fast user experience.',
            color: 'cyan'
        }
    ];

    const getColorClasses = (color: string) => {
        const classes: { [key: string]: string } = {
            blue: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20',
            purple: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20',
            emerald: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20',
            amber: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20',
            rose: 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20',
            cyan: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-100 dark:border-cyan-500/20'
        };
        return classes[color];
    };

    return (
        <section id="services" className="section-padding bg-gray-50/50 dark:bg-dark-800/50 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Services I <span className="gradient-text">Offer</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I provide a wide range of services to help you build and grow your digital presence.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white dark:bg-dark-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700/50 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${getColorClasses(service.color)} transition-all duration-300 group-hover:scale-110`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
