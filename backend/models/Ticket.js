// Encapsulates the tickets relation operations
class Ticket {   
    // constructor
    constructor(ticketId, quantity, unitPrice) {
        this.ticketId = ticketId
        this.quantity = quantity;
        this.price = unitPrice;
        this.sold = 0;
    }

    //calculate the total price
   calculateTotPrice(unitPrice, quantity, discountRate) {
        var discountPrice = quantity * unitPrice * (discountRate/100);
        var totPrice = (unitPrice * quantity)-discountPrice;
        console.log("Unit Price: ", unitPrice);
        console.log("Quantity: ", quantity);
        console.log("Discount: ", discountPrice);
        console.log("Total Price: ", totPrice);
        return totPrice;
   }
} // End of the class

// Start of the Model
const mongoose = require('mongoose');

// Schema 
const ticketSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      required: [true, 'Ticket ID is required'],
      unique: true,  // Ensure ticketId is unique
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'], // Ensure positive quantity
    },
    unitPrice: {
      type: Number,
      required: [true, 'Unit price is required'],
      min: [0, 'Price must be a positive value'], // Ensure non-negative price
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Ticket model from the schema
const Ticket = mongoose.model('Ticket', ticketSchema);

// Export the Ticket model
module.exports = Ticket;
