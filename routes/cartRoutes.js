import express from 'express';
import { addItemToCart, removeItemFromCart, getCart } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const cartrouter = express.Router();

// Protected routes
cartrouter.post('/cart', addItemToCart);  //protect to add cart only after authentecation
cartrouter.delete('/cart/:itemId', removeItemFromCart);   //, protect to delete only after authentication
cartrouter.get('/getcart',  getCart);  //protect,

export default cartrouter;
