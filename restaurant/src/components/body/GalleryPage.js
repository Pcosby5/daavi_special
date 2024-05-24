import React from 'react';

const images = [
  { src: process.env.PUBLIC_URL + '/fufu.jpg', alt: 'Banku with Okro Stew', caption: 'Banku, a staple Ghanaian dish made from fermented cornmeal.' },
  { src: process.env.PUBLIC_URL + '/kokonte.jpg', alt: 'Fufu with Peanut Butter Soup', caption: 'Fufu, a popular West African dish made from pounded plantains.' },
  { src: process.env.PUBLIC_URL + '/rice.jpg', alt: 'Rice with Stew', caption: 'Fried rice, a versatile dish made from rice.' },
];

const ImageItem = ({ src, alt, caption }) => {
  return (
    <div className="image-item">
      <img src={src} alt={alt} />
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <p>Photos of our restaurant and dishes.</p>
      <div className="image-grid">
        {images.map((image) => (
          <ImageItem key={image.src} {...image} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
