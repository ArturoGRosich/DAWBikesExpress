const knex = require('knex');
const config = require('../../knexfile');

const env = process.env.NODE_ENV || 'development';
const knexInstance = knex(config[env]);

knexInstance.migrate.rollback()
  .then(() => {
    console.log('Migrations rollback complete.');
    process.exit();
  })
  .catch((err) => {
    console.error('Error rolling back migrations:', err);
    process.exit(1);
  });
