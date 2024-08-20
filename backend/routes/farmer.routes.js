const express = require('express');
const router = express.Router();

const {
    createFarmer,
} = require('../controller/farmerController');

router.post('/framer', createFarmer);

module.exports = router;