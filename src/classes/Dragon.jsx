export default class Dragon {
  constructor(name, maxHeath, maxMmana, abilitiesArray, img) {
    this.name = name;
    this.maxHeath = maxHeath;
    this.health = this.maxHeath;
    this.maxMmana = maxMmana;
    this.mana = this.maxMmana;
    this.abilitiesArray = abilitiesArray;
    this.img = img;
  }

  takeDamage(abilityDamage) {
    this.health -= abilityDamage;
  }

  spendMana(abilityManaCost) {
    this.mana -= abilityManaCost;
  }

  useAbility(abilityId) {
    let abilityDamage = this.abilitiesArray[abilityId].abilityDamage;
    let abilityManaCost = this.abilitiesArray[abilityId].abilityMana;

    if (this.mana >= abilityManaCost) {
      this.spendMana(abilityManaCost);
      return abilityDamage;
    } else {
      return false;
    }
  }

  addMana() {
    if (this.mana + 2 > this.maxMmana) {
      this.mana = this.maxMmana;
      return;
    }
    this.mana += 2;
  }
}
