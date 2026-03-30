import React, { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.jpeg'
import heroImg from './assets/hero.png'
import fish1 from './assets/fish1.jpeg'
import fish2 from './assets/fish2.jpeg'
import fish3 from './assets/fish3.jpeg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar glass animate-fade-in ${isMenuOpen ? 'menu-active' : ''}`}>
        <div className="logo-brand">
          <img src={logoImg} alt="Aqua Elara Logo" className="nav-logo-img" />
          <div className="logo">AQUA<span>ELARA</span></div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
          <a href="#products" className="nav-link" onClick={closeMenu}>Our Fish</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Inquiry</a>
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="services" className="features container">
        <div className="section-header">
          <h2>Why Choose Aqua Elara?</h2>
          <p>We set the industry gold standard for live ornamental fish transportation and quality control.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card glass">
            <div className="feature-icon">✈️</div>
            <h3>Express Logistics</h3>
            <p>Direct door-to-door delivery within 48-72 hours via our specialized temperature-controlled air freight network.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🛡️</div>
            <h3>Live Arrival </h3>
            <p>Our proprietary oxygenation and packing techniques ensure your fish arrive healthy and vibrant, every single time.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon">🌿</div>
            <h3>Ethical Sourcing</h3>
            <p>We partner only with certified sustainable breeders and collectors to protect delicate aquatic ecosystems.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats glass container">
        <div className="stats-grid">
          <div className="stat-item">
            <h4>50+</h4>
            <p>Countries Served</p>
          </div>
          <div className="stat-item">
            <h4>1200+</h4>
            <p>Species Available</p>
          </div>
          <div className="stat-item">
            <h4>99.8%</h4>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <h4>24/7</h4>
            <p>Expert Support</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products container">
        <div className="section-header">
          <h2>Premium Selection</h2>
          <p>Browse our hand-picked collection of rare and vibrant ornamental fish.</p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src={fish1} alt="Blue Diamond Discus" />
            </div>
            <div className="product-info">
              <h3>Blue Diamond Discus</h3>
              <p>Grade A+ vibrant blue tropical beauty.</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src={fish2} alt="Premium Kohaku Koi" />
            </div>
            <div className="product-info">
              <h3>Premium Kohaku Koi</h3>
              <p>Select Japanese lineage Japanese Koi.</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src={fish3} alt="Royal Halfmoon Betta" />
            </div>
            <div className="product-info">
              <h3>Royal Halfmoon Betta</h3>
              <p>Exquisite fins and majestic colors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta container">
        <div className="cta-box glass animate-fade-in">
          <h2>Ready to Export?</h2>
          <p>Join thousands of aquarium retailers and collectors worldwide who trust Aqua Elara for their premium stock.</p>
          <br />
          <button className="btn btn-primary">Start Your Inquiry</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container">
        <div className="footer-content">
          <div className="logo">AQUA<span>ELARA</span></div>
          <div className="copyright">© 2026 Aqua Elara Exports Inc. All rights reserved.</div>
          <div className="social-links">
            <a href="#" className="nav-link">LinkedIn</a>
            <a href="#" className="nav-link">Instagram</a>
            <a href="#" className="nav-link">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
