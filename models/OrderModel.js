import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true
      },
      quantity: { type: Number, required: true }
    }
  ],
  shippingAddress: {
    street: String,
    city: String,
    postalCode: String,
    country: String
  },
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: 'Pending' },
  orderStatus: { type: String, default: 'Processing' },
  placedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
