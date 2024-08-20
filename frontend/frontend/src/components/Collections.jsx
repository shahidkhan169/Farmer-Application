// src/components/Collections.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import fruitImage from '../Photos/fruit.jpg';
import vegetableImage from '../Photos/vegetable.jpg';
import nutsImage from '../Photos/nuts.jpg';
import grainsImage from '../Photos/grains.jpg';
import leavesImage from '../Photos/leaves.jpg';

const collections = [
  { image: fruitImage, label: 'Fruits', path: '/fruits' },
  { image: vegetableImage, label: 'Vegetables', path: '/vegetables' },
  { image: nutsImage, label: 'Nuts', path: '/nuts' },
  { image: grainsImage, label: 'Grains', path: '/grains' },
  { image: leavesImage, label: 'Leaves', path: '/leaves' },
];

const Collections = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-left mb-4">Collections</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {collections.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center p-4 bg-white border rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <span className="text-lg font-medium text-gray-700 truncate">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collections;
