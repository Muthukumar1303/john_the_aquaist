import React from 'react';
import { COMPANY_NAME, CONTACT_DETAILS } from '../constants';

const CTA = () => {
  return (
    <section id="contact" className="cta container">
      <div className="cta-box glass animate-fade-in">
        <h2>Ready to Export?</h2>
        <p>Join thousands of aquarium retailers and collectors worldwide who trust {COMPANY_NAME} for their premium stock.</p>

        <div className="contact-info" style={{ margin: '2rem 0' }}>
          <p style={{ marginBottom: '0.5rem' }}>
            📧 <a href={`mailto:${CONTACT_DETAILS.email}`} className="nav-link">{CONTACT_DETAILS.email}</a>
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            📞 <a href={`tel:${CONTACT_DETAILS.phone.replace(/[^0-9+]/g, '')}`} className="nav-link">{CONTACT_DETAILS.phone}</a>
          </p>
          <p>
            📍 <a href={CONTACT_DETAILS.mapUrl} target="_blank" rel="noopener noreferrer" className="nav-link">{CONTACT_DETAILS.address}</a>
          </p>
        </div>

        <button className="btn btn-primary">Start Your Inquiry</button>
      </div>
    </section>
  );
};

export default CTA;
