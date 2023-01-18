const AvailabilityRepository = require('../repositories/AvailabilityRepository');

class AvailabilityService {
    static async getAll(queryParams) {
        try {
            return await AvailabilityRepository.getAll();
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