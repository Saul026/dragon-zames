/* eslint-disable no-case-declarations */
import type { DragonInterface } from '../types/Dragon';
import Dragon from './Dragon';

export class DragonFactory {
    createDragon(player: DragonInterface, playerId: number) {
        let dragon: Dragon | null = null;

        switch (playerId) {
            case 1:
                dragon = new Dragon(1, player.name, player.health, player.mana, player.abilities, player.img);

                break;

            case 2:
                dragon = new Dragon(2, player.name, player.health, player.mana, player.abilities, player.img);

                break;
        }

        return dragon;
    }
}
