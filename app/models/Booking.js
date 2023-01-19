const { Model } = require('objection');

class Booking extends Model {
    static get tableName() {
        return 'bookings';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                start: { type: 'date' },
                finish: { type: 'date' },
            }
        };
    }
    static get relationMappings() {
        const BikeIdentification = require('./BikeIdentification');
        return {
            bikeIdentification: {
                relation: Model.BelongsToOneRelation,
                modelClass: BikeIdentification,
                join: {
                    from: 'bookings.bike_identification_id',
                    to: 'bike_identifications.id'
                }
            }
        }
    }
}

module.exports = Booking;