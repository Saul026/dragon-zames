import { Arrow } from 'shared/ui/arrow';
import classes from './DragonInfo.module.css';
import type { FC } from 'react';
import { DragonCard } from 'app/types/Dragon';

interface Props {
    dragon: DragonCard;
    abilityIndex: number;
    setAbilityIndex(index: number): void;
}

export const DragonInfo: FC<Props> = ({ dragon, abilityIndex, setAbilityIndex }) => {
    function nextAbility() {
        let index;
        if (abilityIndex === dragon.abilities.length - 1) {
            index = 0;
        } else {
            index = abilityIndex + 1;
        }
        setAbilityIndex(index);
    }

    function prevAbility() {
        let index;
        if (abilityIndex === 0) {
            index = dragon.abilities.length - 1;
        } else {
            index = abilityIndex - 1;
        }
        setAbilityIndex(index);
    }

    return (
        <div className={classes.info}>
            <h1 className={classes.name}>
                <span className={classes['bold']}>Имя:</span>
                {dragon.name}
            </h1>
            <p className={classes.health}>
                <span className={classes['bold']}>Здоровье:</span>
                {dragon.health} ед.
            </p>
            <p className={classes.mana}>
                <span className={classes['bold']}> Начальная мана:</span>
                {dragon.mana} ед.
            </p>
            <div className={classes.abilities}>
                <span className={classes['bold']}>Способности:</span>
                <h2>Способность {abilityIndex + 1}:</h2>
                <div className={classes['abilities-container']}>
                    <Arrow type={classes.prevAbility} callback={prevAbility} />
                    <div className={classes['abilities-info']}>
                        <span>
                            Название:
                            {dragon.abilities[abilityIndex].name}
                        </span>
                        <span>
                            Урон: {dragon.abilities[abilityIndex].damage}
                            ед.
                        </span>
                        <span>
                            Потребление маны:
                            {dragon.abilities[abilityIndex].manacost} ед.
                        </span>
                    </div>
                    <Arrow type={classes.nextAbility} callback={nextAbility} />
                </div>
            </div>
        </div>
    );
};
