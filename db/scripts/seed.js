const knex = require('knex');
const config = require('../../knexfile');

const env = process.env.NODE_ENV || 'development';
const knexInstance = knex(config[env]);

knexInstance.seed.run()
  .then(() => {
    console.log('Seeders complete.');
    process.exit();
  })
  .catch((err) => {
    console.error('Error running seeders:', err);
    process.exit(1);
  });