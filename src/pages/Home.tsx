import React from 'react';
import { motion } from 'framer-motion';
import { Navbar, Hero, CareersGrid, Footer } from '../components';
import { Zap, BookOpen, Rocket, TrendingUp } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Careers Grid */}
      <CareersGrid />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">Why Choose TechNavigator?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to navigate your tech career journey with confidence and clarity
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Personalized Roadmaps',
                description: 'Get a customized 12-month learning plan tailored to your chosen career path',
              },
              {
                icon: BookOpen,
                title: 'Curated Resources',
                description: 'Access handpicked YouTube channels and learning resources for each module',
              },
              {
                icon: Rocket,
                title: 'Project-Based Learning',
                description: 'Build real projects at every stage to reinforce your learning and create a portfolio',
              },
              {
                icon: TrendingUp,
                title: 'Progress Tracking',
                description: 'Monitor your progress and celebrate milestones throughout your journey',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 group"
              >
                <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl opacity-90 group-hover:opacity-100 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Ready to start your tech career journey?
            </p>
            <motion.a
              href="#careers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold hover:shadow-glow transition-all duration-300"
            >
              Explore Careers
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
