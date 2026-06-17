import React from 'react';
import { motion } from 'framer-motion';
import { Career } from '../types';
import { useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface CareerCardProps {
  career: Career;
  index?: number;
}

export const CareerCard: React.FC<CareerCardProps> = ({ career, index = 0 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/roadmap/${career.id}`);
  };

  // Get icon from lucide-react
  const IconComponent = (LucideIcons as any)[career.icon] || LucideIcons.Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={handleClick}
      className="group glass rounded-2xl p-6 cursor-pointer border border-white border-opacity-10 hover:border-opacity-30 hover:bg-opacity-10 transition-all duration-300 h-full flex flex-col justify-between"
    >
      {/* Icon */}
      <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl opacity-90 group-hover:opacity-100 group-hover:shadow-glow transition-all duration-300">
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-500 transition-all duration-300">
        {career.name}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 flex-grow">{career.description}</p>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4 pt-4 border-t border-white border-opacity-10">
        <div className="text-sm">
          <span className="text-gray-500">Duration:</span>
          <span className="text-primary-400 font-semibold ml-2">{career.totalMonths} months</span>
        </div>
        <div className="text-sm text-gray-500">
          {career.roadmap.length} <span className="text-gray-600">modules</span>
        </div>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-2 px-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-glow transition-all duration-300 text-white"
      >
        <span>View Roadmap</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};
