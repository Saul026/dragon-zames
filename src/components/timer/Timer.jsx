import React from "react";
import classes from "./Timer.module.css";

const Timer = ({ time, turn }) => {
  const src = turn <= 5 ? "/dragon-zames/static/media/sun.png" : "/dragon-zames/static/media/moon.svg";

  return (
    <div className={classes.timer}>
      <h3> Время на ход</h3>

      <div className={classes["progress-container"]}>
        <span className={classes["progress-time"]}>{time}</span>
        <img src={src} alt="daily-cycle" className={classes["daily-cycle"]} />
        <div className={classes.tooltiptext}>Ночью драконы восстанавливают ману!</div>
      </div>
    </div>
  );
};

export default Timer;
