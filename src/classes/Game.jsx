import React, { Component } from "react";
import SelectPage from "../pages/SelectPage/SelectPage";
import GamePage from "../pages/GamePage/GamePage";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null,
      currentPlayer: 1,
      gameIsStarted: false,
      gameIsOver: false,
      time: 30,
      dragons: this.props.dragons,
      turn: 0
    };

    this.selectDragon = this.selectDragon.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  startTimer = () => {
    this.stopTimer();
    this.intervalId = setInterval(() => {
      if (this.state.time < 1) {
        this.restartTimer();
        this.switchPlayer();
      } else {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }));
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
  };

  restartTimer = () => {
    this.stopTimer();
    this.setState({ time: 30 }, () => {
      this.startTimer();
    });
  };

  switchPlayer() {
    this.restartTimer();
    this.setState((prevState) => ({
      currentPlayer: prevState.currentPlayer === 1 ? 2 : 1,
      turn: prevState.turn + 1,
    }));
    if(this.state.turn === 10){
      this.setState(() => ({
        turn: 0,
      }));
    }
  }

  selectDragon(dragon) {
    if (this.state.currentPlayer === 1) {
      this.setState((prevState) => ({
        player1: dragon,
        dragons: prevState.dragons.filter((el) => el.name !== dragon.name),
        currentPlayer: prevState.currentPlayer === 1 ? 2 : 1,
      }));
    } else {
      this.setState((prevState) => ({
        player2: dragon,
        dragons: prevState.dragons.filter((el) => el.name !== dragon.name),
        currentPlayer: Math.floor(Math.random() * 2) + 1,
      }));
    }
  }

  gameOver() {
    this.setState(() => ({
      gameIsOver: true,
    }));
    this.stopTimer();
  }

  startGame() {
    this.setState(() => ({
      gameIsStarted: true,
      turn: 1
    }));
  }

  render() {
    return (
      <div>
        {!this.state.gameIsStarted ? (
          <SelectPage
            dragons={this.state.dragons}
            selectDragon={this.selectDragon}
            startGame={this.startGame}
          />
        ) : (
          <GamePage
            player1={this.state.player1}
            player2={this.state.player2}
            game={this}
          />
        )}
      </div>
    );
  }
}
