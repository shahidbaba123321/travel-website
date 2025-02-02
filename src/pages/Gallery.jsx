// src/pages/Gallery.jsx
import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const images = [
    '/assets/images/gallery1.jpg',
    '/assets/images/gallery2.jpg',
    '/assets/images/gallery3.jpg',
  ];

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
