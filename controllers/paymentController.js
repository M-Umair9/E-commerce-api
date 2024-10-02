import Stripe from 'stripe';
import PaymentModel from '../models/PaymentModel.js';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const processPayment = async (req, res) => {
  const { orderId, amount, currency, token } = req.body;

  try {
    // Create a charge using Stripe API
    const charge = await stripe.charges.create({
      amount, // Amount in cents (for USD, multiply by 100)
      currency,
      source: token, // Token from the frontend (Stripe.js)
      description: `Payment for order ${orderId}`,
    });

    // Save the payment details to the database
    const payment = new PaymentModel({
      orderId,
      stripePaymentId: charge.id,
      amount,
      currency,
      status: charge.status, // e.g., 'succeeded'
    });

    await payment.save();

    res.status(200).json({ success: true, charge });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
