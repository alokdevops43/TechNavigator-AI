import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Navbar, Hero, CareersGrid, Footer } from '../components';
import { Zap, BookOpen, Rocket, TrendingUp } from 'lucide-react';
export const Home = () => {
    return (_jsxs("div", { className: "min-h-screen bg-dark-900 text-white overflow-hidden", children: [_jsx(Navbar, {}), _jsx(Hero, {}), _jsx(CareersGrid, {}), _jsx("section", { id: "features", className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-900 to-dark-800", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl sm:text-5xl font-bold mb-4 gradient-text", children: "Why Choose TechNavigator?" }), _jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "Everything you need to navigate your tech career journey with confidence and clarity" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
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
                            ].map((feature, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "glass rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 group", children: [_jsx("div", { className: "mb-4 inline-flex p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl opacity-90 group-hover:opacity-100 group-hover:shadow-glow transition-all duration-300", children: _jsx(feature.icon, { className: "w-6 h-6 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: feature.title }), _jsx("p", { className: "text-gray-400 text-sm", children: feature.description })] }, index))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, className: "text-center mt-16", children: [_jsx("p", { className: "text-gray-400 mb-6", children: "Ready to start your tech career journey?" }), _jsx(motion.a, { href: "#careers", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-bold hover:shadow-glow transition-all duration-300", children: "Explore Careers" })] })] }) }), _jsx(Footer, {})] }));
};
