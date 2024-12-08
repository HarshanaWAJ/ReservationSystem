class EventClass {
    // constructor
    constructor(eventId, venue, date, startTime, endTime) {
        this.eventId = eventId
        this.venue = venue;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

// Mongose Schema
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
      eventId: {
        type: String,
        required: [true, 'Ticket ID is required'],
        unique: true,  // Ensure ticketId is unique
      },
      venue: {
        type: String,
        required: [true, 'Event Venue is required'],
      },
      date: {
        type: Date,
        required: [true, 'Event Date is required'],
      },
      startTime: {
        type: String,
        required: [true, 'Event Start Time is required'],
      },
      endTime: {
        type: String,
        required: [true, 'Event End Time is required'],
      },
      // Reference for Event
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: [true, 'Event is required'] // Each ticket must belong to an event
        } 
    },
    {
      timestamps: true, // Automatically add createdAt and updatedAt fields
    }
  );
  
  // Create the Ticket model from the schema
  const Event = mongoose.model('Event', eventSchema);
  
  // Export the Ticket model
  module.exports = Event;