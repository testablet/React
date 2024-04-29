import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import "../../styles/Login/Login.css"
import { useAuth } from './AuthContext';
import { useTranslation } from '../LanguageToggle';
import { useTheme } from '../ThemeToggle';

function LoginForm() {
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const { resetPassword } = useAuth();
    const t = translations[language].login;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: email,
                    password: password,
                    expiresInMins: 30,
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(t.loginSuccess);
                Cookies.set('token', data.token);
                navigate('/')
            } else {
                setMessage(data.error);
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleResetPassword = async () => {
        try {
            await resetPassword(resetEmail);
            setMessage(t.passwordReset);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className={`login-card ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
            {!showResetPassword ? (
                <>
                    <h2 className="title">{t.loginTitle}</h2>
                    <input
                        type="email"
                        placeholder={t.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder={t.passwordPlaceholder}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-button" onClick={handleLogin}>{t.loginButton}</button>
                    <p className="forgot-password" onClick={() => setShowResetPassword(true)}>{t.forgotPassword}</p>
                </>
            ) : (
                <>
                    <h2 className="title">{t.resetPasswordTitle}</h2>
                    <input
                        type="email"
                        placeholder={t.emailPlaceholder}
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                    />
                    <button className="reset-button" onClick={handleResetPassword}>{t.sendMailButton}</button>
                    <p className="back-to-login" onClick={() => setShowResetPassword(false)}>{t.backToLogin}</p>
                </>
            )}
            {message && <p className="message">{translations[language].message}</p>}
        </div>
    );
}

export default LoginForm;
