const BikeTypesService = require('../services/BikeTypesService');

class BikeTypesController {
    static async getAll(req, res) {
        try {
            const bikeTypes = await BikeTypesService.getAll();
            res.status(200).json(bikeTypes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const bikeTypes = await BikeTypesService.getById(id);
            res.status(200).json(bikeTypes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const bikeTypes = req.body;
            const createdBikeTypes = await BikeTypesService.create(bikeTypes);
            res.status(201).json(createdBikeTypes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const bikeTypes = req.body;
            const updatedBikeTypes = await BikeTypesService.update(id, bikeTypes);
            res.status(200).json(updatedBikeTypes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await BikeTypesService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BikeTypesController;