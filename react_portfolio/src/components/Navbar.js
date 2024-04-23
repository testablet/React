import React, { useState, useEffect } from 'react';
import { useTranslation } from './LanguageToggle';
import { useTheme } from "./ThemeToggle";
import '../styles/Navbar.css';

function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const { language, translations, toggleLanguage } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const t = translations[language].navbar;

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: scrollPosition > 20 ?
            (theme === 'light' ? 'rgba(51, 51, 51, 0.8)' : 'rgba(255, 255, 255, 0.8)')
            : (theme === 'light' ? 'transparent' : 'transparent'),
        transition: 'background-color 0.3s ease-in-out'
    };

    return (
        <nav className={`navbar ${theme === 'light' ? 'theme-dark' : 'theme-light'}`} style={navbarStyle}>
            <div className="container">
                <h1 className="logo">ESTABLET Teddy</h1>
                <ul className="nav-links">
                    <li><a href="#home">{t.home}</a></li>
                    <li><a href="#about">{t.about}</a></li>
                    <li><a href="#projects">{t.projects}</a></li>
                    <li><a href="#contact">{t.contact}</a></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme}>{translations[language].themeToggle}</button>
                <button className="language-toggle" onClick={toggleLanguage}>{translations[language].themeLangage}</button>
            </div>
        </nav>
    );
}

export default Navbar;
