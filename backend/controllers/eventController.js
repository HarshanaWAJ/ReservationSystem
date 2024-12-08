const Event = require('../models/Event'); // Import the Event model

// Create a new event
const createEvent = async (req, res) => {
  try {
    const { eventId, venue, date, startTime, endTime } = req.body;

    // Create a new event instance
    const newEvent = new Event({ eventId, venue, date, startTime, endTime });

    // Save the new event to the database
    await newEvent.save();

    // Return the created event
    res.status(201).json({
      success: true,
      data: newEvent
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find(); // Fetch all events

    res.status(200).json({
      success: true,
      data: events
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Get an event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id); // Find event by ID

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.status(200).json({
      success: true,
      data: event
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Update an event by ID
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.status(200).json({
      success: true,
      data: event
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Delete an event by ID
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id); // Delete event by ID

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Event deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// Export the controller methods
module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
