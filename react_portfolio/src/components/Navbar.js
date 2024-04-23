import React from 'react';
import { useTranslation } from './LanguageToggle';
import { useTheme } from "./ThemeToggle";
import '../styles/Navbar.css';

function Navbar() {
    const { language, translations, toggleLanguage } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const t = translations[language].navbar;
    const themeToggleText = translations[language].themeToggle;
    const langageToggleText = translations[language].themeLangage;



    return (
        <nav className={`navbar ${theme === 'light' ? 'theme-dark' : 'theme-light'}`}>
            <div className="container">
                <h1 className="logo">ESTABLET Teddy</h1>
                <ul className="nav-links">
                    <li><a href="#home">{t.home}</a></li>
                    <li><a href="#about">{t.about}</a></li>
                    <li><a href="#projects">{t.projects}</a></li>
                    <li><a href="#contact">{t.contact}</a></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme}>{themeToggleText}</button>
                <button className="language-toggle" onClick={toggleLanguage}>{langageToggleText}</button>
            </div>
        </nav>
    );
}


export default Navbar;
