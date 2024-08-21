/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignUpFarmer from './pages/signupfarmer'
import Product from './components/Product';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import FarmerDashboard from './components/FarmerDashboard'; // Import your new dashboard component
import DashboardPage from './components/DashboardPage'; // Import the new DashboardPage component

function App() {

  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register/:type" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} /> {/* Add the new route */}
        <Route path="/dashboardPage" element={<DashboardPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
=======
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register/farmer' element={<SignUpFarmer/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/register/:type" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<FarmerDashboard />} /> {/* Add the new route */}
        </Routes>
      </BrowserRouter>
    </div>
  )
>>>>>>> d31e0e85676d3d00bf65365d121609414f608b0c
}




export default App;
