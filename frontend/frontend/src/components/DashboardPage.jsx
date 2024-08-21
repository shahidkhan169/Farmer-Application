import React from 'react';
import Navbar from './Navbar';
import './DashboardPage.css';
import { FaClock, FaMapMarkerAlt, FaTag, FaStar, FaLeaf, FaTruck } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Fresh Garden</h1>
        <div className="info-grid">
          <div className="info-item">
            <strong>Name:</strong> Garden
          </div>
          <div className="info-item">
            <FaClock className="info-icon" /> 6am - 9pm
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" /> 2 km
          </div>
          <div className="info-item">
            <FaTag className="info-icon" /> Price Range
          </div>
        </div>
        <div className="options-container">
          <div className="options-grid">
            <div className="option-item">
              <FaStar className="option-icon" />
              <div className="option-text">
                <strong>Reviews:</strong> 4.5
              </div>
            </div>
            <div className="option-item">
              <FaLeaf className="option-icon" />
              <div className="option-text">
                <strong>Organic Product</strong>
              </div>
            </div>
            <div className="option-item">
              <FaTruck className="option-icon" />
              <div className="option-text">
                <strong>Delivery in 20 mins</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
