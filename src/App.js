import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Category from './Category';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === id);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1); // Remove only one instance
        return updatedCart;
      }
      return prevCart;
    });
  };

  return (
    <>
      <Router>
        <div className='app'>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="/product/:id" element={<SingleProduct addToCart={addToCart} />} />
            {/* Pass removeFromCart to Cart component */}
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} /> 
            <Route path="/category/:categoryName" element={<Category />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
