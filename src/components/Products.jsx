import React from 'react';
import fish1 from '../assets/fish1.jpeg';
import fish2 from '../assets/fish2.jpeg';
import fish3 from '../assets/fish3.jpeg';

const productList = [
  {
    id: 1,
    image: fish1,
    name: "Blue Diamond Discus",
    description: "Grade A+ vibrant blue tropical beauty.",
  },
  {
    id: 2,
    image: fish2,
    name: "Premium Kohaku Koi",
    description: "Select Japanese lineage Japanese Koi.",
  },
  {
    id: 3,
    image: fish3,
    name: "Royal Halfmoon Betta",
    description: "Exquisite fins and majestic colors.",
  },
];

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
