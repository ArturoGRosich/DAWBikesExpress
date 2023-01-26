const BikeIdentification = require('../models/BikeIdentification');
require('../../db/config');

class BikeIdentificationsRepository {
    static async getAll(businessId) {
        const query =  BikeIdentification.query();
        if (businessId) {
            query.where('business_id', businessId);
        }
        return await query;
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
