import classes from './Modal.module.css';
import type { FC } from 'react';

interface Props {
    text: string;
    color: string;
    gameIsOver: Boolean;
}

export const Modal: FC<Props> = ({ text, color, gameIsOver }) => {
    return (
        <div className={classes.modal}>
            <div className={classes['modal-bg']}></div>
            <div className={classes['modal-window']} style={{ backgroundColor: color }}>
                <p> {text}</p>
                {gameIsOver ? <a href={'/zames'}>Вернутся в самое начало.</a> : ''}
            </div>
        </div>
    );
};
