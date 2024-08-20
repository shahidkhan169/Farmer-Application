const express = require('express');
const farmerRoutes = require('./farmer/farmerRoutes');
const customerRoutes = require('./customer/customerRoutes');

const router = express.Router();

// Use farmer routes under `/farmer`
router.use('/farmer', farmerRoutes);

// Use customer routes under `/customer`
router.use('/customer', customerRoutes);

module.exports = router;  // Corrected 'module.export' to 'module.exports'
