import React, { useState, createContext, useContext } from 'react';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';
import esTranslations from '../translations/es.json';
import deTranslations from '../translations/it.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');
    const translations = {
        en: enTranslations,
        fr: frTranslations,
        es: esTranslations,
        de: deTranslations
    };

    const toggleLanguage = () => {
        setLanguage(prevLanguage => {
            switch (prevLanguage) {
                case 'en':
                    return 'fr';
                case 'fr':
                    return 'es';
                case 'es':
                    return 'de';
                case 'de':
                    return 'en';
                default:
                    return 'en';
            }
        });
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
