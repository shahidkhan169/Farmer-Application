// src/components/MainPage.jsx
import React from 'react';
import Search1 from './Search1';
import Carousal from './Carousal';
import Collections from './Collections';
import RecommendedFarms from './RecommendedFarms';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white">
        <Search1 />
        <Carousal />
        <Collections />
        <RecommendedFarms />
    </div>
  );
};

export default MainPage;
