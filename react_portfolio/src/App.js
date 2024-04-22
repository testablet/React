import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageToggle';

function App() {
    return (
        <LanguageProvider>
            <div className="App">
                <Navbar />
                <main>
                    <Home />
                    {/*<About />*/}
                    {/*<Projects />*/}
                    {/*<Contact />*/}
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
