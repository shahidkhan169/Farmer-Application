const express = require('express');
const {
    createFarmer,
    // getFarmers,
    // getFarmer,
    // updateFarmer,
    // deleteFarmer,
    // signInFarmer
} = require('../../controller/farmer/farmer.controller.js');

const router = express.Router();

router.post('/signup',createFarmer);
// router.post('/signin', signInFarmer);
// router.post('/addProduct/id', addProduct);
// router.get('/get', getFarmers);
// router.get('/id', getFarmer);
// router.put('/id', updateFarmer);
// router.delete('/id', deleteFarmer);

module.exports= router;