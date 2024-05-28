import type { FC } from 'react';
import classes from './PlayerSelector.module.css';

interface Props {
    player: string;
    playerName: string;
    playerImg: string;
}

export const PlayerSelector: FC<Props> = ({ player, playerName, playerImg }) => {
    return (
        <div className={classes[`${player}`]}>
            <h1 className={classes['player-name']}>Дракон игрока "{playerName}".</h1>
            <div className={classes['player-dragon__container']}>
                {playerImg ? (
                    <img src={`${playerImg}`} alt='player-dragon' className={classes['player-dragon']} />
                ) : (
                    <h3 className={classes['dragon-is-not-slected']}>Дракон еще не выбран.</h3>
                )}
            </div>
        </div>
    );
};
