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
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  baseExperience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'base_experience',
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isDefault: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: null,
  },
  locationAreaEncounters: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'location_area_encounters',
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
