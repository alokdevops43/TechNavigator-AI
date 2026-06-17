import React from 'react';
import { motion } from 'framer-motion';
import { CAREERS } from '../data/careers';
import { CareerCard } from './CareerCard';
import { useAppContext } from '../context/AppContext';

interface CareersGridProps {
  title?: string;
  subtitle?: string;
}

export const CareersGrid: React.FC<CareersGridProps> = ({
  title = 'Choose Your Career Path',
  subtitle = 'Select from 50+ technology career options',
}) => {
  const { searchQuery } = useAppContext();

  const filteredCareers = CAREERS.filter(career =>
    career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    career.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Careers Grid */}
        {filteredCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <CareerCard key={career.id} career={career} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-400">
              No careers found matching "{searchQuery}". Try searching for other keywords.
            </p>
          </motion.div>
        )}

        {/* Floating Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-accent-500 rounded-full opacity-5 blur-3xl pointer-events-none"
        />
      </div>
    </section>
  );
};
