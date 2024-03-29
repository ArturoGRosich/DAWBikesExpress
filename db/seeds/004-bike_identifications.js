/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('bike_identifications').del()
    .then(function () {
      return knex('bike_identifications').insert([
        {
          bike_model_id: 1,
          business_id: 1
        },
        {
          bike_model_id: 2,
          business_id: 2
        },
        {
          bike_model_id: 3,
          business_id: 3
        },
        {
          bike_model_id: 3,
          business_id: 2
        },
        {
          bike_model_id: 5,
          business_id: 2
        },
        {
          bike_model_id: 5,
          business_id: 2
        },
        {
          bike_model_id: 5,
          business_id: 2
        },
        {
          bike_model_id: 5,
          business_id: 2
        },
        {
          bike_model_id: 5,
          business_id: 2
        }
      ]);
    });
};