import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageToggle';
import { ThemeProvider, useTheme } from './components/ThemeToggle';

function AppContent() {
    const { theme } = useTheme();
    return (
        <div className="App content">
            <Navbar />
            <main className={`${theme === 'light' ? 'theme-light' : 'theme-dark'}}`}>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="contact"><Contact /></section>
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AppContent />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
