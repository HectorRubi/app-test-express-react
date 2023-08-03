const express = require('express');
const { validatorSchemaHandler } = require('./../../middleware/validator');
const { createPokemonSchema } = require('./pokemon.schema');
const { PokemonService } = require('./../../services/pokemon.service');

const router = express.Router();
const pokemonService = new PokemonService();

router.route('/').post(async (req, res, next) => {
  try {
    const { body } = req;
    const data = validatorSchemaHandler(createPokemonSchema, body);
    const pokemon = await pokemonService.create(data);
    res.status(201).json(pokemon);
  } catch (error) {
    next(error);
  }
});

module.exports = { pokemonRouter: router };
