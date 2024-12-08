const Ticket = require('../models/ticket'); 

// Create a new ticket
const createTicket = async (req, res) => {
    try {
      const { ticketId, quantity, unitPrice } = req.body;
      const newTicket = new Ticket({ ticketId, quantity, unitPrice });
      await newTicket.save();
      res.status(201).json({
        success: true,
        data: newTicket
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  };

  module.exports = {
    createTicket
  };