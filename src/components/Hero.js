import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
export const Hero = () => {
    const { searchQuery, setSearchQuery } = useAppContext();
    const navigate = useNavigate();
    const handleSearch = (e) => {
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
    return (_jsx("section", { className: "pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center mb-12", children: [_jsxs("h1", { className: "text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight", children: [_jsx("span", { className: "gradient-text", children: "Find Your Technology" }), _jsx("br", {}), _jsx("span", { className: "text-white", children: "Career Roadmap" })] }), _jsx("p", { className: "text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed", children: "Choose your career path and get a complete 1-year learning plan. Learn exactly what to study, in what order, which projects to build, and resources to follow." })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, className: "mb-12", children: _jsx("form", { onSubmit: handleSearch, className: "relative", children: _jsxs("div", { className: "glass rounded-full px-6 py-4 flex items-center space-x-4 backdrop-blur-xl border-2 border-primary-500 border-opacity-30 hover:border-opacity-50 transition-all duration-300 group", children: [_jsx(Search, { className: "w-6 h-6 text-primary-400 flex-shrink-0" }), _jsx("input", { type: "text", placeholder: "Search a career...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg" }), _jsxs("button", { type: "submit", className: "px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold flex items-center space-x-2 hover:shadow-glow transition-all duration-300 transform hover:scale-105", children: [_jsx("span", { className: "hidden sm:inline", children: "Search" }), _jsx(ArrowRight, { className: "w-5 h-5" })] })] }) }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, className: "flex flex-wrap justify-center gap-3", children: [_jsx("span", { className: "text-gray-400 text-sm", children: "Popular searches:" }), exampleCareers.map((career, index) => (_jsx(motion.button, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3, delay: 0.5 + index * 0.05 }, onClick: () => {
                                setSearchQuery(career);
                            }, className: "px-4 py-2 glass rounded-full text-sm text-gray-300 hover:text-primary-400 hover:border-primary-400 border border-gray-700 transition-all duration-300 hover:shadow-glow", children: career }, career)))] }), _jsx(motion.div, { animate: { y: [0, 20, 0] }, transition: { duration: 3, repeat: Infinity }, className: "absolute top-20 right-10 w-64 h-64 bg-primary-500 rounded-full opacity-10 blur-3xl" }), _jsx(motion.div, { animate: { y: [0, -20, 0] }, transition: { duration: 4, repeat: Infinity }, className: "absolute bottom-0 left-10 w-64 h-64 bg-accent-500 rounded-full opacity-10 blur-3xl" })] }) }));
};
