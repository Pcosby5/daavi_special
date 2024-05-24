import React from 'react';
import './Hero.css';

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-text">
                <h1>Welcome to Our Restaurant!</h1>
                <p>Discover the best food in town.</p>
                <a href="#menu" className="menu-button">View Menu</a>
            </div>
        </div>
    );
}
