const Business = require('../models/Business');
require('../../db/config');

class BusinessRepository {
    static async getAll() {
        return await Business.query();
    }

    static async getById(id) {
        return await Business.query().findById(id);
    }

    static async create(business) {
        return await Business.query().insert(business);
    }

    static async update(id, business) {
        return await Business.query().patchAndFetchById(id, business);
    }

    static async delete(id) {
        return await Business.query().deleteById(id);
    }
}

module.exports = BusinessRepository;
