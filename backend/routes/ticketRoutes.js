const express = require('express');
const router = express.Router();

// Middlewares
const validateTicket = require('../middlewares/validateTicket');

const {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicket,
    deleteTicket,
    updateTicketAfterBuy
  } = require('../controllers/ticketController.');

// CRUD routes for ticket
router.post('/create-ticket', validateTicket, createTicket);        // Create a new ticket
router.get('/get-all', getAllTickets);        // Get all tickets
router.get('/get-by-id/:id', getTicketById);    // Get a ticket by ID
router.put('/update/:id', updateTicket);     // Update a ticket by ID
router.delete('/delete/:id', deleteTicket);  // Delete a ticket by ID
router.put('/buy-tickets/:id', updateTicketAfterBuy) // Buy tickets

module.exports = router;