const BusinessService = require('../services/BusinessService');

class BusinessController {
    static async getAll(req, res) {
        try {
            const business = await BusinessService.getAll();
            res.status(200).json(business);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const business = await BusinessService.getById(id);
            res.status(200).json(business);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req, res) {
        try {
            const business = req.body;
            const createdBusiness = await BusinessService.create(business);
            res.status(201).json(createdBusiness);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const business = req.body;
            const updatedBusiness = await BusinessService.update(id, business);
            res.status(200).json(updatedBusiness);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await BusinessService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BusinessController;