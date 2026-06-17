import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar, RoadmapMonthComponent, Footer } from '../components';
import { CAREER_BY_ID, CAREERS } from '../data/careers';
import { calculateProgress } from '../utils/helpers';
import { ArrowLeft, BarChart3, AlertCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export const Roadmap: React.FC = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [completedMonths, setCompletedMonths] = useState<number[]>([]);

  // Try to find career by URL param or search query
  let selectedCareer = careerId ? CAREER_BY_ID(careerId) : null;

  if (!selectedCareer) {
    const searchQuery = searchParams.get('search')?.toLowerCase();
    if (searchQuery) {
      selectedCareer = CAREERS.find(
        c => c.name.toLowerCase().includes(searchQuery) ||
             c.id.toLowerCase().includes(searchQuery)
      );
    }
  }

  // Load progress from localStorage
  useEffect(() => {
    if (selectedCareer) {
      const saved = localStorage.getItem(`progress_${selectedCareer.id}`);
      if (saved) {
        try {
          setCompletedMonths(JSON.parse(saved));
        } catch (e) {
          // Invalid data, start fresh
        }
      }
    }
  }, [selectedCareer]);

  // Save progress to localStorage
  useEffect(() => {
    if (selectedCareer) {
      localStorage.setItem(`progress_${selectedCareer.id}`, JSON.stringify(completedMonths));
    }
  }, [completedMonths, selectedCareer]);

  const toggleMonth = (monthNumber: number) => {
    setCompletedMonths(prev =>
      prev.includes(monthNumber)
        ? prev.filter(m => m !== monthNumber)
        : [...prev, monthNumber]
    );
  };

  if (!selectedCareer) {
    return (
      <div className="min-h-screen bg-dark-900 text-white">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-gray-500" />
          <h1 className="text-3xl font-bold mb-4">Career Not Found</h1>
          <p className="text-gray-400 mb-8">We couldn't find the career you're looking for.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-primary-500 rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            Back to Home
          </motion.button>
        </div>
        <Footer />
      </div>
    );
  }

  const progress = calculateProgress(completedMonths, selectedCareer.totalMonths);
  const IconComponent = (LucideIcons as any)[selectedCareer.icon] || LucideIcons.Code2;

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-10 blur-3xl"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Careers</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-start space-x-6 mb-6">
              <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-2">{selectedCareer.name}</h1>
                <p className="text-xl text-gray-400">{selectedCareer.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: 'Total Months', value: selectedCareer.totalMonths },
              { label: 'Completed', value: completedMonths.length },
              { label: 'Remaining', value: selectedCareer.totalMonths - completedMonths.length },
              { label: 'Progress', value: `${progress}%` },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="glass rounded-xl p-4 border border-white border-opacity-10 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-primary-400">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Overall Progress</h3>
              <span className="text-primary-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-3 glass rounded-full overflow-hidden border border-white border-opacity-10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full shadow-glow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold flex items-center space-x-3 mb-2">
              <BarChart3 className="w-8 h-8 text-primary-400" />
              <span>Your 12-Month Learning Path</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Click the circle icon next to each month to mark it as completed. Your progress is automatically saved!
            </p>
          </motion.div>

          {/* Roadmap Timeline */}
          <div className="space-y-6">
            {selectedCareer.roadmap.map((month, index) => (
              <RoadmapMonthComponent
                key={month.month}
                month={month}
                isCompleted={completedMonths.includes(month.month)}
                onToggle={toggleMonth}
                index={index}
              />
            ))}
          </div>

          {/* Completion Message */}
          {progress === 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-8 glass rounded-2xl border-2 border-green-500 border-opacity-50 bg-green-500 bg-opacity-10 text-center"
            >
              <h3 className="text-3xl font-bold text-green-400 mb-2">🎉 Congratulations!</h3>
              <p className="text-lg text-gray-300 mb-4">
                You've completed the entire {selectedCareer.name} roadmap!
              </p>
              <p className="text-gray-400">
                Keep learning, build projects, contribute to open source, and continue growing. Your journey doesn't end
                here—it's just the beginning!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
