const { env } = require('./env');

const USER = encodeURIComponent(env.dbUser);
const PASS = encodeURIComponent(env.dbPass);
const URI = `postgres://${USER}:${PASS}@${env.dbHost}:${env.dbPort}/${env.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
