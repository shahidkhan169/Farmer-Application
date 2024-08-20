// src/components/RecommendedFarms.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faMapMarkerAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import farm1Image from '../Photos/farm1.jpg';
import farm2Image from '../Photos/farm2.jpg';
import farm3Image from '../Photos/farm3.jpg';
// ... other image imports

const RecommendedFarms = () => {
  const farms = [
    { name: 'Green Farm', time: '15 mins', rating: 4.5, nearby: true, image: farm1Image, path: '/farm/green-farm' },
    { name: 'Sunny Acres', time: '10 mins', rating: 3.2, nearby: true, image: farm2Image, path: '/farm/sunny-acres' },
    { name: 'Golden Fields', time: '25 mins', rating: 4.7, nearby: false, image: farm3Image, path: '/farm/golden-fields' },
    // ...more farms
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recommended for you</h2>
        <Link to="/farms" className="text-blue-600 hover:underline">View All</Link>
      </div>
      <div className="relative">
        <div ref={sliderRef} className="flex overflow-x-hidden space-x-4">
          {farms.slice(0, 8).map((farm, index) => (
            <Link
              to={farm.path}
              key={index}
              className="min-w-[45%] bg-white rounded-lg shadow-md p-3 flex-shrink-0"
            >
              <img
                src={farm.image}
                alt={farm.name}
                className="w-full h-32 object-cover rounded-t-lg mb-2"
              />
              <h3 className="text-lg font-medium">{farm.name}</h3>
              <div className="flex justify-between text-gray-600 text-sm my-2">
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  {farm.time}
                </span>
                <span className="flex items-center">
                  {[...Array(Math.floor(farm.rating))].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500 mr-1" />
                  ))}
                  {farm.rating % 1 !== 0 && <FontAwesomeIcon icon={faStar} className="text-yellow-500" />}
                  <span className="ml-2 text-gray-800">{farm.rating.toFixed(1)}</span>
                </span>
              </div>
              {farm.nearby && (
                <span className="text-xs text-green-600 flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                  Nearby
                </span>
              )}
            </Link>
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-100 p-2 rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-100 p-2 rounded-full shadow-md"
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default RecommendedFarms;
