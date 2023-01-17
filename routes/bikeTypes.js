const express = require('express');
const router = express.Router();
const BikeTypesController = require('../app/controllers/BikeTypesController');


router.get('/', BikeTypesController.getAll);
router.get('/:id', BikeTypesController.getById);
router.post('/', BikeTypesController.create);
router.put('/:id', BikeTypesController.update);
router.delete('/:id', BikeTypesController.delete);

module.exports = router;