import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const productrouter = express.Router();

// CRUD routes for products
productrouter.post('/products', protect, admin, createProduct);  // Create product (Admin only)
productrouter.get('/getproducts', getProducts);                     // Get all products
productrouter.get('/getproducts/:id', getProductById);               // Get product by ID
productrouter.put('/updateproducts/:id', protect, admin, updateProduct); // Update product (Admin only)
productrouter.delete('deleteproducts/:id', protect, admin, deleteProduct); // Delete product (Admin only)

export default productrouter;
