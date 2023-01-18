const express = require('express');
const router = express.Router();
const AvailabilityController = require('../app/controllers/AvailabilityController');


router.get('/', AvailabilityController.getAll);

module.exports = router;