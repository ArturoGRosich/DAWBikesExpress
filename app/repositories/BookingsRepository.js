const Booking = require('../models/Booking');
require('../../db/config');

class BookingsRepository {
    static async getAll() {
        return await Booking.query();
    }

    static async getById(id) {
        return await Booking.query().findById(id);
    }

    static async create(Booking) {
        return await Booking.query().insert(Booking);
    }

    static async update(id, Booking) {
        return await Booking.query().patchAndFetchById(id, Booking);
    }

    static async delete(id) {
        return await Booking.query().deleteById(id);
    }
}

module.exports = BookingsRepository;
