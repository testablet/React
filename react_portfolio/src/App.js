import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Login/AuthContext';
import { LanguageProvider } from './components/LanguageToggle';
import { ThemeProvider } from './components/ThemeToggle';
import AppContent from './AppContent';
import Login from './components/Login/Login';
// import Manage from './components/Manage';

function App() {
    return (
        <Router>
            <AuthProvider>
                <LanguageProvider>
                    <ThemeProvider>
                        <Routes>
                            <Route path="/" element={<AppContent />} />
                            <Route path="/login" element={<Login />} />
                            {/*<Route path="/manage" element={<Manage />} />*/}
                        </Routes>
                    </ThemeProvider>
                </LanguageProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
