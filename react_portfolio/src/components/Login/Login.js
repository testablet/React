import React from 'react';
import '../../styles/Login/Login.css';
import Footer from '../Footer';
import NavbarLogin from '../NavBar/NavbarLogin';
import LoginForm from './LoginForm';
import {useTheme} from "../ThemeToggle";

function Login() {
    const { theme } = useTheme();

    return (
        <div className="App">
            <NavbarLogin />
            <main className={`login module-spacing ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
                <LoginForm />
            </main>
            <Footer />
        </div>
    );
}

export default Login;
