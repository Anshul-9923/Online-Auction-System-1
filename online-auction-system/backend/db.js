import mongoose from 'mongoose';
import Products from './models/productModel';
import Users from './models/userModel';

const connectDB = async (cb) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  cb();
}

export {connectDB, Users, Products};