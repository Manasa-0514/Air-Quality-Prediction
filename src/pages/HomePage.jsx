import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source 
          src="https://www.w3schools.com/html/mov_bbb.mp4" 
          type="video/mp4" 
        />
        {/* Note: The above is a placeholder video. You can replace the src with a local file like '/air-quality.mp4' in your public folder */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="video-overlay">
        <div className="hero-content glass-panel">
          <h1>Air Quality Insight</h1>
          <p>Discover real-time and predicted Air Quality Index (AQI) data using advanced Machine Learning models.</p>
          <button 
            className="cta-button" 
            onClick={() => navigate('/prediction')}
            aria-label="Start Prediction"
          >
            Start Prediction
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
