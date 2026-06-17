import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Home } from './pages/Home';
import { Roadmap } from './pages/Roadmap';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap/:careerId?" element={<Roadmap />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
