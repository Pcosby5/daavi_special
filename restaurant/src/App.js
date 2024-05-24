import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import HomePage from './components/body/HomePage';
import AboutPage from './components/body/AboutPage';
import MenuPage from './components/body/MenuPage';
import GalleryPage from './components/body/GalleryPage';
import ReservationPage from './components/body/ReservationPage';
import ReviewsPage from './components/body/ReviewsPage';
import ContactPage from './components/body/ContactPage';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
