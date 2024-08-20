<<<<<<< HEAD
import React, { Component } from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Details from './components/Details';
import Details1 from './components/Details1';
import Details2 from './components/Details2';
import Product from './components/Product';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Details/>}/>
          <Route path='/details' element={<Details1/>}/>
          <Route path='/details2' element={<Details2/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import FarmerDashboard from './components/FarmerDashboard'; // Import your new dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register/:type" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} /> {/* Add the new route */}
      </Routes>
    </Router>
>>>>>>> d643c47c5795aa6bd21affdfbb95d07bc2809840
  );
}

export default App;
