import React from 'react';

const socialLinks = [
  { id: 1, label: "LinkedIn", url: "#" },
  { id: 2, label: "Instagram", url: "#" },
  { id: 3, label: "Facebook", url: "#" },
];

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-content">
        <div className="logo">AQUA<span>ELARA</span></div>
        <div className="copyright">© 2026 Aqua Elara Exports Inc. All rights reserved.</div>
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
