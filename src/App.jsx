import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';
import logoImg from './assets/logo.jpeg';

function App() {
  return (
    <div className="app">
      {/* Global Subtle Logo Watermark Background */}
      <div 
        style={{ 
          position: 'fixed', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          opacity: 0.10, 
          width: '80vw', 
          maxWidth: '800px',
          height: '80vh', 
          backgroundImage: `url(${logoImg})`, 
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center',
          pointerEvents: 'none',
          mixBlendMode: 'lighten',
          zIndex: 0
        }} 
      ></div>

      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Products />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
