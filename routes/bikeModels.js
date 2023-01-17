const express = require('express');
const router = express.Router();
const BikeModelsController = require('../app/controllers/BikeModelsController');


router.get('/', BikeModelsController.getAll);
router.get('/:id', BikeModelsController.getById);
router.post('/', BikeModelsController.create);
router.put('/:id', BikeModelsController.update);
router.delete('/:id', BikeModelsController.delete);

module.exports = router;