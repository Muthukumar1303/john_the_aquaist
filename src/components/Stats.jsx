import React from 'react';
import { statsList } from '../constants';

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
