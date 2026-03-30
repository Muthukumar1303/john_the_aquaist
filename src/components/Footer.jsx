import React from 'react';
import { COMPANY_NAME_STYLED, COMPANY_FULL_NAME, socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-content">
        <div className="logo">{COMPANY_NAME_STYLED.first}<span>{COMPANY_NAME_STYLED.second}</span></div>
        <div className="copyright">© 2026 {COMPANY_FULL_NAME} All rights reserved.</div>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
