import React, { useState } from 'react';

function App() {
    const [paragraphStyle, setParagraphStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        fontSize: '16px',
        fontFamily: 'Arial'
    });

    const changeStyle = () => {
        const colors = ['red', 'blue', 'green', 'orange'];
        const fonts = ['Arial', 'Verdana', 'Georgia', 'Courier New'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

        setParagraphStyle({
            color: randomColor,
            backgroundColor: randomColor === 'white' ? 'black' : 'white',
            fontSize: `${Math.floor(Math.random() * 16) + 14}px`,
            fontFamily: randomFont
        });
    };

    return (
        <div>
            <p style={paragraphStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <button onClick={changeStyle}>Changer le style</button>
        </div>
    );
}

export default App;
