const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db'); // import DB connection function
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev')); // log HTTP requests

// Start Server
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log the Server Status
});

