const BikeIdentificationsRepository = require('../repositories/BikeIdentificationsRepository');

class BikeIdentificationsService {
    static async getAll() {
        try {
            return await BikeIdentificationsRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await BikeIdentificationsRepository.getById(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(bikeIdentification) {
        try {
            return await BikeIdentificationsRepository.create(bikeIdentification);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, bikeIdentification) {
        try {
            return await BikeIdentificationsRepository.update(id, bikeIdentification);
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            return await BikeIdentificationsRepository.delete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BikeIdentificationsService;