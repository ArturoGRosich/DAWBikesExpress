const BikeModelsRepository = require('../repositories/BikeModelsRepository');

class BikeModelsService {
    static async getAll(bikeType) {
        try {
            return await BikeModelsRepository.getAll(bikeType);
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await BikeModelsRepository.getById(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(bikeModel) {
        try {
            return await BikeModelsRepository.create(bikeModel);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, bikeModel) {
        try {
            return await BikeModelsRepository.update(id, bikeModel);
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            return await BikeModelsRepository.delete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BikeModelsService;