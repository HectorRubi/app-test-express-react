'use strict';
const {
  PokemonAttributes,
  PokemonTableName,
} = require('./../models/pokemon.model');
const {
  AbilityAttributes,
  AbilityTableName,
} = require('./../models/ability.model');
const {
  PokemonAbilityAttributes,
  PokemonAbilityTableName,
} = require('./../models/pokemon-ability.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PokemonTableName, PokemonAttributes);
    await queryInterface.createTable(AbilityTableName, AbilityAttributes);
    await queryInterface.createTable(
      PokemonAbilityTableName,
      PokemonAbilityAttributes
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable(PokemonTableName);
    await queryInterface.dropTable(AbilityTableName);
    await queryInterface.dropTable(PokemonAbilityTableName);
  },
};
