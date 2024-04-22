import React from 'react';
import { useTranslation } from './LanguageToggle';
import '../styles/Home.css';

function Home() {
    const { language, translations } = useTranslation();
    const t = translations[language].home;

    return (
        <div className="home">
            <h1>{t.welcome}</h1>
            <p>{t.description}</p>
        </div>
    );
}

export default Home;
