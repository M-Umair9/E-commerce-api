import mongoose from 'mongoose';

        //Define the Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  });
  
   export const User = mongoose.model('User', userSchema);