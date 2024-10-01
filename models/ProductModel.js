import mongoose from 'mongoose';

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  countInStock: { type: Number, required: true, default: 0 },
  imageUrl: { type: String, required: true },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the product model
const Product = mongoose.model('Product', productSchema);
export default Product;
