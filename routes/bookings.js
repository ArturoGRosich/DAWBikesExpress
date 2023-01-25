const express = require('express');
const router = express.Router();
const BookingsController = require('../app/controllers/BookingsController');


router.get('/bookings/', BookingsController.getAll);
router.get('/bookings/:id', BookingsController.getById);
router.post('/models/:bikeModelId/from/:startDate/to/:endDate/bookings', BookingsController.create);
router.put('/models/:modelId/from/:from/to/:to/bookings/:id', BookingsController.update);
router.delete('/bookings/:id', BookingsController.delete);

module.exports = router;