import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';


const Navbar = () => {
  
const noOfProducts = useSelector((state)=> state.cart)

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {noOfProducts.length}</span>
            </div>
        </div>
    );
};

export default Navbar;