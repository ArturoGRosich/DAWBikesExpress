const express = require('express');
const router = express.Router();
const AvailabilityController = require('../app/controllers/AvailabilityController');


router.get('/from/:from/to/:to', AvailabilityController.getAll);

module.exports = router;