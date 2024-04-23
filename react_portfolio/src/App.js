import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageToggle';
import { ThemeProvider, useTheme } from './components/ThemeToggle';

function AppContent() {
    const { theme } = useTheme();
    return (
        <div className="App">
            <Navbar />
            <main className={`${theme}`}>
                <section id="home"><Home /></section>
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
