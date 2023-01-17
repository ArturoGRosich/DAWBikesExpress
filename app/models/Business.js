const { Model } = require('objection');

class Business extends Model {
  static get tableName() {
    return 'business';
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

module.exports = Business;