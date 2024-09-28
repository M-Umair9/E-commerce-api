import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 
import jwt from 'jsonwebtoken';
import { User } from './models/Login.js';

const server =express();
 
server.use(express.json());
 


main().catch(err=>console.log(err));                //call main and catch error
 async function main() {                                     //function to connect to mongoose
   const mongoUri= process.env.MONGO_URI                        
    await mongoose.connect(mongoUri); 
    console.log('database connected');
 }
   
 

server.get('/',(req, res)=>{    //to check if the server is functional
    res.json({status:'success'})
})

server.listen(8080,()=>{
    console.log('server started');
})

// Route to handle POST request
server.post('/add-user', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const newUser = new User({ name, email, password });   // Create a new user from the request body
      const savedUser = await newUser.save();               // Save the user to the database
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error adding user' });
    }
  });
  