const express = require('express');
const router = express.Router();
const BikeIdentificationsController = require('../app/controllers/BikeIdentificationsController');


router.get('/', BikeIdentificationsController.getAll);
router.get('/:id', BikeIdentificationsController.getById);
router.post('/', BikeIdentificationsController.create);
router.put('/:id', BikeIdentificationsController.update);
router.delete('/:id', BikeIdentificationsController.delete);

module.exports = router;