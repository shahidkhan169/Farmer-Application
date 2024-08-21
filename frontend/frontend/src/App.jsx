import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import FarmerDashboard from './components/FarmerDashboard'; // Import your new dashboard component
import DashboardPage from './components/DashboardPage'; // Import the new DashboardPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register/:type" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<FarmerDashboard />} /> {/* Add the new route */}
        <Route path="/dashboardPage" element={<DashboardPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
