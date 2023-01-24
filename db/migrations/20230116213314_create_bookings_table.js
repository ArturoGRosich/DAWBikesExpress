/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bookings', function(table) {
      table.increments('id').primary();
      table.date('start').notNullable();
      table.date('finish').notNullable();
      table.integer('bike_identification_id').unsigned().notNullable();
      table.foreign('bike_identification_id').references('bike_identifications.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bookings');
};
