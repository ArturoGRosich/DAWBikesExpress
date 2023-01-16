/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bike_models', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('bike_types_id').unsigned().notNullable();
      table.foreign('bike_types_id').references('bike_types.id');
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bike_models');
  };
