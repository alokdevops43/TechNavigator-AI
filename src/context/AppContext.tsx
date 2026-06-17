import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CareerProgress } from '../types';

interface AppContextType {
  selectedCareer: string | null;
  setSelectedCareer: (careerId: string) => void;
  careerProgress: { [key: string]: CareerProgress };
  updateProgress: (careerId: string, progress: CareerProgress) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [careerProgress, setCareerProgress] = useState<{ [key: string]: CareerProgress }>({});

  const updateProgress = (careerId: string, progress: CareerProgress) => {
    setCareerProgress(prev => ({
      ...prev,
      [careerId]: progress,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        selectedCareer,
        setSelectedCareer,
        careerProgress,
        updateProgress,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
