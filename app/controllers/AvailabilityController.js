const AvailabilityService = require('../services/AvailabilityService');

class AvailabilityController {
    static async getAll(req, res) {
        const queryParams = req.query;
        try {
            const Availability = await AvailabilityService.getAll(queryParams);
            res.status(200).json(Availability);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async findById(req, res) {
        try {
            const { id } = req.params;
            const Availability = await AvailabilityService.findById(id);
            res.status(200).json(Availability);
        } catch (error) {
            res.status(500).json({ message: error.message });       
        }
    }
}

module.exports = AvailabilityController;