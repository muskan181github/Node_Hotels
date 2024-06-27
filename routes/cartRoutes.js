// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const { getUserCart, addToCart, removeFromCart } = require('../controllers/cartController');
const { authenticateUser } = require('../middleware/authMiddleware');

router.get('/', authenticateUser, getUserCart);
router.post('/', authenticateUser, addToCart);
router.delete('/:id', authenticateUser, removeFromCart);

module.exports = router;
