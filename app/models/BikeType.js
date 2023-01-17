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
}

module.exports = BikeType;