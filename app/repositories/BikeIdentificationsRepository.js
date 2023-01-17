const BikeIdentification = require('../models/BikeIdentification');
require('../../db/config');

class BikeIdentificationsRepository {
    static async getAll() {
        return await BikeIdentification.query();
    }

    static async getById(id) {
        return await BikeIdentification.query().findById(id);
    }

    static async create(bikeIdentification) {
        return await BikeIdentification.query().insert(bikeIdentification);
    }

    static async update(id, bikeIdentification) {
        return await BikeIdentification.query().patchAndFetchById(id, bikeIdentification);
    }

    static async delete(id) {
        return await BikeIdentification.query().deleteById(id);
    }
}

module.exports = BikeIdentificationsRepository;
