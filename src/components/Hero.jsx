import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <header id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(1, 4, 9, 0.7), rgba(1, 4, 9, 0.7)), url(${heroImg})` }}>
      <div className="hero-bg-blur"></div>
      <div className="container hero-content animate-fade-in">
        <h1>Pioneering Excellence in <span>Live Fish Exports</span></h1>
        <p>Global logistics, sustainable sourcing, and the world's most vibrant aquatic life delivered directly to your doorstep with 100% live arrival guarantee.</p>
        <div className="hero-btns">
          <button className="btn btn-primary">Explore Collection</button>
          <button className="btn btn-outline">Our Logistics</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
