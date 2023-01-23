const knex = require('knex');
const config = require('../../knexfile');

const env = process.env.NODE_ENV || 'development';
const knexInstance = knex(config[env]);

knexInstance.migrate.latest()
  .then(() => {
    console.log('Migrations complete.');
    process.exit();
  })
  .catch((err) => {
    console.error('Error running migrations:', err);
    process.exit(1);
  });