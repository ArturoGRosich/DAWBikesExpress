const BikeTypesRepository = require('../repositories/BikeTypesRepository');

class BikeTypesService {
    static async getAll() {
        try {
            return await BikeTypesRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await BikeTypesRepository.getById(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(bikeType) {
        try {
            return await BikeTypesRepository.create(bikeType);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, bikeType) {
        try {
            return await BikeTypesRepository.update(id, bikeType);
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            return await BikeTypesRepository.delete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BikeTypesService;