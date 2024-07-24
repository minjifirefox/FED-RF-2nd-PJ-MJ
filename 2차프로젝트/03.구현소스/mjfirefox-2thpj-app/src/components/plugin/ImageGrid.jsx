import React from 'react';
import '../../css/image_grid.scss';

const images = [
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (1).jpg', alt: 'Image 1' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (2).jpg', alt: 'Image 2' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (3).jpg', alt: 'Image 3' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (4).jpg', alt: 'Image 4' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (5).jpg', alt: 'Image 5' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (6).jpg', alt: 'Image 6' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (7).jpg', alt: 'Image 7' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (8).jpg', alt: 'Image 8' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01 (9).jpg', alt: 'Image 9' },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;