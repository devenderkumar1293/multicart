import React from 'react';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

export default function Cart({ cart, removeFromCart }) {
  
  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Your Cart is Empty</h2>
        <Link to="/shop" className="btn btn-primary">Go to Shop</Link>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container cart_page">
      <h2>Your Cart</h2>
      <ul className="cart_items_list">
        {cart.map((product) => (
          <li key={product.id} className="cart_item">
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
            <div>
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              <button 
                className="btn btn-danger"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart_summary">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3><br></br>
        <Link to="/Checkout" className="btn-solid btn text_big">Checkout</Link>
      </div>
    </div>
  );
}
