import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import { useTranslation } from "./LanguageToggle";
import { toast } from 'react-toastify';

function ContactForm() {
    const { language, translations } = useTranslation();
    const t = translations[language].contact;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/send-email', formData);
            console.log(response.data);
            toast.success(t.successMessage);
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            toast.error(t.errorMessage);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">{t.name}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">{t.mail}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">{t.text}</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">{t.send}</button>
        </form>
    );
}

export default ContactForm;
