import React, { useState } from 'react';
import './App.css';
import ParagraphComponent from './ParagraphComponent';
import ImageComponent from './ImageComponent';
import SearchComponent from './SearchComponent';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentImage, setCurrentImage] = useState('/imagesTP2/react0.png');

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  const handleSearchResult = (data) => {
    console.log(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
            <div>
              <h1>Page d'accueil</h1>
              <button onClick={() => setCurrentPage('paragraph')}>TP 1</button>
              <button onClick={() => setCurrentPage('image')}>TP 2</button>
              <button onClick={() => setCurrentPage('search')}>TP 3</button>
            </div>
        );
      case 'paragraph':
        return (
            <div>
              <button onClick={() => setCurrentPage('home')}
                      style={{position: 'absolute', top: '10px', left: '10px'}}>Accueil
              </button>
              <div style={{marginTop: '50px'}}>
                <ParagraphComponent/>
              </div>
            </div>
        );
      case 'image':
        return (
            <div>
              <button onClick={() => setCurrentPage('home')} style={{ position: 'absolute', top: '10px', left: '10px' }}>Accueil</button>
              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                <div style={{ flex: 1, marginLeft: '10px', marginRight: '10px', textAlign: 'left' }}>
                  <ParagraphComponent paragraphStyle={{ color: 'black', backgroundColor: 'white', fontSize: '16px', fontFamily: 'Arial' }} />
                </div>
                <div style={{ flex: 1, marginLeft: '10px', marginRight: '10px', textAlign: 'center' }}>
                  <ImageComponent onImageChange={handleImageChange} />
                  <img src={currentImage} alt="Current" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
        );

      case 'search':
        return (
            <div>
              <button onClick={() => setCurrentPage('home')} style={{ position: 'absolute', top: '10px', left: '10px' }}>Accueil</button>
              <div style={{ marginTop: '50px' }}>
                <SearchComponent onSearch={handleSearchResult} />
              </div>
            </div>
        );
      default:
        return <div>Page non trouvée</div>;
    }
  };

  return (
      <div className="App">
        {renderPage()}
      </div>
  );
}

export default App;
