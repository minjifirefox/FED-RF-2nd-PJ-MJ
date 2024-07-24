import React from 'react';
import '../../css/image_grid.scss';

const images = [
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_1.jpg', alt: 'Image 1' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_2.jpg', alt: 'Image 2' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_3.jpg', alt: 'Image 3' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_4.jpg', alt: 'Image 4' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_5.jpg', alt: 'Image 5' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_6.jpg', alt: 'Image 6' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_7.jpg', alt: 'Image 7' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_8.jpg', alt: 'Image 8' },
  { src: process.env.PUBLIC_URL + '/images/tag_banner01_9.jpg', alt: 'Image 9' },
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