const { Model, DataTypes } = require('sequelize');

const PokemonTableName = 'pokemons';

const PokemonAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  extId: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  baseExperience: {
    type: DataTypes.INTEGER,
    field: 'base_experience',
  },
  height: {
    type: DataTypes.INTEGER,
  },
  isDefault: {
    type: DataTypes.BOOLEAN,
  },
  order: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  locationAreaEncounters: {
    type: DataTypes.STRING,
    field: 'location_area_encounters',
  },
  createdAt: {
    type: DataTypes.DATE,
    default: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    default: DataTypes.NOW,
    field: 'updated_at',
  },
};

class Pokemon extends Model {
  static associate(models) {
    // define association here
    this.belongsToMany(models.Ability, {
      through: 'PokemonAbility',
      foreignKey: 'pokemon_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PokemonTableName,
      modelName: 'Pokemon',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

module.exports = {
  Pokemon,
  PokemonAttributes,
  PokemonTableName,
};
