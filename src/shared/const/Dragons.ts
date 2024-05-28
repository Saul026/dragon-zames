import { DragonCard } from 'app/types/Dragon';
import fireball from 'shared/assets/images/fireball.svg';
import tornado from 'shared/assets/images/tornado.svg';
import meteorite from 'shared/assets/images/meteorite.svg';
import lightning from 'shared/assets/images/lightning.png';
import dragon1 from 'shared/assets/images/0.png';
import dragon2 from 'shared/assets/images/1.png';
import dragon3 from 'shared/assets/images/2.png';

export const dragonsArray: DragonCard[] = [
    {
        name: 'Спайро',
        health: 80,
        mana: 30,
        abilities: [
            {
                name: 'Огненный шар',
                damage: 1,
                manacost: 0,
                imgClassName: 'fireball',
                img: fireball,
            },
            {
                name: 'Метеор',
                damage: 2,
                manacost: 2,
                imgClassName: 'meteorite',
                img: meteorite,
            },
            {
                name: 'Legendary Wind',
                damage: 4,
                manacost: 3,
                imgClassName: 'tornado',
                img: tornado,
            },
        ],
        img: dragon1,
    },
    {
        name: 'Электро',
        health: 50,
        mana: 60,
        abilities: [
            {
                name: 'Огненный шар',
                damage: 1,
                manacost: 0,
                imgClassName: 'fireball',
                img: fireball,
            },
            {
                name: 'Молниеносный удар',
                damage: 3,
                manacost: 3,
                imgClassName: 'tornado',
                img: tornado,
            },
            {
                name: 'Гроза',
                damage: 6,
                manacost: 5,
                imgClassName: 'tornado',
                img: lightning,
            },
        ],
        img: dragon2,
    },
    {
        name: 'Лава',
        health: 60,
        mana: 40,
        abilities: [
            {
                name: 'Огненный шар',
                damage: 1,
                manacost: 0,
                imgClassName: 'fireball',
                img: fireball,
            },
            {
                name: 'Шаровый удар',
                damage: 3,
                manacost: 2,
                imgClassName: 'tornado',
                img: lightning,
            },
            {
                name: 'Метеоритный дождь',
                damage: 5,
                manacost: 5,
                imgClassName: 'meteorite',
                img: meteorite,
            },
        ],
        img: dragon3,
    },
];
