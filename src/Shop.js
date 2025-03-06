import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="Product container">
      {products.map((product) => (
        <div key={product.id}>
          <div className="sp_product">
            <Link to={`/product/${product.id}`}>
              <img className="" src={product.image} alt={product.title} />
            </Link>

            <h3 className="sp_product_title">{product.title}</h3>
            <Link to={`/category/${product.category}`}><p>{product.category}</p></Link>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
