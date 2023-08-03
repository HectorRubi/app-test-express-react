const express = require('express');
const { validatorSchemaHandler } = require('./../../middleware/validator');
const { createPokemonSchema } = require('./pokemon.schema');

const router = express.Router();

router.route('/').post((req, res, next) => {
  try {
    const { body } = req;
    const value = validatorSchemaHandler(createPokemonSchema, body);

    res.json({
      value,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = { pokemonRouter: router };
