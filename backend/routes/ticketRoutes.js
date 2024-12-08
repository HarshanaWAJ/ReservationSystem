const express = require('express');
const router = express.Router();

const {
    createTicket
  } = require('../controllers/ticketController');

// CRUD routes for ticket
router.post('/tickets', createTicket);        // Create a new ticket


module.exports = router;