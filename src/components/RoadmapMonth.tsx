import React from 'react';
import { motion } from 'framer-motion';
import { RoadmapMonth } from '../types';
import { CheckCircle, Circle } from 'lucide-react';
import { difficultyColors } from '../utils/helpers';

interface RoadmapMonthComponentProps {
  month: RoadmapMonth;
  isCompleted: boolean;
  onToggle: (monthNumber: number) => void;
  index: number;
}

export const RoadmapMonthComponent: React.FC<RoadmapMonthComponentProps> = ({
  month,
  isCompleted,
  onToggle,
  index,
}) => {
  const difficultyColor = difficultyColors[month.difficultyLevel as keyof typeof difficultyColors];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`glass rounded-2xl p-6 border border-white transition-all duration-300 ${
        isCompleted ? 'border-green-500 border-opacity-50 bg-green-500 bg-opacity-5' : 'border-opacity-10'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-2xl font-bold text-white">Month {month.month}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor.badge}`}>
              {month.difficultyLevel}
            </span>
          </div>
          <h4 className="text-primary-400 text-lg font-semibold">{month.technology}</h4>
        </div>

        {/* Completion Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onToggle(month.month)}
          className="flex-shrink-0 ml-4"
        >
          {isCompleted ? (
            <CheckCircle className="w-8 h-8 text-green-500 fill-green-500" />
          ) : (
            <Circle className="w-8 h-8 text-gray-500 hover:text-primary-400 transition-colors" />
          )}
        </motion.button>
      </div>

      {/* Topics */}
      <div className="mb-4">
        <h5 className="text-gray-300 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
          Topics to Learn
        </h5>
        <div className="flex flex-wrap gap-2">
          {month.topics.map((topic, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary-500 bg-opacity-10 text-primary-300 rounded-full text-sm border border-primary-500 border-opacity-20"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-4 p-3 bg-blue-500 bg-opacity-5 border border-blue-500 border-opacity-20 rounded-lg">
        <p className="text-gray-400 text-sm">
          <span className="font-semibold text-blue-400">Estimated Duration:</span> {month.estimatedDuration}
        </p>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h5 className="text-gray-300 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
          Project Recommendations
        </h5>
        <ul className="space-y-2">
          {month.projects.map((project, idx) => (
            <li key={idx} className="flex items-center space-x-3 text-gray-400">
              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0"></span>
              <span>{project}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* YouTube Resources */}
      {month.youtubeChannels.length > 0 && (
        <div className="pt-4 border-t border-white border-opacity-10">
          <h5 className="text-gray-300 font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
            YouTube Resources
          </h5>
          <div className="space-y-2">
            {month.youtubeChannels.map((channel, idx) => (
              <a
                key={idx}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 glass rounded-lg border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 group"
              >
                <p className="text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                  {channel.name}
                </p>
                <p className="text-gray-400 text-sm">{channel.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
