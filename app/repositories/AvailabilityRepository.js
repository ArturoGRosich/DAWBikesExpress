const BikeModel = require('../models/BikeModel');
const Booking = require('../models/Booking');

require('../../db/config');

class AvailabilityRepository {
    static async getAll(bikeTypeId, from, to) {
        const query = BikeModel.query()
            .join('bike_types', 'bike_models.bike_type_id', 'bike_types.id')
            .join('bike_identifications', 'bike_models.id', 'bike_identifications.bike_model_id')
            .whereNotExists(function() {
                this.select('*')
                    .from('bookings')
                    .whereRaw('bike_identifications.id = bookings.bike_identification_id')
                    .andWhere(function() {
                        this.where('bookings.start', '>=', from)
                            .andWhere('bookings.finish', '<=', to);
                    });
            })
            .groupBy('bike_models.id')
            .withGraphFetched({
                bikeType: true,
                bikeIdentifications: true
            })
            .modifyGraph('bikeIdentifications', builder => {
                builder.whereNotExists(function() {
                    this.select('*')
                        .from('bookings')
                        .whereRaw('bike_identifications.id = bookings.bike_identification_id')
                        .andWhere(function() {
                            this.where('bookings.start', '>=', from)
                                .andWhere('bookings.finish', '<=', to);
                        });
                });
            });

        if (bikeTypeId) {
            query.where('bike_types.id', bikeTypeId);
        }
        return await query;
    }

    
    static async findById(id, from, to) {
        console.log(id, from, to);
        const query = BikeModel.query()
            .join('bike_types', 'bike_models.bike_type_id', 'bike_types.id')
            .join('bike_identifications', 'bike_models.id', 'bike_identifications.bike_model_id')
            .whereNotExists(function() {
                this.select('*')
                    .from('bookings')
                    .whereRaw('bike_identifications.id = bookings.bike_identification_id')
                    .andWhere(function() {
                        this.where('bookings.start', '>=', from)
                            .andWhere('bookings.finish', '<=', to);
                    });
            })
            .where('bike_models.id', id)
            .groupBy('bike_models.id')
            .withGraphFetched({
                bikeType: true,
                bikeIdentifications: true
            })
            .modifyGraph('bikeIdentifications', builder => {
                builder.whereNotExists(function() {
                    this.select('*')
                        .from('bookings')
                        .whereRaw('bike_identifications.id = bookings.bike_identification_id')
                        .andWhere(function() {
                            this.where('bookings.start', '>=', from)
                                .andWhere('bookings.finish', '<=', to);
                        });
                });
            });
            
        
        return await query;
    }
}

module.exports = AvailabilityRepository;
