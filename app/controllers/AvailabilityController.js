const AvailabilityService = require('../services/AvailabilityService');

class AvailabilityController {
    static async getAll(req, res) {

        const bikeTypeId = req.query['bike-type-id'];
        const from = req.params.from;
        const to = req.params.to;

        try {
            const Availability = await AvailabilityService.getAll(bikeTypeId, from , to);
            res.status(200).json(Availability);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async findById(req, res) {
        try {
            const id = req.params.id;
            const from = req.params.from;
            const to = req.params.to;
            const Availability = await AvailabilityService.findById(id, from , to);
            res.status(200).json(Availability);
        } catch (error) {
            res.status(500).json({ message: error.message });       
        }
    }
}

module.exports = AvailabilityController;