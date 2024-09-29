import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js'; 
import dotenv from 'dotenv';
dotenv.config(); 

const app =express();
 
app.use(express.json());
 

   //database connection  
main().catch(err=>console.log(err));                //call main and catch error
 async function main() {                                     //function to connect to mongoose
   const mongoUri= process.env.MONGO_URI                        
    await mongoose.connect(mongoUri); 
    console.log('database connected');
 }
   
 app.use('/api/auth',authRoutes)



app.listen(8080,()=>{
    console.log('server started');
})

// Route to handle POST request
{/**server.post('/add-user', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const newUser = new User({ name, email, password });   // Create a new user from the request body
      const savedUser = await newUser.save();               // Save the user to the database
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error adding user' });
    }
  }); */}
  