import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../LanguageToggle';
import { useTheme } from "../ThemeToggle";
import '../../styles/Navbar.css';

function Navbar() {
    const [navbarClass, setNavbarClass] = useState('');
    const { language, translations, toggleLanguage } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const t = translations[language].navbar;
    const navigate = useNavigate();
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

    const redirectToLogin = () => {
        navigate('/login');
    };

    const redirectToHome = () => {
        navigate('/');
    };

    return (
        <nav ref={navRef} className={`navbar ${theme === 'light' ? 'theme-dark' : 'theme-light'} ${navbarClass}`}>
            <div className="container">
                <h1 className="logo">{translations[language].home.nameandlastname}</h1>
                <ul className="nav-links">
                    <li>
                        <button onClick={redirectToHome}>{t.home}</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('about')}>{t.about}</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('projects')}>{t.projects}</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('blog')}>{t.blog}</button>
                    </li>
                    <li>
                        <button onClick={redirectToHome}>{t.contact}</button>
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
