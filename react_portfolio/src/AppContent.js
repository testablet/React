import React from 'react';
import "./App.css"
import { Navigate } from 'react-router-dom';
import { useAuth } from './components/Login/AuthContext';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/manage" />;
    }

    return (
        <div className="App">
            <Navbar />
            <main>
                <section id="home"><Home /></section>
                <section id="contact"><Contact /></section>
            </main>
            <Footer />
        </div>
    );
}

export default AppContent;
