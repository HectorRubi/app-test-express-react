const { errorHandler } = require('./error.handler');
const { boomErrorHandler } = require('./boom-error.handler');
const { sequelizeErrorHandler } = require('./sequelize-error.handler');

module.exports = { errorHandler, boomErrorHandler, sequelizeErrorHandler };
