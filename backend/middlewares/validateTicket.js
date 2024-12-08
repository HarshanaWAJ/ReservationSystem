// middlewares/validateTicket.js
const { body, validationResult } = require('express-validator');

const validateTicket = [
  body('ticketId').notEmpty().withMessage('Ticket ID is required'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('unitPrice').isFloat({ min: 0 }).withMessage('Price must be a positive number'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    next();
  }
];

module.exports = validateTicket;