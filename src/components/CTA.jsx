import React from 'react';
import { COMPANY_NAME } from '../constants';

const CTA = () => {
  return (
    <section id="contact" className="cta container">
      <div className="cta-box glass animate-fade-in">
        <h2>Ready to Export?</h2>
        <p>Join thousands of aquarium retailers and collectors worldwide who trust {COMPANY_NAME} for their premium stock.</p>
        <br />
        <button className="btn btn-primary">Start Your Inquiry</button>
      </div>
    </section>
  );
};

export default CTA;
