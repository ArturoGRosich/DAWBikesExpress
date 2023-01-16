/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('bike_models').del()
    .then(function () {
      return knex('bike_models').insert([
        { name: 'RoadMaster', bike_types_id: 1 },
        { name: 'MountainKing', bike_types_id: 2 },
        { name: 'HybridFitness', bike_types_id: 3 },
        { name: 'CruiserComfort', bike_types_id: 4 },
        { name: 'E-Bike', bike_types_id: 5 }
      ]);
    });
};