import React, { useEffect, useState } from "react";
import classes from "./GamePage.module.css";
import Timer from "../../components/timer/Timer";
import Player from "../../components/player/Player";
import Modal from "../../components/modal/Modal";

const GamePage = ({ player1, player2, game }) => {
  const player1Name = localStorage.getItem("player1Name");
  const player2Name = localStorage.getItem("player2Name");

  const currentPlayer = game.state.currentPlayer === 1 ? player1 : player2;
  const secondPlayer = game.state.currentPlayer === 2 ? player1 : player2;

  let [modal, setModal] = useState(false);
  let [abilityId, setAbilityId] = useState(null);
  let [abilityIsUsing, setAbilityIsUsing] = useState(false);
  let [abilityClassName, setAbilityClassName] = useState(null);

  function useAbility(player, secondPlayer, abilityId) {
    if (!abilityIsUsing) {
      let damage = player.useAbility(abilityId);
      if (damage) {
        if (secondPlayer.health > damage) {
          secondPlayer.takeDamage(damage);
          setAbilityIsUsing(true);
          setAbilityId(abilityId);
          setAbilityClassName(
            currentPlayer.abilitiesArray[abilityId].imgClassName
          );
          setTimeout(() => {
            setAbilityIsUsing(false);
            setAbilityId(null);
            setAbilityClassName(null);
            game.switchPlayer();
          }, [1000]);
        } else {
          game.gameOver();
        }
      } else {
        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, [1000]);
      }
    }
  }

  useEffect(() => {
    if (game.state.turn > 5) {
      currentPlayer.addMana();
    }
  }, [currentPlayer, game.state.turn]);

  return (
    <div className={classes["game-page"]}>
      {modal ? <Modal text={"Не хватает маны!"} color={"red"} /> : ""}
      {game.state.gameIsOver ? (
        <Modal
          text={`Победа игрока "${
            game.state.currentPlayer === 1 ? player1Name : player2Name
          }"`}
          color={"green"}
          gameIsOver={game.state.gameIsOver}
        />
      ) : (
        ""
      )}
      <div className={classes["game-page__container"]}>
        <Player
          player={player1}
          playerId={1}
          playerName={player1Name}
          game={game}
        />
        <Timer time={game.state.time} turn={game.state.turn} />
        <Player
          player={player2}
          playerId={2}
          playerName={player2Name}
          game={game}
        />
        {abilityIsUsing ? (
          <img
            src={currentPlayer.abilitiesArray[`${abilityId}`].img}
            alt=""
            className={classes[abilityClassName + game.state.currentPlayer]}
          />
        ) : (
          ""
        )}
      </div>
      <div className={classes.abiliyies}>
        <button
          className={classes.ability}
          onClick={() => useAbility(currentPlayer, secondPlayer, 0)}
        >
          <span>
            Способность: {currentPlayer.abilitiesArray[0].abilityName}
          </span>
          <span>Урон: {currentPlayer.abilitiesArray[0].abilityDamage}</span>
          <span>Мана: {currentPlayer.abilitiesArray[0].abilityMana}</span>
        </button>
        <button
          className={classes.ability}
          onClick={() => useAbility(currentPlayer, secondPlayer, 1)}
        >
          <span>
            Способность: {currentPlayer.abilitiesArray[1].abilityName}
          </span>
          <span>Урон: {currentPlayer.abilitiesArray[1].abilityDamage}</span>
          <span>Мана: {currentPlayer.abilitiesArray[1].abilityMana}</span>
        </button>
        <button
          className={classes.ability}
          onClick={() => useAbility(currentPlayer, secondPlayer, 2)}
        >
          <span>
            Способность: {currentPlayer.abilitiesArray[2].abilityName}
          </span>
          <span>Урон: {currentPlayer.abilitiesArray[2].abilityDamage}</span>
          <span>Мана: {currentPlayer.abilitiesArray[2].abilityMana}</span>
        </button>
      </div>
    </div>
  );
};

export default GamePage;
