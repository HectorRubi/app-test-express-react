const { Model, DataTypes } = require('sequelize');

const AbilityTableName = 'abilities';

const AbilityAttributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  isHidden: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_hidden',
  },
  slot: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Ability extends Model {
  static associate(models) {
    // define association here
    this.belongsToMany(models.Pokemon, {
      through: 'PokemonAbility',
      foreignKey: 'ability_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AbilityTableName,
      modelName: 'Ability',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }
}

module.exports = {
  Ability,
  AbilityAttributes,
  AbilityTableName,
};
