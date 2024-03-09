import React from "react";
import classes from "./Player.module.css";

const Player = ({ player, playerName, playerId, game }) => {
  
  return (
    <div className={classes[`player${playerId}`]}>
      <div className={classes.hud}>
        <div className={classes.avatar}>
          <img
            src={player.img}
            alt="dragon"
            className={classes["avatar-img"]}
          />
        </div>
        <div className={classes.info}>
          <div
            className={`${classes.infoNames} ${
              game.state.currentPlayer === playerId ? classes.active : ""
            }`}
          >
            <h3>{player.name}</h3>
            <h3>{playerName}</h3>
          </div>
          <progress
            id="health"
            value={player.health}
            max={player.maxHeath}
            className={classes["health"]}
          ></progress>
          <progress
            id="mana"
            value={player.mana}
            max={player.maxMmana}
            className={classes["mana"]}
          ></progress>
          {game.state.currentPlayer === playerId ? (
            <span className={classes.currentPlayer}>Ваш ход</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={classes.dragon}>
        <img src={player.img} alt="" />
      </div>
    </div>
  );
};

export default Player;
