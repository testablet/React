import React from 'react';
import { useTranslation } from './LanguageToggle';
import '../styles/Footer.css';

function Footer() {
    const { language, translations } = useTranslation();
    const copyrightText = translations[language].copyright;

    return (
        <footer>
            <p>{copyrightText}</p>
        </footer>
    );
}

export default Footer;
