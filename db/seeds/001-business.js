/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('business').del()
    .then(function () {
      return knex('business').insert([
        { name: 'Bike Shop 1' },
        { name: 'Bike Shop 2' },
        { name: 'Bike Shop 3' },
        { name: 'Bike Shop 4' },
        { name: 'Cycling Friendly' }
      ]);
    });
};