const BikeType = require('../models/BikeType');
require('../../db/config');

class BikeTypesRepository {
    static async getAll() {
        return await BikeType.query();
    }

    static async getById(id) {
        return await BikeType.query().findById(id);
    }

    static async create(BikeTypesRepository) {
        return await BikeType.query().insert(BikeTypesRepository);
    }

    static async update(id, BikeTypesRepository) {
        return await BikeType.query().patchAndFetchById(id, BikeTypesRepository);
    }

    static async delete(id) {
        return await BikeType.query().deleteById(id);
    }
}

module.exports = BikeTypesRepository;
