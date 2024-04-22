import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <Navbar />
        <main>
          <Home />
          {/*<About />*/}
          {/*<Projects />*/}
          {/*<Contact />*/}
        </main>
        <footer>
          <p>Copyright © 2024 - Tous droits réservés</p>
        </footer>
      </div>
  );
}

export default App;
