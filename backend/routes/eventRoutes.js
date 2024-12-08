const express = require('express');
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController'); 

router.post('/create-event', createEvent);
router.get('/get-all', getAllEvents);
router.get('/get-by-id/:id', getEventById);
router.put('/update/:id', updateEvent);
router.delete('/delete/:id', deleteEvent);

// Export the router
module.exports = router;
