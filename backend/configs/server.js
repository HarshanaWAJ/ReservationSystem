const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db'); // Import DB connection function
require('dotenv').config();


// Routes
const ticketRoutes = require('../routes/ticketRoutes'); 
const eventRoutes = require('../routes/eventRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev')); // log HTTP requests

// Use the ticket routes
app.use('/api/tickets', ticketRoutes); 
app.use('/api/events', eventRoutes); 

// Connect to the Database
connectDB();

// Start Server
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
