// controllers/cartController.js
const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId }).populate('items.productId');
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    let cart = await Cart.findOne({ userId: req.user.userId });

    if (!cart) {
      cart = new Cart({ userId: req.user.userId, items: [] });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const cartItem = cart.items.find(item => item.productId.equals(productId));
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.items.push({ productId, quantity: 1 });
    }

    await cart.save();
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId });
    const { id } = req.params;

    cart.items = cart.items.filter(item => !item._id.equals(id));
    await cart.save();
    
    res.json({ message: 'Item removed from cart successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUserCart,
  addToCart,
  removeFromCart,
};
