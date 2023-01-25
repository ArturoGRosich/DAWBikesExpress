/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bike_identifications', function(table) {
        table.increments('id').primary();
        table.integer('bike_model_id').unsigned().notNullable();
        table.foreign('bike_model_id').references('bike_models.id').onDelete('CASCADE');
        table.integer('business_id').unsigned().notNullable();
        table.foreign('business_id').references('business.id').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bike_identifications');
};
