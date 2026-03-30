import React, { useState } from 'react';
import logoImg from '../assets/logo.jpeg';
import { COMPANY_NAME, COMPANY_NAME_STYLED, navLinks } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar glass animate-fade-in ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="logo-brand">
        <img src={logoImg} alt={`${COMPANY_NAME} Logo`} className="nav-logo-img" />
        <div className="logo">{COMPANY_NAME_STYLED.first}<span>{COMPANY_NAME_STYLED.second}</span></div>
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
