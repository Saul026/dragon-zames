import { switchCurrentPlayer } from '../../pages/game/model/CurrentPlayerSlice';
import { updateTurn } from '../../pages/game/model/TurnSlice';
import { store } from '../../shared/store/store';
import { updateTime } from '../../widgets/timer/model/TimerSlice';
import type { DragonCard } from '../types/Dragon';

export interface GameInterface {
    currentPlayer: number;
    gameIsStarted: boolean;
    gameIsOver: boolean;
    time: number;
    dragons: DragonCard[];
    turn: number;
    intervalId: any;
}

export default class Game implements GameInterface {
    currentPlayer: number;
    gameIsStarted: boolean;
    gameIsOver: boolean;
    time: number;
    dragons: DragonCard[];
    turn: number;
    intervalId: any;

    constructor(dragons: DragonCard[]) {
        this.currentPlayer = 1;
        this.gameIsStarted = false;
        this.gameIsOver = false;
        this.time = 30;
        this.dragons = dragons;
        this.turn = 0;
        this.intervalId = null;
    }

    startTimer() {
        this.stopTimer();
        this.intervalId = setInterval(() => {
            if (this.time < 1) {
                this.restartTimer();
                this.switchPlayer();
            } else {
                this.time--;
                store.dispatch(updateTime(this.time));
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.intervalId);
    }

    restartTimer() {
        this.stopTimer();
        this.time = 30;
        this.startTimer();
    }

    switchPlayer() {
        this.restartTimer();
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        this.turn++;
        store.dispatch(switchCurrentPlayer(this.currentPlayer));
        store.dispatch(updateTurn(this.turn));
        return [this.currentPlayer, this.turn];
    }

    selectDragon(dragon: DragonCard) {
        this.dragons = this.dragons.filter((el) => el.name !== dragon.name);

        return this.dragons;
    }

    gameOver() {
        this.gameIsOver = true;
        this.stopTimer();
    }

    startGame() {
        this.gameIsStarted = true;
        this.turn = 1;
    }
}
