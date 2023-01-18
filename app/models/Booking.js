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
                name: { type: 'string', minLength: 1, maxLength: 255 },
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
                    from: 'booking.bike_identification_id',
                    to: 'bike_identification.id'
                }
            }
        }
    }
}

module.exports = Booking;