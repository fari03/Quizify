import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: 'purple', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Quizzify</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/AdminLogin" style={{ margin: '20px', textDecoration: 'none', color: 'white', fontSize: '24px' }}>Admin Login</Link>
        <Link to="/StudentLogin" style={{ margin: '20px', textDecoration: 'none', color: 'white', fontSize: '24px' }}>Student Login</Link>
      </div>
    </div>
  );
}

export default Home;
