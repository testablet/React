import React from 'react';
import "./App.css"
import { Navigate } from 'react-router-dom';
import { useAuth } from './components/Login/AuthContext';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from "./components/About";
import Blog from "./components/Blog";

function AppContent() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/manage" />;
    }

    return (
        <div className="App">
            <Navbar />
            <main>
                <section id="home"><Home/></section>
                <section id="about"><About/></section>
                <section id="blog"><Blog/></section>
                <section id="contact"><Contact/></section>
            </main>
            <Footer/>
        </div>
    );
}

export default AppContent;
