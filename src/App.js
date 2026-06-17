import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Home } from './pages/Home';
import { Roadmap } from './pages/Roadmap';
const App = () => {
    return (_jsx(AppProvider, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/roadmap/:careerId?", element: _jsx(Roadmap, {}) })] }) }) }));
};
export default App;
