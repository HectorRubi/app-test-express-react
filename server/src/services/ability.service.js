const { sequelize } = require('./../lib/sequelize');

const {
  models: { Ability },
} = sequelize;

class AbilityService {
  async #findByName(name) {
    return await Ability.findOne({ where: { name } });
  }

  async create(data) {
    const {
      isHidden,
      slot,
      ability: { name, url },
    } = data;

    let ability = await this.#findByName(name);
    if (!ability) {
      ability = await Ability.create({
        isHidden,
        slot,
        name,
        url,
      });
    }

    return ability;
  }
}

module.exports = { AbilityService };
