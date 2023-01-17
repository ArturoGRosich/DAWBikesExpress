const express = require('express');
const router = express.Router();
const BusinessController = require('../app/controllers/BusinessController');


router.get('/', BusinessController.getAll);
router.get('/:id', BusinessController.getById);
router.post('/', BusinessController.create);
router.put('/:id', BusinessController.update);
router.delete('/:id', BusinessController.delete);

module.exports = router;