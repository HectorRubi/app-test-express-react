const express = require('express');
const { pokemonRouter } = require('./pokemon.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);

  router.use('/pokemon', pokemonRouter);
}

module.exports = { routerApi };
