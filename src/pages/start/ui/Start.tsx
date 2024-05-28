import React, { useState } from 'react';
import classes from './Start.module.css';
import { useNavigate } from 'react-router-dom';

export const Start = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const formRef = React.createRef<HTMLFormElement>();

    function start(e: any) {
        e.preventDefault();
        const form: any = formRef.current;
        let player1Name = form.player1.value;
        let player2Name = form.player2.value;

        if (player1Name.length === 0 || player2Name.length === 0) {
            setError(true);
            return;
        }

        localStorage.setItem('player1Name', player1Name);
        localStorage.setItem('player2Name', player2Name);

        navigate(`dragon-zames/select-page`);
    }

    return (
        <form className={classes.modal} ref={formRef}>
            <h2>Введите имена игроков.</h2>
            <div>
                Игрок №1
                <input type='text' name='player1' onClick={() => setError(false)} />
            </div>
            <div>
                Игрок №2
                <input type='text' name='player2' onClick={() => setError(false)} />
            </div>
            {error ? <div style={{ color: 'red' }}>Я настоятельно рекомендую ввести имена.</div> : ''}
            <button className={classes.button} onClick={start}>
                <span>PLAY NOW</span>
            </button>
        </form>
    );
};
