import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  stripePaymentId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  status: { type: String, required: true }, // e.g., 'succeeded', 'pending', 'failed'
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Payment', paymentSchema);
