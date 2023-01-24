const AvailabilityRepository = require('../repositories/AvailabilityRepository');

class AvailabilityService {
    static async getAll(bikeTypeId, from, to) {
        try {
            return await AvailabilityRepository.getAll(bikeTypeId, from, to);
        } catch (error) {
            throw error;
        }
    }

    static async findById(id, from, to) {
        try {
            return await AvailabilityRepository.findById(id, from, to);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AvailabilityService;