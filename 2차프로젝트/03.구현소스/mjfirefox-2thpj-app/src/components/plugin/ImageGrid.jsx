import React from 'react';
import '../../css/image_grid.scss';

const images = [
  { src: 'path/to/image1.png', alt: 'Image 1' },
  { src: 'path/to/image2.png', alt: 'Image 2' },
  { src: 'path/to/image3.png', alt: 'Image 3' },
  { src: 'path/to/image4.png', alt: 'Image 4' },
  { src: 'path/to/image5.png', alt: 'Image 5' },
  { src: 'path/to/image6.png', alt: 'Image 6' },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;