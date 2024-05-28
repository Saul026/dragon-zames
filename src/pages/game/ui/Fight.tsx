/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import classes from './Fight.module.css';
import background from 'shared/assets/images/fight.png';
import { DragonType } from 'app/classes/Dragon';
import { useAppDispatch, useAppSelector } from 'shared/store/hooks';
import { selectTurn } from '../model/TurnSlice';
import { selectCurrentPlayer } from '../model/CurrentPlayerSlice';
import { selectGameIsOver, setGameIsOver } from '../model/GameIsOverSlice';
import { Modal } from 'shared/ui/modal';
import { Player } from 'widgets/player';
import { Timer } from 'widgets/timer';

export interface FightInterface {
    player1: DragonType;
    player2: DragonType;
    switchPlayer(): void;
    gameOver(): void;
}

export const Fight: React.FC<FightInterface> = ({ player1, player2, switchPlayer, gameOver }) => {
    const dispatch = useAppDispatch();

    const turn = useAppSelector(selectTurn);

    const player1Name = localStorage.getItem('player1Name');
    const player2Name = localStorage.getItem('player2Name');

    const currentPlayer = useAppSelector(selectCurrentPlayer);

    const player = currentPlayer === 1 ? player1 : player2;
    const secondPlayer = currentPlayer === 2 ? player1 : player2;

    const gameIsOver = useAppSelector(selectGameIsOver);

    let [modal, setModal] = useState<Boolean>(false);
    let [abilityId, setAbilityId] = useState<number>(0);
    let [abilityIsUsing, setAbilityIsUsing] = useState<Boolean>(false);
    let [abilityClassName, setAbilityClassName] = useState<string>('');
    let [isDay, setIsDay] = useState<Boolean>(true);

    function abilityHandler(player: DragonType, secondPlayer: DragonType, abilityId: number) {
        if (!abilityIsUsing) {
            let damage = player.useAbility(abilityId);
            if (damage) {
                if (secondPlayer.health > damage) {
                    secondPlayer.takeDamage(damage);
                    setAbilityIsUsing(true);
                    setAbilityId(abilityId);
                    setAbilityClassName(player.abilities[abilityId].imgClassName);
                    setTimeout(() => {
                        setAbilityIsUsing(false);
                        setAbilityId(0);
                        setAbilityClassName('');
                        switchPlayer();
                    }, 1000);
                } else {
                    gameOver();
                    dispatch(setGameIsOver());
                }
            } else {
                setModal(true);
                setTimeout(() => {
                    setModal(false);
                }, 1000);
            }
        }
    }

    useEffect(() => {
        if ((turn - 1) % 5 === 0 && turn !== 1) {
            setIsDay((prevIsDay) => !prevIsDay);
        }
    }, [turn]);

    useEffect(() => {
        if (!isDay) {
            player.addMana();
            secondPlayer.addMana();
        }
    }, [turn]);

    return (
        <div className={classes['game-page']} style={{ backgroundImage: `url('${background}')` }}>
            {modal ? <Modal text={'Не хватает маны!'} color={'red'} gameIsOver={gameIsOver} /> : ''}
            {gameIsOver ? (
                <Modal
                    text={`Победа игрока "${currentPlayer === 1 ? player1Name : player2Name}"`}
                    color={'green'}
                    gameIsOver={gameIsOver}
                />
            ) : (
                ''
            )}
            <div className={classes['game-page__container']}>
                <Player
                    player={player1}
                    playerId={1}
                    playerName={player1Name}
                    health={player1.health}
                    mana={player1.mana}
                    currentPlayer={currentPlayer}
                />
                <Timer />
                <Player
                    player={player2}
                    playerId={2}
                    playerName={player2Name}
                    health={player2.health}
                    mana={player2.mana}
                    currentPlayer={currentPlayer}
                />
                {abilityIsUsing ? (
                    <img
                        src={player!.abilities[`${abilityId}`].img}
                        alt=''
                        className={classes[abilityClassName + currentPlayer]}
                    />
                ) : (
                    ''
                )}
            </div>
            <div className={classes.abilities}>
                <button className={classes.ability} onClick={() => abilityHandler(player!, secondPlayer!, 0)}>
                    <span>Способность: {player!.abilities[0].name}</span>
                    <span>Урон: {player!.abilities[0].damage}</span>
                    <span>Мана: {player!.abilities[0].manacost}</span>
                </button>
                <button className={classes.ability} onClick={() => abilityHandler(player!, secondPlayer!, 1)}>
                    <span>Способность: {player!.abilities[1].name}</span>
                    <span>Урон: {player!.abilities[1].damage}</span>
                    <span>Мана: {player!.abilities[1].manacost}</span>
                </button>
                <button className={classes.ability} onClick={() => abilityHandler(player!, secondPlayer!, 2)}>
                    <span>Способность: {player!.abilities[2].name}</span>
                    <span>Урон: {player!.abilities[2].damage}</span>
                    <span>Мана: {player!.abilities[2].manacost}</span>
                </button>
            </div>
        </div>
    );
};
