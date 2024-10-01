import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'; 
import dotenv from 'dotenv';
import router from './routes/authRoutes.js';
import productrouter from './routes/productRoutes.js';
import productRoutes from './routes/productRoutes.js'
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
app.use('/api/auth',authRoutes)                  //Add Auth routes
app.use('/api/products', productRoutes);         // Add product routes


app.listen(8080,()=>{
    console.log('server started');
})

