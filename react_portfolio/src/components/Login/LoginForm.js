import React, { useState } from 'react';
import "../../styles/Login/Login.css"
import { useAuth } from './AuthContext';
import { useTranslation } from '../LanguageToggle';
import { useTheme } from '../ThemeToggle';

function LoginForm() {
    const { language, translations } = useTranslation();
    const { theme } = useTheme();
    const { login, resetPassword } = useAuth();
    const t = translations[language].login;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showResetPassword, setShowResetPassword] = useState(false);

    const handleLogin = async () => {
        try {
            await login(email, password);
            setMessage(t.loginSuccess);
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
