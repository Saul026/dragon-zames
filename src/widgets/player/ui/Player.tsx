import { DragonType } from 'app/classes/Dragon';
import classes from './Player.module.css';
import type { FC } from 'react';
import avatar from 'shared/assets/images/avatar.png';

interface PlayerInterface {
    player: DragonType | null;
    playerName: string | null;
    playerId: number;
    health: number;
    mana: number;
    currentPlayer: number;
}

export const Player: FC<PlayerInterface> = ({ player, playerName, playerId, health, mana, currentPlayer }) => {
    return (
        <div className={classes[`player${playerId}`]}>
            <div className={classes.hud}>
                <div className={classes.avatar} style={{ backgroundImage: `url("${avatar}")` }}>
                    <img src={player?.img} alt='dragon' className={classes['avatar-img']} />
                </div>
                <div className={classes.info}>
                    <div className={`${classes.infoNames} ${currentPlayer === playerId ? classes.active : ''}`}>
                        <h3>{player?.name}</h3>
                        <h3>{playerName}</h3>
                    </div>
                    <progress
                        id='health'
                        value={health}
                        max={player!.maxHealth}
                        className={classes['health']}
                    ></progress>
                    <progress id='mana' value={mana} max={player?.maxMana} className={classes['mana']}></progress>
                    {currentPlayer === playerId ? <span className={classes.currentPlayer}>Ваш ход</span> : ''}
                </div>
            </div>
            <div className={classes.dragon}>
                <img src={player?.img} alt='' />
            </div>
        </div>
    );
};
