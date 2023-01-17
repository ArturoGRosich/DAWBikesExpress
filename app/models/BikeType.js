const { Model } = require('objection');

class BikeType extends Model {
    static get tableName() {
        return 'bike_types';
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
        const BikeModel = require('./BikeModel');
        return {
            bikeModels: {
                relation: Model.HasManyRelation,
                modelClass: BikeModel,
                join: {
                    from: 'bike_types.id',
                    to: 'bike_models.bike_type_id'
                }
            }
        }
    }
}

module.exports = BikeType;