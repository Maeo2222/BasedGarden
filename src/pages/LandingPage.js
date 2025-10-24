import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Background from '../images/Background.jpg';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container" style={{ backgroundImage: `url(${Background})` }}>
      <h1>Welcome to Houseplant Haven!</h1>
      <p>Your one-stop shop for houseplants.</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
}

export default LandingPage;
