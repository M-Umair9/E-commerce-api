import express from 'express';
import { processPayment }  from '../controllers/paymentController.js';
const paymentrouter = express.Router();

paymentrouter.post('/payment', processPayment);

export default paymentrouter;
