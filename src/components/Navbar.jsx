import React, { useState } from 'react';
import logoImg from '../assets/logo.jpeg';

const navLinks = [
  { id: 1, href: '#home', label: 'Home' },
  { id: 2, href: '#services', label: 'Services' },
  { id: 3, href: '#products', label: 'Our Fish' },
  { id: 4, href: '#contact', label: 'Inquiry' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar glass animate-fade-in ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="logo-brand">
        <img src={logoImg} alt="Aqua Elara Logo" className="nav-logo-img" />
        <div className="logo">AQUA<span>ELARA</span></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={link.href} className="nav-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <button className="btn btn-primary mobile-only-btn">Track Shipment</button>
      </div>
      <div className="nav-actions">
        <button className="btn btn-primary desktop-only-btn">Track Shipment</button>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
