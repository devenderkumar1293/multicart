import React from "react";
import { Link } from "react-router-dom";

function Header({ cart }) {
    return (
        <>
            <header>
                <div className="top_bar">
                    <div className="container">
                        <div className="row align-item justify-space-between">
                            <div>
                                <ul type="none" className="row">
                                    <li>Welcome to Our store Multikart</li>
                                    <li>Call Us: 123 - 456 - 7890</li>
                                </ul>
                            </div>
                            <div>
                                <ul type="none" className="row">
                                    <li>Wishlist</li>
                                    <li>My Account</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <div className="container">
                        <div className="row align-item justify-space-between">
                            <div>
                                <Link to="/"> 
                                    <img src="https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png" alt="Multikart Logo" />
                                </Link>
                            </div>
                            <div>
                                <ul type="none" className="row menu">
                                    <Link to="/">Home</Link>
                                    <Link to="/shop">Shop</Link>
                                    <Link to="/products">Products</Link>
                                    <Link to="/features">Features</Link>
                                    <Link to="/Pages">Pages</Link>
                                    <Link to="/Blogs">Blogs</Link>
                                    
                                    <li>
                                        <Link to="/search"> {/* This link navigates to the cart page */}
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <span className="search-count">
                                                {/* {cart.length} Display number of items in the cart */}
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/setting"> {/* This link navigates to the cart page */}
                                            <i className="fa-solid fa-gear"></i>
                                            <span className="setting-count">
                                                {/* {cart.length} Display number of items in the cart */}
                                            </span>
                                        </Link>
                                    </li>
                                    {/* Cart icon with item count */}
                                    <li>
                                        <Link to="/cart"> {/* This link navigates to the cart page */}
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            <span className="cart-count">
                                                {cart.length} {/* Display number of items in the cart */}
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
