const { Pokemon, PokemonAttributes } = require('./pokemon.model');
const { Ability, AbilityAttributes } = require('./ability.model');

class Models {
  static setup(sequelize) {
    Pokemon.init(PokemonAttributes, Pokemon.config(sequelize));
    Ability.init(AbilityAttributes, Ability.config(sequelize));

    Pokemon.associate(sequelize.models);
    Ability.associate(sequelize.models);
  }
}

module.exports = { Models };
