import React, { useState, createContext, useContext } from 'react';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const translations = {
        en: enTranslations,
        fr: frTranslations
    };

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'fr' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
