import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faExchangeAlt, faStar, faLanguage, faRobot, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

const HomePage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRegisterClick = (type) => {
    navigate(`/register/${type}`);
    setDropdownOpen(false);
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-brand">MyWebsite</div>
        <div className="navbar-login">
          <button className="login-button">Login</button>
          <div className="register-dropdown">
            <button className="register-button" onClick={toggleDropdown}>
              Register
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => handleRegisterClick('Farmer')}>
                  Farmer
                </button>
                <button className="dropdown-item" onClick={() => handleRegisterClick('Customer')}>
                  Customer
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to MyWebsite</h1>
        <p>Your journey starts here.</p>
      </div>
      <div className="features-grid">
        <div className="feature-item">
          <FontAwesomeIcon icon={faComment} className="feature-icon" />
          <h2>Direct Communication</h2>
          <p>Enhance direct communication between farmers and customers, ensuring transparency.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faExchangeAlt} className="feature-icon" />
          <h2>Avoids Middlemen</h2>
          <p>Bypasses middlemen, allowing farmers to receive fair prices and customers to pay less.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faStar} className="feature-icon" />
          <h2>Rating System</h2>
          <p>Includes a rating system to help customers choose trusted farmers based on feedback.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faLanguage} className="feature-icon" />
          <h2>Multilingual Support</h2>
          <p>Available in multiple languages to cater to diverse users across regions.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faRobot} className="feature-icon" />
          <h2>Chatbot Assistance</h2>
          <p>A chatbot is available for easy communication and assistance anytime.</p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faCreditCard} className="feature-icon" />
          <h2>Payment Modes</h2>
          <p>Supports various payment modes for hassle-free transactions.</p>
        </div>
      </div>
      <div className="dashboard-icon" onClick={handleDashboardClick}>
        <i className="fas fa-tachometer-alt"></i>
      </div>
    </div>
  );
};

export default HomePage;
