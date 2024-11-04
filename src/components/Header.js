import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff'
  };

  const navStyle = {
    display: 'flex',
    gap: '15px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px'
  };

  const linkHoverStyle = {
    textDecoration: 'underline'
  };

  return (
    <header style={headerStyle}>
      <h1>Gift Shop</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
