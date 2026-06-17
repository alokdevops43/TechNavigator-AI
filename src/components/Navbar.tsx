import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white border-opacity-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg group-hover:shadow-glow transition-all duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">TechNavigator</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <a
              href="#careers"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Careers
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium"
            >
              Features
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-white border-opacity-10"
          >
            <Link
              to="/"
              className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-primary-500 hover:bg-opacity-10 rounded transition-colors"
            >
              Home
            </Link>
            <a
              href="#careers"
              className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-primary-500 hover:bg-opacity-10 rounded transition-colors"
            >
              Careers
            </a>
            <a
              href="#features"
              className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-primary-500 hover:bg-opacity-10 rounded transition-colors"
            >
              Features
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
