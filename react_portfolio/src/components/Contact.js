import React, { useState } from 'react';
import '../styles/Contact.css';
import { useTranslation } from "./LanguageToggle";
import ContactForm from './ContactForm';
import { useTheme } from "./ThemeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const t = translations[language].contact;

    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        const textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        setCopied(true);

        // Réinitialise le message après 2 secondes
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className={`contact ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
            <div className="contact-container">
                <h2>{t.title}</h2>
                <div className="contact-info">
                    <p><strong>{t.phone}: </strong> 06 69 21 07 48</p>
                    <div className="contact-email" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p onClick={() => copyToClipboard(t.mail)} style={{ cursor: 'pointer', marginRight: '10px' }}>
                            <strong>{t.mail}:</strong> teddy.establet@amcnumerique.com
                        </p>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: copied ? (theme === 'light' ? '#333333' : '#ffffff') : (theme === 'light' ? '#3333cc' : '#6699ff'), cursor: 'pointer' }}
                            onClick={() => copyToClipboard(t.mail)}
                        />
                        {copied && <span style={{ marginLeft: '5px', color: theme === 'light' ? '#333333' : '#ffffff' }}>{t.copiedMessage}</span>}
                    </div>
                    <p><strong><a href="https://www.linkedin.com/in/teddy-establet-b783b41b6/">LinkedIn</a></strong></p>
                </div>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;
