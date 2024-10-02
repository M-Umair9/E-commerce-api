import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'; 
import dotenv from 'dotenv';
import router from './routes/authRoutes.js';
import productrouter from './routes/productRoutes.js';
import productRoutes from './routes/productRoutes.js'
import cartRouters from './routes/cartRoutes.js';
import cartrouter from './routes/cartRoutes.js';
import orderrouter from './routes/orderRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import paymentrouter from './routes/paymentRoutes.js';
import paymentRouters from './routes/paymentRoutes.js';
dotenv.config(); 

const app =express();
 
app.use(express.json());
 

   //database connection  
main().catch(err=>console.log(err)) ;                //call main and catch error
 async function main() {                                     //function to connect to mongoose
   const mongoUri= process.env.MONGO_URI                        
    await mongoose.connect(mongoUri); 
    console.log('database connected');
 }
   //Routes
app.use(router);
app.use(productrouter);
app.use(cartrouter);
app.use(orderrouter);
app.use(paymentrouter);
app.use('/api/auth',authRoutes)                  //Add Auth routes
app.use('/api/products', productRoutes);         // Add product routes
app.use('/api/cart', cartRouters);
app.use('/api/order',orderRouter);
app.use('/api/payment',paymentRouters);

app.listen(8080,()=>{
    console.log('server started');
})

