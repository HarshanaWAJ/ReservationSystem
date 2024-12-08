// Set Up Database Connection with Mongo DB

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connectDB;
