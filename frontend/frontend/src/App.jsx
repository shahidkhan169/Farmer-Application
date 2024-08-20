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
  );
}

export default App;
