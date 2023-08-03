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
    isHidden: joi.boolean().required(),
    slot: joi.number().required(),
    ability: joi
      .object({
        name: joi.string().trim().required(),
        url: joi.string().trim().uri().required(),
      })
      .required(),
  }),
});

module.exports = { createPokemonSchema };
