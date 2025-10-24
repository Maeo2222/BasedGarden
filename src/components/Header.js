import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((state) => state.cart.totalItems);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#6B8E23', color: 'white' }}>
      <h2>Houseplant Haven</h2>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        <Link to="/products" style={{ marginRight: '1rem', color: 'white' }}>Products</Link>
        <Link to="/cart" style={{ color: 'white' }}>
          Cart ({cartItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
