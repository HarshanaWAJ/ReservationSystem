// Middleware to check for empty fields in the request body
const validateEvent = (req, res, next) => {
    const { eventId, venue, date, startTime, endTime } = req.body;
  
    // Create an array of fields to check
    const requiredFields = [
      { field: 'eventId', value: eventId },
      { field: 'venue', value: venue },
      { field: 'date', value: date },
      { field: 'startTime', value: startTime },
      { field: 'endTime', value: endTime }
    ];
  
    // Loop through each required field and check if it's empty or missing
    for (const { field, value } of requiredFields) {
      if (!value || value.trim() === '') {
        return res.status(400).json({
          success: false,
          message: `${field} is required and cannot be empty.`
        });
      }
    }
  
    // If no empty fields, move to the next middleware or controller
    next();
  };
  
  module.exports = validateEvent;
  