const express = require('express');
const cus_router = express.Router();

const {
    customerRegister,
    customerLogin,
    getDetails
} = require('../controller/customerController');

cus_router.post('/custreg',customerRegister);
cus_router.post('/custlogin',customerLogin);
cus_router.get('/custdetails',getDetails)
module.exports = cus_router;