const BikeIdentificationsService = require('../services/BikeIdentificationsService');

class BikeIdentificationsController {
    static async getAll(req, res) {
        try {
            const bikeIdentifications = await BikeIdentificationsService.getAll();
            res.status(200).json(bikeIdentifications);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const bikeIdentifications = await BikeIdentificationsService.getById(id);
            res.status(200).json(bikeIdentifications);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const bikeIdentifications = req.body;
            const createdBikeIdentifications = await BikeIdentificationsService.create(bikeIdentifications);
            res.status(201).json(createdBikeIdentifications);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const bikeIdentifications = req.body;
            const updatedBikeIdentifications = await BikeIdentificationsService.update(id, bikeIdentifications);
            res.status(200).json(updatedBikeIdentifications);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await BikeIdentificationsService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BikeIdentificationsController;