const BikeModelsService = require('../services/BikeModelsService');

class BikeModelsController {
    static async getAll(req, res) {
        try {
            const bikeModels = await BikeModelsService.getAll();
            res.status(200).json(bikeModels);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const bikeModels = await BikeModelsService.getById(id);
            res.status(200).json(bikeModels);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const bikeModels = req.body;
            const createdBikeModels = await BikeModelsService.create(bikeModels);
            res.status(201).json(createdBikeModels);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const bikeModels = req.body;
            const updatedBikeModels = await BikeModelsService.update(id, bikeModels);
            res.status(200).json(updatedBikeModels);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await BikeModelsService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BikeModelsController;