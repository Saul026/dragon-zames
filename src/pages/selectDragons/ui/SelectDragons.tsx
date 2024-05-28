import classes from './SelectDragons.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { DragonCard } from '../../../app/types/Dragon';
import { useAppDispatch } from '../../../shared/store/hooks';
import { selectPlayer1Dragon, selectPlayer2Dragon } from '../../../widgets/player/model/PlayersSlice';
import { DragonInfo } from '../../../widgets/DragonInfo';
import { Arrow } from 'shared/ui/arrow';
import { PlayerSelector } from 'widgets/playerSelector';
import background from 'shared/assets/images/select-background.jpg';

export interface SelectDragonsPageInterface {
    dragons: DragonCard[];
    selectDragon(dragon: DragonCard): void;
    startGame(): void;
}

export const SelectDragons: React.FC<SelectDragonsPageInterface> = ({ dragons, selectDragon, startGame }) => {
    const [dragonIndex, setIndex] = useState(0);
    const [abilityIndex, setAbilityIndex] = useState<number>(0);
    const [dragonsArray, setDragonsArray] = useState<DragonCard[]>(dragons);

    let [player1Img, setPlayer1Img] = useState<string>('');
    let [player2Img, setPlayer2Img] = useState<string>('');
    let [currentPlayer, setCurrentplayer] = useState<number>(1);

    const player1Name = localStorage.getItem('player1Name');
    const player2Name = localStorage.getItem('player2Name');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function nextDragon() {
        let index;
        if (dragonIndex === dragonsArray.length - 1) {
            index = 0;
            setIndex(index);
        } else {
            index = dragonIndex + 1;
            setIndex(index);
        }
    }

    function prevDragon() {
        let index;
        if (dragonIndex === 0) {
            index = dragonsArray.length - 1;
            setIndex(index);
        } else {
            index = dragonIndex - 1;
            setIndex(index);
        }
    }

    function select() {
        const dragon = {
            id: currentPlayer,
            name: dragonsArray[dragonIndex].name,
            maxHealth: dragonsArray[dragonIndex].health,
            health: dragonsArray[dragonIndex].health,
            maxMana: dragonsArray[dragonIndex].mana,
            mana: dragonsArray[dragonIndex].mana,
            abilities: dragonsArray[dragonIndex].abilities,
            img: dragonsArray[dragonIndex].img,
        };
        if (currentPlayer === 1) {
            setPlayer1Img(dragonsArray[dragonIndex].img);
            dispatch(selectPlayer1Dragon(dragon));
            setCurrentplayer(2);
            localStorage.setItem('player1', JSON.stringify(dragon));
        } else {
            dispatch(selectPlayer2Dragon(dragon));
            setPlayer2Img(dragonsArray[dragonIndex].img);
            localStorage.setItem('player2', JSON.stringify(dragon));
        }

        let updatedDragonsArray = selectDragon(dragon)!;
        setDragonsArray(updatedDragonsArray);
        setIndex(0);
    }

    function start() {
        startGame();
        navigate('/dragon-zames/game-page');
    }

    return (
        <div className={classes['select-page']} style={{ backgroundImage: `url('${background}')` }}>
            {player2Img ? (
                ''
            ) : (
                <h1 className='players-name'>
                    Игрок "{currentPlayer === 1 ? player1Name : player2Name}" выбирает дракона.
                </h1>
            )}

            <PlayerSelector player='player1' playerName={player1Name!} playerImg={`${player1Img}`} />

            <div className={classes.container}>
                {player2Img ? (
                    <button className={classes['start-button']} onClick={start}>
                        Начать игру
                    </button>
                ) : (
                    <>
                        <Arrow type={classes.prev} callback={prevDragon} />
                        <div className={classes['dragons-container']}>
                            <img src={dragonsArray[dragonIndex].img} alt='' />
                        </div>
                        <Arrow type={classes.next} callback={nextDragon} />
                        <DragonInfo
                            dragon={dragonsArray[dragonIndex]}
                            abilityIndex={abilityIndex}
                            setAbilityIndex={setAbilityIndex}
                        />
                    </>
                )}
            </div>
            <PlayerSelector player='player2' playerName={player2Name!} playerImg={`${player2Img}`} />

            {player2Img ? (
                ''
            ) : (
                <button className={classes['select-button']} onClick={select}>
                    Выбрать этого дракона
                </button>
            )}
        </div>
    );
};
