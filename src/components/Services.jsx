import React from 'react';
import { COMPANY_NAME, serviceList } from '../constants';

const Services = () => {
  return (
    <section id="services" className="features container">
      <div className="section-header">
        <h2>Why Choose {COMPANY_NAME}?</h2>
        <p>We set the industry gold standard for live ornamental fish transportation and quality control.</p>
      </div>
      <div className="features-grid">
        {serviceList.map((service) => (
          <div key={service.id} className="feature-card glass">
            <div className="feature-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
