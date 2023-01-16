const { now } = require("tarn/dist/utils");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
    const todayInMs = new Date().getTime();
    const dayDurationInMs = 86400000;

    return knex('bookings').del()
      .then(function () {
        return knex('bookings').insert([
          {
            // booking from now into 24h
            bike_identification_id: 1,
            start: new Date().toISOString(),
            finish: new Date(todayInMs + dayDurationInMs).toISOString()
          },
          {
            // booking from yesterdey until today last ms
            bike_identification_id: 1,
            start: new Date(todayInMs - dayDurationInMs).toISOString(),
            finish: new Date(todayInMs - 1).toISOString()
          },
          {
            // booking from yesterday that will last multiple days
            bike_identification_id: 2,
            start: new Date(todayInMs - dayDurationInMs).toISOString(),
            finish: new Date(todayInMs + 10 * dayDurationInMs).toISOString()
          }
        ]);
    });
};