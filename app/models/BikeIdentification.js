const { Model } = require('objection');


class BikeIdentification extends Model {
    static get tableName() {
        return 'bike_identifications';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' }, 
                business_id: { type: 'integer' },
                bike_model_id: { type: 'integer' },
            }
        };
    }

    static get relationMappings() {
        const Business = require('./Business');
        const BikeModel = require('./BikeModel');
        return {
            business: {
                relation: Model.BelongsToOneRelation,
                modelClass: Business,
                join: {
                    from: 'bike_identifications.business_id',
                    to: 'business.id'
                }
            },
            bikeModel: {
                relation: Model.BelongsToOneRelation,
                modelClass: BikeModel,
                join: {
                    from: 'bike_identifications.bike_model_id',
                    to: 'bike_models.id'
                }
            }
        }
    }
}

module.exports = BikeIdentification;