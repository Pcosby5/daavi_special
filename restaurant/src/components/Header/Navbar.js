import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><button className="nav-button">Get Started</button></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><img src="/logo.jpg" alt='logo' className='nav-logo'/></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
