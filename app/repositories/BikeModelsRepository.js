const BikeModel = require('../models/BikeModel');
require('../../db/config');

class BikeModelsRepository {
    static async getAll(bikeType) {
        var query = BikeModel.query();
        if (bikeType) {
            query = query.where('bike_type_id', bikeType);
        }
        return await query;

    }

    static async getById(id) {
        return await BikeModel.query().findById(id);
    }

    static async create(BikeModelsRepository) {
        return await BikeModel.query().insert(BikeModelsRepository);
    }

    static async update(id, BikeModelsRepository) {
        return await BikeModel.query().patchAndFetchById(id, BikeModelsRepository);
    }

    static async delete(id) {
        return await BikeModel.query().deleteById(id);
    }
}

module.exports = BikeModelsRepository;
