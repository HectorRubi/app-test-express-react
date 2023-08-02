const { Model, DataTypes } = require('sequelize');
const { PokemonTableName } = require('./pokemon.model');
const { AbilityTableName } = require('./ability.model');

const PokemonAbilityTableName = 'pokemons_abilities';

const PokemonAbilityAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  pokemonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'pokemon_id',
    references: {
      model: PokemonTableName,
      key: 'id',
    },
  },
  abilityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'ability_id',
    references: {
      model: AbilityTableName,
      key: 'id',
    },
  },
};

class PokemonAbility extends Model {
  static associate() {
    // define association here
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PokemonAbilityTableName,
      modelName: 'PokemonAbility',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

module.exports = {
  PokemonAbility,
  PokemonAbilityAttributes,
  PokemonAbilityTableName,
};
