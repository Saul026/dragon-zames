import React from "react";
import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = ({ text, color, gameIsOver }) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-bg"]}></div>
      <div
        className={classes["modal-window"]}
        style={{ backgroundColor: color }}
      >
       <p> {text}</p>
        {gameIsOver ? <Link to={"/zames"}>Вернутся в самое начало.</Link> : ""}
      </div>
    </div>
  );
};

export default Modal;
