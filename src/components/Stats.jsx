import React from 'react';

const statsList = [
  { id: 1, value: "50+", label: "Countries Served" },
  { id: 2, value: "1200+", label: "Species Available" },
  { id: 3, value: "99.8%", label: "Success Rate" },
  { id: 4, value: "24/7", label: "Expert Support" },
];

const Stats = () => {
  return (
    <section className="stats glass container">
      <div className="stats-grid">
        {statsList.map((stat) => (
          <div key={stat.id} className="stat-item">
            <h4>{stat.value}</h4>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
