// src/components/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">LinkClick</h1>
        <p className="tagline">simple. secure. for everyone.</p>
      </header>

      <section className="introduction">
        <h2>Why LinkClick?</h2>
        <span className="arrow-down">↓</span>
      </section>

      <div className="services-section">
        <Link to="/government-services" className="service-card">
          <p className="service-title">Government Services</p>
          <img
            src="https://files.oaiusercontent.com/file-5ZwsCAQ5nT1yqzywFxGBd3?se=2025-05-07T16%3A23%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D019ee379-e5ce-438d-a840-8a821bde025e.png&sig=yblFCE1pJn8o%2Bw3IfkNJJwax2WF1IknWEtQR6YR/jV8%3D"
            alt="Government Services"
          />
        </Link>

        <Link to="/tutorials" className="service-card">
          <p className="service-title">Tutorials</p>
          <img
            src="https://api.deepai.org/job-view-file/8eacadae-05fe-4f96-9602-c5413b27b06e/outputs/output.jpg"
            alt="Tutorials"
          />
        </Link>

        <Link to="/reminders" className="service-card">
          <p className="service-title">Reminders</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/254/827/non_2x/reminder-3d-render-mobile-phone-in-hand-with-notification-bell-button-and-floating-elements-on-purple-png.png"
            alt="Reminders"
          />
        </Link>

        {/* ✅ New Services Link */}
        <Link to="/services" className="service-card">
          <p className="service-title">Services</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTti7v_vXcKPIykyOz7C-49pneI2IIcFTWO6vYNEs1g7txOKBWTIw6Fsp2_E7p98q2A1s&usqp=CAU"
            alt="Services"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
