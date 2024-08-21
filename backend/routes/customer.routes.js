const express = require('express');
const cus_router = express.Router();

const {
    customerRegister,
    customerLogin,
    getDetails,
    custview,
    getProductsByType
} = require('../controller/customerController');

cus_router.post('/custreg',customerRegister);
cus_router.post('/custlogin',customerLogin);
cus_router.get('/custdetails',getDetails);
cus_router.get('/custview',custview);
cus_router.get('/custviewtype',getProductsByType);
module.exports = cus_router;