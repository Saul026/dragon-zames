/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import classes from './Timer.module.css';
import sun from 'shared/assets/images/sun.png';
import moon from 'shared/assets/images/moon.svg';
import { selectTime } from '../model/TimerSlice';
import { selectTurn } from 'pages/game/model/TurnSlice';
import { useAppSelector } from 'shared/store/hooks';

export const Timer = () => {
    let [isDay, setIsDay] = useState(true);

    const time = useAppSelector(selectTime);
    const turn = useAppSelector(selectTurn);

    useEffect(() => {
        if ((turn - 1) % 5 === 0 && turn !== 1) {
            setIsDay(!isDay);
        }
    }, [turn]);

    const src = isDay ? sun : moon;

    return (
        <div className={classes.timer}>
            <h3> Время на ход</h3>
            <div className={classes['progress-container']}>
                <span className={classes['progress-time']}>{time}</span>
                <img src={src} alt='daily-cycle' className={classes['daily-cycle']} />
                <div className={classes.tooltiptext}>
                    Ночью драконы восстанавливают ману! Смена дня и ночи происходит каждые 5 ходов.
                    <br /> Текущий ход:{turn}
                </div>
            </div>
        </div>
    );
};
