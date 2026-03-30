import React from 'react';
import { productList } from '../constants';

const Products = () => {
  return (
    <section id="products" className="products container">
      <div className="section-header">
        <h2>Premium Selection</h2>
        <p>Browse our hand-picked collection of rare and vibrant ornamental fish.</p>
      </div>
      <div className="products-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
