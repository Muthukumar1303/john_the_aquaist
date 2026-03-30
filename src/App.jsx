import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
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
