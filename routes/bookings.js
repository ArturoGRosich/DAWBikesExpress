const express = require('express');
const router = express.Router();
const BookingsController = require('../app/controllers/BookingsController');


router.get('/', BookingsController.getAll);
router.get('/:id', BookingsController.getById);
router.post('/', BookingsController.create);
router.put('/:id', BookingsController.update);
router.delete('/:id', BookingsController.delete);

module.exports = router;