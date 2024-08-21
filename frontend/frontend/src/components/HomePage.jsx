// eslint-disable-next-line no-unused-vars
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
    <div className="relative pb-16 font-sans bg-gray-100">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <div className="text-2xl font-bold font-serif">MyWebsite</div>
        <div className="flex items-center">
          <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-lg transition duration-300 hover:bg-blue-700 font-serif">
            Login
          </button>
          <div className="relative">
            <button className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer text-lg transition duration-300 hover:bg-green-700 font-serif" onClick={toggleDropdown}>
              Register
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 bg-white shadow-lg rounded flex flex-col">
                <button className="px-4 py-2 text-left text-black text-lg transition duration-300 hover:bg-black-200 font-serif" onClick={() => handleRegisterClick('farmer')}>
                  Farmer
                </button>
                <button className="px-4 py-2 text-left text-black text-lg transition duration-300 hover:bg-black-200 font-serif" onClick={() => handleRegisterClick('customer')}>
                  Customer
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="text-center p-10 bg-white rounded-lg m-5 shadow-lg">
        <h1 className="text-4xl text-gray-800 font-serif">Welcome to MyWebsite</h1>
        <p className="text-lg text-gray-600 font-serif">Your journey starts here.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        <div className="bg-gradient-to-r from-purple-200 to-purple-100 text-gray-800 p-3 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-lg aspect-square font-serif">
          <FontAwesomeIcon icon={faComment} className="text-4xl mb-2" />
          <h2 className="text-xl mb-2 font-serif">Direct Communication</h2>
          <p className="text-lg font-serif">Enhance direct communication between farmers and customers, ensuring transparency.</p>
        </div>
        <div className="bg-gradient-to-r from-purple-200 to-purple-100 text-gray-800 p-5 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-lg aspect-square font-serif">
          <FontAwesomeIcon icon={faExchangeAlt} className="text-4xl mb-2" />
          <h2 className="text-xl mb-2 font-serif">Avoids Middlemen</h2>
          <p className="text-lg font-serif">Bypasses middlemen, allowing farmers to receive fair prices and customers to pay less.</p>
        </div>
        <div className="bg-gradient-to-r from-purple-200 to-purple-100 text-gray-800 p-5 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-lg aspect-square font-serif">
          <FontAwesomeIcon icon={faStar} className="text-4xl mb-2" />
          <h2 className="text-xl mb-2 font-serif">Rating System</h2>
          <p className="text-lg font-serif">Includes a rating system to help customers choose trusted farmers based on feedback.</p>
        </div>
        <div className="bg-gradient-to-r from-purple-200 to-purple-100 text-gray-800 p-5 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-lg aspect-square font-serif">
          <FontAwesomeIcon icon={faLanguage} className="text-4xl mb-2" />
          <h2 className="text-xl mb-2 font-serif">Multilingual Support</h2>
          <p className="text-lg font-serif">Available in multiple languages to cater to diverse users across regions.</p>
        </div>
        <div className="bg-gradient-to-r from-purple-200 to-purple-100 text-gray-800 p-5 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-lg aspect-square font-serif">
          <FontAwesomeIcon icon={faRobot} className="text-4xl mb-2" />
          <h2 className="text-xl mb-2 font-serif">Chatbot Assistance</h2>
          <p className="text-lg font-serif">A chatbot is available for easy communication and assistance anytime.</p>
        </div>
        <div className="bg-gradient-to-r from-purple-200 to-purple-100 text-gray-800 p-5 rounded-lg shadow-md text-center transition duration-300 transform hover:scale-105 hover:shadow-lg aspect-square font-serif">
          <FontAwesomeIcon icon={faCreditCard} className="text-4xl mb-2" />
          <h2 className="text-xl mb-2 font-serif">Payment Modes</h2>
          <p className="text-lg font-serif">Supports various payment modes for hassle-free transactions.</p>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer text-2xl transition duration-300 transform hover:bg-blue-700 hover:scale-110" onClick={handleDashboardClick}>
        <i className="fas fa-tachometer-alt"></i>
      </div>
    </div>
  );
};

export default HomePage;
