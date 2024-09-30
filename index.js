import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'; 
import dotenv from 'dotenv';
import router from './routes/authRoutes.js';
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
   
 app.use('/api/auth',authRoutes)
app.use(router);


app.listen(8080,()=>{
    console.log('server started');
})

