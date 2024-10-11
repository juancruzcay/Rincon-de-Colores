import React from 'react';

const images = [
  '/images/trabajo1.jpg',
  '/images/trabajo2.jpg',
  '/images/trabajo3.jpg'
];

export default function Gallery() {
  return (
    <div>
      <h2>Nuestros Trabajos</h2>
      <div>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Trabajo ${index + 1}`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
}
