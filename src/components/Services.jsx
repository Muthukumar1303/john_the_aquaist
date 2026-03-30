import React from 'react';

const serviceList = [
  {
    id: 1,
    icon: "✈️",
    title: "Express Logistics",
    description: "Direct door-to-door delivery within 48-72 hours via our specialized temperature-controlled air freight network.",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Live Arrival",
    description: "Our proprietary oxygenation and packing techniques ensure your fish arrive healthy and vibrant, every single time.",
  },
  {
    id: 3,
    icon: "🌿",
    title: "Ethical Sourcing",
    description: "We partner only with certified sustainable breeders and collectors to protect delicate aquatic ecosystems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="features container">
      <div className="section-header">
        <h2>Why Choose Aqua Elara?</h2>
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
