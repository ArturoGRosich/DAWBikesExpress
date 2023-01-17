const { Model } = require('objection');

class BikeModel extends Model {
    static get tableName() {
        return 'bike_models';
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
        const BikeType = require('./BikeType');
        return {
            bikeType: {
                relation: Model.BelongsToOneRelation,
                modelClass: BikeType,
                join: {
                    from: 'bike_models.bike_type_id',
                    to: 'bike_types.id'
                }
            }
        }
    }
}

module.exports = BikeModel;