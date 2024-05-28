import type { Ability } from './Ability';

export interface DragonCard {
    name: string;
    health: number;
    mana: number;
    abilities: Ability[];
    img: string;
}

export interface DragonInterface {
    id: number;
    name: string;
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
    abilities: Ability[];
    img: string;
}
