import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDatabase() {
  try {
    if (mongoose.connections[0].readyState) {
      console.log('Using existing MongoDB connection');
      return;
    }

    // Connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, options);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}