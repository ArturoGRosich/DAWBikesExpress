/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('bike_models').del()
    .then(function () {
      return knex('bike_models').insert([
        { name: 'RoadMaster', bike_type_id: 1 , description: 'RoadMaster is a road bike.'},
        { name: 'MountainKing', bike_type_id: 2 , description: 'MountainKing is a mountain bike.'},
        { name: 'HybridFitness', bike_type_id: 3 , description: 'HybridFitness is a hybrid bike.'},
        { name: 'CruiserComfort', bike_type_id: 4 , description: 'CruiserComfort is a cruiser bike.'},
        //long description
        { name: 'E-Bike', bike_type_id: 5, description: 'E-Bike is an electric bike with a lot of gadjets and complements that you should take in your life even if you think youn don\'t need it.'},
      ]);
    });
};