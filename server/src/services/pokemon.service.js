const { sequelize } = require('./../lib/sequelize');
const { AbilityService } = require('./ability.service');

const {
  models: { Pokemon, PokemonAbility },
} = sequelize;

const abilityService = new AbilityService();

class PokemonService {
  async #findByName(name) {
    return await Pokemon.findOne({ where: { name } });
  }

  async create(data) {
    const response = {};
    const {
      name,
      extId,
      baseExperience,
      height,
      isDefault,
      order,
      weight,
      locationAreaEncounters,
      abilities,
    } = data;

    let newPokemon = await this.#findByName(name);
    if (!newPokemon) newPokemon = Pokemon.build({ name });
    if (extId) newPokemon.extId = extId;
    if (baseExperience) newPokemon.baseExperience = baseExperience;
    if (height) newPokemon.height = height;
    if (isDefault) newPokemon.isDefault = isDefault;
    if (order) newPokemon.order = order;
    if (weight) newPokemon.weight = weight;
    if (locationAreaEncounters)
      newPokemon.locationAreaEncounters = locationAreaEncounters;
    await newPokemon.save();

    response.pokemon = newPokemon.dataValues;

    // Pokemon has abilities
    if (abilities && abilities.length > 0) {
      response.abilities = await Promise.all(
        abilities.map(async (ability) => {
          return await this.addAbility(ability, newPokemon);
        })
      );
    }

    return this.#outboundMapper({ ...response });
  }

  async addAbility(ability, newPokemon) {
    const newAbility = await abilityService.create(ability);

    const pokemonId = newPokemon.id;
    const abilityId = newAbility.id;

    let relation = await PokemonAbility.findOne({
      where: { pokemonId, abilityId },
    });

    if (!relation) {
      relation = await PokemonAbility.create({
        pokemonId,
        abilityId,
      });
    }

    return {
      ...newAbility.dataValues,
      relation: relation.dataValues,
    };
  }

  #outboundMapper({ pokemon, abilities }) {
    return {
      pokemon: {
        id: pokemon.id,
        extId: pokemon.extId,
        name: pokemon.name,
        baseExperience: pokemon.baseExperience,
        height: pokemon.height,
        isDefault: pokemon.isDefault,
        order: pokemon.order,
        weight: pokemon.weight,
        locationAreaEncounters: pokemon.locationAreaEncounters,
      },
      abilities: abilities.map((ability) => ({
        id: ability.id,
        isHidden: ability.isHidden,
        slot: ability.slot,
        name: ability.name,
        url: ability.url,
        relation: {
          id: ability.relation.id,
          pokemonId: ability.relation.pokemonId,
          abilityId: ability.relation.abilityId,
        },
      })),
    };
  }
}

module.exports = { PokemonService };
