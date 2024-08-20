const express = require('express');
const { addCustomer } = require('../../controller/customer/customer.controller.js'); // Example import

const router = express.Router();

// Define customer routes here
router.post('/someRoute', addCustomer);

module.exports = router;  // Ensure the correct export
