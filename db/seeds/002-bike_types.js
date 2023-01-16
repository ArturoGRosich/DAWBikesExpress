/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('bike_types').del()
    .then(function () {
      return knex('bike_types').insert([
        { name: 'Road' },
        { name: 'Mountain' },
        { name: 'Hybrid' },
        { name: 'Cruiser' },
        { name: 'Electric' }
      ]);
    });
};