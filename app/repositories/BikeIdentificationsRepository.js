const BikeIdentification = require('../models/BikeIdentification');
require('../../db/config');

class BikeIdentificationsRepository {
    static async getAll() {
        return await BikeIdentification.query();
    }

    static async getById(id) {
        return await BikeIdentification.query().findById(id);
    }

    static async create(BikeIdentificationsRepository) {
        return await BikeIdentification.query().insert(BikeIdentificationsRepository);
    }

    static async update(id, BikeIdentificationsRepository) {
        return await BikeIdentification.query().patchAndFetchById(id, BikeIdentificationsRepository);
    }

    static async delete(id) {
        return await BikeIdentification.query().deleteById(id);
    }
}

module.exports = BikeIdentificationsRepository;
