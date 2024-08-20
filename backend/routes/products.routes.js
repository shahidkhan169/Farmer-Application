const express = require('express');
const router = express.Router();
const productController = require('../controller/productContoller');

router.post('/addProduct', productController.addProduct);

router.delete('/deleteProduct', productController.deleteProduct);

router.put('/updateProduct', productController.updateProduct);

router.get('/productsByUser', productController.getAllProductsByUser);

router.get('/allTypes', productController.getAllUniqueTypes);

module.exports = router;
