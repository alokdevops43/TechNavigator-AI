import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { searchQuery, setSearchQuery } = useAppContext();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/roadmap?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const exampleCareers = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'DevOps Engineer',
    'Data Scientist',
    'AI Engineer',
    'Cloud Engineer',
  ];

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Find Your Technology</span>
            <br />
            <span className="text-white">Career Roadmap</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose your career path and get a complete 1-year learning plan. Learn exactly what to study, in what order,
            which projects to build, and resources to follow.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="glass rounded-full px-6 py-4 flex items-center space-x-4 backdrop-blur-xl border-2 border-primary-500 border-opacity-30 hover:border-opacity-50 transition-all duration-300 group">
              <Search className="w-6 h-6 text-primary-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search a career..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold flex items-center space-x-2 hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                <span className="hidden sm:inline">Search</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="text-gray-400 text-sm">Popular searches:</span>
          {exampleCareers.map((career, index) => (
            <motion.button
              key={career}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              onClick={() => {
                setSearchQuery(career);
              }}
              className="px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-primary-400 hover:border-primary-400 border border-gray-700 transition-all duration-300 hover:shadow-glow"
            >
              {career}
            </motion.button>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 right-10 w-64 h-64 bg-primary-500 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-0 left-10 w-64 h-64 bg-accent-500 rounded-full opacity-10 blur-3xl"
        />
      </div>
    </section>
  );
};
