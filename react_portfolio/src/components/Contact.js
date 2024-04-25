import React, { useState } from 'react';
import '../styles/Contact.css';
import { useTranslation } from "./LanguageToggle";
import ContactForm from './ContactForm';
import { useTheme } from "./ThemeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
                    <p><strong>{t.titlePhone}: </strong>{t.phoneNum}</p>
                    <div className="contact-email">
                        <p onClick={() => copyToClipboard(t.mailText)} className="contact-text" style={{ cursor: 'pointer' }}>
                            <strong>{t.titleMail}: </strong>{t.mailText}
                        </p>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="contact-icon"
                            style={{ color: copied ? (theme === 'light' ? '#333333' : '#ffffff') : (theme === 'light' ? '#3333cc' : '#6699ff'), cursor: 'pointer' }}
                            onClick={() => copyToClipboard(t.mail)}
                        />
                        {copied && <span className="copied-message">{t.copiedMessage}</span>}
                    </div>
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="linkedin-icon"
                        onClick={() => window.open("https://www.linkedin.com/in/teddy-establet-b783b41b6/", "_blank")}
                    />
                </div>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;
