const AvailabilityService = require('../services/AvailabilityService');

class AvailabilityController {
    static async getAll(req, res) {

        const bikeTypeId = req.query ? req.query['bike-type-id'] : null;
        const from = req.params.from;
        const to = req.params.to;

        try {
            const Availability = await AvailabilityService.getAll(from , to, null);
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