import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { CAREERS } from '../data/careers';
import { CareerCard } from './CareerCard';
import { useAppContext } from '../context/AppContext';
export const CareersGrid = ({ title = 'Choose Your Career Path', subtitle = 'Select from 50+ technology career options', }) => {
    const { searchQuery } = useAppContext();
    const filteredCareers = CAREERS.filter(career => career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsx("section", { id: "careers", className: "py-20 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl sm:text-5xl font-bold mb-4 gradient-text", children: title }), _jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: subtitle })] }), filteredCareers.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredCareers.map((career, index) => (_jsx(CareerCard, { career: career, index: index }, career.id))) })) : (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 }, className: "text-center py-20", children: _jsxs("p", { className: "text-xl text-gray-400", children: ["No careers found matching \"", searchQuery, "\". Try searching for other keywords."] }) })), _jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 20, repeat: Infinity, ease: 'linear' }, className: "absolute top-1/3 right-0 w-96 h-96 bg-accent-500 rounded-full opacity-5 blur-3xl pointer-events-none" })] }) }));
};
