require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
          host: process.env.DB_HOST_DEV,
          user: process.env.DB_USER_DEV,
          password: process.env.DB_PASSWORD_DEV,
          database: process.env.DB_NAME_DEV,
          port: process.env.DB_PORT_DEV,
        },
        migrations: {
          directory: './db/migrations',
        },
        seeds: {
          directory: './db/seeds',
        },
      },
      production: {
        client: 'pg',
        connection: {
          host: process.env.DB_HOST_PROD,
          user: process.env.DB_USER_PROD,
          password: process.env.DB_PASSWORD_PROD,
          database: process.env.DB_NAME_PROD,
          port: process.env.DB_PORT_PROD,
        },
        migrations: {
          directory: './db/migrations',
        },
        seeds: {
          directory: './db/seeds',
        },
      }
};