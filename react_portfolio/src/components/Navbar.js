import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from './LanguageToggle';
import { useTheme } from "./ThemeToggle";
import '../styles/Navbar.css';

function Navbar() {
    const [navbarClass, setNavbarClass] = useState('');
    const { language, translations, toggleLanguage } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const t = translations[language].navbar;
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            if (position > 100) {
                setNavbarClass('scrolled');
            } else {
                setNavbarClass('');
            }
        };

        const navElement = navRef.current;
        navElement.addEventListener('scroll', handleScroll);

        return () => {
            navElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav ref={navRef} className={`navbar ${theme === 'light' ? 'theme-dark' : 'theme-light'} ${navbarClass}`}>
            <div className="container">
                <h1 className="logo">ESTABLET Teddy</h1>
                <ul className="nav-links">
                    <li><button onClick={() => scrollToSection('home')}>{t.home}</button></li>
                    <li><button onClick={() => scrollToSection('about')}>{t.about}</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>{t.projects}</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>{t.contact}</button></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme}>{translations[language].themeToggle}</button>
                <button className="language-toggle" onClick={toggleLanguage}>{translations[language].themeLangage}</button>
            </div>
        </nav>
    );
}

export default Navbar;
