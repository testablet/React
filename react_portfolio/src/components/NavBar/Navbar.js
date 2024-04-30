import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../LanguageToggle';
import { useTheme } from "../ThemeToggle";
import '../../styles/Navbar.css';

function Navbar() {
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ backgroundColor, setBackgroundColor ] = useState("rgba(0, 0, 0, 0)");
    const { language, translations, toggleLanguage } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const t = translations[language].navbar;
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
            const newBackgroundColor = position <= 5 ? `rgba(${theme === 'dark' ? '255, 255, 255' : '0, 0, 0'}, 0)` : `rgba(${theme === 'dark' ? '255, 255, 255' : '0, 0, 0'}, 1)`;
            setBackgroundColor(newBackgroundColor);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const redirectToLogin = () => {
        navigate('/login');
    };

    return (
        <nav className={`navbar ${theme === 'dark' ? 'theme-light' : 'theme-dark'}`} style={{ backgroundColor }}>
            <div className="container">
                <h1 className="logo">ESTABLET Teddy</h1>
                <ul className="nav-links">
                    <li>
                        <button onClick={() => scrollToSection('home')}>{t.home}</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('about')}>{t.about}</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('blog')}>{t.blog}</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')}>{t.contact}</button>
                    </li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme}>{translations[language].themeToggle}</button>
                <button className="language-toggle" onClick={toggleLanguage}>{translations[language].themeLangage}</button>
                <button className="login-toggle" onClick={redirectToLogin}>{translations[language].themeLogin}</button>
            </div>
        </nav>
    );
}

export default Navbar;
