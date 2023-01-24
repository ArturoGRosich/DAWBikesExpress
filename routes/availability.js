const express = require('express');
const router = express.Router();
const AvailabilityController = require('../app/controllers/AvailabilityController');


router.get('/from/:from/to/:to', AvailabilityController.getAll);
router.get('/model/:id/from/:from/to/:to', AvailabilityController.findById);

module.exports = router;