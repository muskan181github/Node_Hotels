// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { adminOnly } = require('../middleware/adminMiddleware');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', adminOnly, addProduct);
router.put('/:id', adminOnly, updateProduct);
router.delete('/:id', adminOnly, deleteProduct);

module.exports = router;
