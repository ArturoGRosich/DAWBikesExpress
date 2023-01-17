require('dotenv').config();

const { Model } = require('objection');
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

Model.knex(knex);