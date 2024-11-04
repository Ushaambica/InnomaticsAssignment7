import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 20px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    fontSize: '14px'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Gift Shop. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
