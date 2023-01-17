const BusinessRepository = require('../repositories/BusinessRepository');

class BusinessService {
    static async getAll() {
        try {
            return await BusinessRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await BusinessRepository.getById(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(business) {
        try {
            return await BusinessRepository.create(business);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, business) {
        try {
            return await BusinessRepository.update(id, business);
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            return await BusinessRepository.delete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BusinessService;