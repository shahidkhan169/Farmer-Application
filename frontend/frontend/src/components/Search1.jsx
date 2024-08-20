// src/components/FirstComponent.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search1 = () => {
  return (
    <div className="p-4 bg-blue-300 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: Location Icon and Home Text */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <FontAwesomeIcon icon={faLocationDot} className="text-gray-600" />
          <span className="text-lg font-semibold text-gray-700">Home</span>
        </div>
        
        {/* Right: Search Bar */}
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search1;
