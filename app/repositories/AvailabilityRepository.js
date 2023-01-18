const Booking = require('../models/Booking');

require('../../db/config');

class AvailabilityRepository {
    static async getAll(from = null, to = null, bikeTypeId = null) {
        return await Booking.query().BikeIdentification();    
    }

    static async getById(id) {
        return await BikeIdentification.query().findById(id);
    }
}

module.exports = AvailabilityRepository;
