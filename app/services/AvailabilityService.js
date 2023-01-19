const AvailabilityRepository = require('../repositories/AvailabilityRepository');

class AvailabilityService {
    static async getAll(from, to, bikeTypeId) {
        try {
            return await AvailabilityRepository.getAll(from, to, bikeTypeId);
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await AvailabilityRepository.getById(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AvailabilityService;