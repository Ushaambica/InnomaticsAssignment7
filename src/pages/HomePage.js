import React from 'react';

function HomePage() {
  const pageStyle = {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp8463647.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
    padding: '20px',
    margin: 0
  };

  const headingStyle = {
    fontSize: '3rem',
    margin: '0.5em 0'
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    margin: '0.5em 0'
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Welcome to the Gift Shop!</h2>
      <p style={paragraphStyle}>Find the perfect gift for your loved ones.</p>
    </div>
  );
}

export default HomePage;
