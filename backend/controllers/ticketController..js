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
      console.log("Added Ticket: ", newTicket);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  };

  // Get all tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({
      success: true,
      data: tickets
    });
    console.log("Retriving Data: ", tickets);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Get a ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }
    res.status(200).json({
      success: true,
      data: ticket
    });
    console.log("Retriving Data: ", ticket);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Update a ticket by ID
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }
    res.status(200).json({
      success: true,
      data: ticket
    });
    console.log("Updated Data: ", ticket);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Delete a ticket by ID
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Ticket deleted successfully'
    });
    console.log("Deleted Data: ", ticket);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Buy Tickets
const updateTicketAfterBuy = async (req, res) => {
  try {
    // Extract the current ticket quantity and the quantity provided by the user
    const { quantity } = req.body;

    // Validate if quantity is provided in the request body
    if (typeof quantity === 'undefined') {
      return res.status(400).json({
        success: false,
        message: 'Quantity is required'
      });
    }

    // Find the ticket by ID
    const ticket = await Ticket.findById(req.params.id);

    // If ticket not found
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: 'Ticket not found'
      });
    }

    // Check if enough tickets are available to be sold
    if (ticket.availableCount <= 0) {
      return res.status(200).json({
        success: true,
        message: 'All tickets are sold out'
      });
    }

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};



  module.exports = {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicket,
    deleteTicket,
    updateTicketAfterBuy
  };