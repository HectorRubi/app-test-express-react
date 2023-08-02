const { Sequelize } = require('sequelize');
const { env } = require('./../config/env');
const { Models } = require('./../db/models');

const USER = encodeURIComponent(env.dbUser);
const PASS = encodeURIComponent(env.dbPass);

const URI = `postgres://${USER}:${PASS}@${env.dbHost}:${env.dbPort}/${env.dbName}`;
const sequelize = new Sequelize(URI);

Models.setup(sequelize);

module.exports = { sequelize };
