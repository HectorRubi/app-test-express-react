const joi = require('joi');

const createPokemonSchema = joi.object({
  extId: joi.number(),
  name: joi.string().trim().required(),
  baseExperience: joi.number(),
  height: joi.number(),
  isDefault: joi.boolean(),
  order: joi.number(),
  weight: joi.number(),
  locationAreaEncounters: joi.string().trim(),
  abilities: joi.object({
    isHidden: joi.boolean(),
    slot: joi.number(),
    ability: joi.object({
      name: joi.string().trim(),
      url: joi.string().trim().uri(),
    }),
  }),
});

module.exports = { createPokemonSchema };
