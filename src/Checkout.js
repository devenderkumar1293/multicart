import React from 'react';
import { Link } from 'react-router-dom';

export default function Checkout({ cart }) {
  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Your Cart is Empty</h2>
        <Link to="/shop" className="btn btn-primary">Go to Shop</Link>
      </div>
    );
  }

  // Calculate total price of all cart items
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container checkout_page">
      <h2>Checkout</h2>
      <ul className="checkout_items_list">
        {cart.map((product, index) => (
          <li key={index} className="checkout_item">
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <div>
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="checkout_summary">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button className="btn btn-primary">Confirm Purchase</button>
      </div>
    </div>
  );
}
