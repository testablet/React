import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);

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
        backgroundColor: scrollPosition > 20 ? '#333' : 'transparent',
        transition: 'background-color 0.3s ease-in-out'
    };

    return (
        <nav className="navbar" style={navbarStyle}>
            <div className="container">
                <h1 className="logo">ESTABLET Teddy</h1>
                <ul className="nav-links">
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="theme-toggle">Thème</button>
                <button className="language-toggle">Langue</button>
            </div>
        </nav>
    );
}

export default Navbar;
