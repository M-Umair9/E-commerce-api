import express from 'express';
import { placeOrder, getOrderDetails } from '../controllers/orderController.js';

const orderrouter = express.Router();

orderrouter.post('/orders', placeOrder);
orderrouter.get('/orders/:orderId', getOrderDetails);

export default orderrouter;
