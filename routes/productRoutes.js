import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';


const productrouter = express.Router();

// CRUD routes for products
productrouter.post('/products',  createProduct);  // Create product (Admin only) 
productrouter.get('/getproducts', getProducts);                     // Get all products
productrouter.get('/getproducts/:id', getProductById);               // Get product by ID
productrouter.put('/updateproducts/:id',updateProduct ); // Update product (Admin only) , admin,  protect
productrouter.delete('/deleteproducts/:id', deleteProduct); // Delete product (Admin only) , admin,  protect

export default productrouter;
