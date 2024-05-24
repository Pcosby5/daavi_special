import React from 'react';
import Hero from '../Hero/Hero';
import MenuPage from './MenuPage';
import GalleryPage from './GalleryPage';
import ReviewsPage from './ReviewsPage';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <h2>Welcome to Daavi Special</h2>
      <p>Experience the taste of authentic Ghanaian cuisine.</p>
      <MenuPage />
      <GalleryPage />
      <ReviewsPage />
    </div>
  );
}

export default HomePage;
