import React from 'react';
import { useTranslation } from './LanguageToggle';
import '../styles/Home.css';
import {useTheme} from "./ThemeToggle";

function Home() {
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const t = translations[language].home;

    return (
        <div className={`home ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
            <h1>{t.nameandlastname}</h1>
            <p>{t.description}</p>
        </div>
    );
}

export default Home;
