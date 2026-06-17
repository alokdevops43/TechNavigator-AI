import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
export const CareerCard = ({ career, index = 0 }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/roadmap/${career.id}`);
    };
    // Get icon from lucide-react
    const IconComponent = LucideIcons[career.icon] || LucideIcons.Code2;
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, whileHover: { y: -5 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.05 }, onClick: handleClick, className: "group glass rounded-2xl p-6 cursor-pointer border border-white border-opacity-10 hover:border-opacity-30 hover:bg-opacity-10 transition-all duration-300 h-full flex flex-col justify-between", children: [_jsx("div", { className: "mb-4 inline-flex p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl opacity-90 group-hover:opacity-100 group-hover:shadow-glow transition-all duration-300", children: _jsx(IconComponent, { className: "w-6 h-6 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-500 transition-all duration-300", children: career.name }), _jsx("p", { className: "text-gray-400 text-sm mb-4 flex-grow", children: career.description }), _jsxs("div", { className: "flex items-center justify-between mb-4 pt-4 border-t border-white border-opacity-10", children: [_jsxs("div", { className: "text-sm", children: [_jsx("span", { className: "text-gray-500", children: "Duration:" }), _jsxs("span", { className: "text-primary-400 font-semibold ml-2", children: [career.totalMonths, " months"] })] }), _jsxs("div", { className: "text-sm text-gray-500", children: [career.roadmap.length, " ", _jsx("span", { className: "text-gray-600", children: "modules" })] })] }), _jsxs(motion.button, { whileHover: { x: 5 }, whileTap: { scale: 0.95 }, className: "w-full py-2 px-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-glow transition-all duration-300 text-white", children: [_jsx("span", { children: "View Roadmap" }), _jsx(ArrowRight, { className: "w-4 h-4" })] })] }));
};
