function ImageComponent({ onImageChange }) {
    const changeImage = () => {
        const images = [
            '/imagesTP2/react0.png',
            '/imagesTP2/react1.jpg',
            '/imagesTP2/react2.png',
            '/imagesTP2/react3.png',
        ];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        onImageChange(randomImage);
    };

    return (
        <div>
            <button onClick={changeImage}>Changer l'image</button>
        </div>
    );
}

export default ImageComponent;
