import type { Ability } from '../types/Ability';
import type { DragonInterface } from '../types/Dragon';

export interface DragonType extends DragonInterface {
    useAbility(abilityId: number): number | 0;
    takeDamage(abilityDamage: number): void;
    spendMana(abilityManaCost: number): void;
    addMana(): number;
}

export default class Dragon implements DragonType {
    id: number;
    name: string;
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
    abilities: Ability[];
    img: string;

    constructor(id: number, name: string, maxHealth: number, maxMana: number, abilities: Ability[], img: string) {
        this.id = id;
        this.name = name;
        this.maxHealth = maxHealth;
        this.health = this.maxHealth;
        this.maxMana = maxMana;
        this.mana = this.maxMana;
        this.abilities = abilities;
        this.img = img;
    }

    takeDamage(abilityDamage: number) {
        this.health -= abilityDamage;
    }

    spendMana(abilityManaCost: number) {
        this.mana -= abilityManaCost;
    }

    useAbility(abilityId: number) {
        let abilityDamage = this.abilities[abilityId].damage;
        let abilityManaCost = this.abilities[abilityId].manacost;

        if (this.mana >= abilityManaCost) {
            this.spendMana(abilityManaCost);
            return abilityDamage;
        } else {
            return 0;
        }
    }

    addMana() {
        if (this.mana + 2 > this.maxMana) {
            this.mana = this.maxMana;
        } else {
            this.mana += 2;
        }
        return this.mana;
    }
}
