import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const AppContext = createContext(undefined);
export const AppProvider = ({ children }) => {
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [careerProgress, setCareerProgress] = useState({});
    const updateProgress = (careerId, progress) => {
        setCareerProgress(prev => ({
            ...prev,
            [careerId]: progress,
        }));
    };
    return (_jsx(AppContext.Provider, { value: {
            selectedCareer,
            setSelectedCareer,
            careerProgress,
            updateProgress,
            searchQuery,
            setSearchQuery,
        }, children: children }));
};
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
};
