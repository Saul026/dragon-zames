import DragonInfo from "../../components/DragonInfo/DragonInfo";
import classes from "./SelectPage.module.css";
import React, { useRef, useState } from "react";
import Dragon from "../../classes/Dragon";

const SelectPage = ({ dragons, selectDragon, startGame }) => {
  const [index, setIndex] = useState(0);
  const [abilityIndex, setAbilityIndex] = useState(0);

  let [player1Img, setPlayer1Img] = useState(0);
  let [player2Img, setPlayer2Img] = useState(0);
  let [currentPlayer, setCurrentplayer] = useState(1);

  let dragonImgSrc = useRef();

  const player1Name = localStorage.getItem("player1Name");
  const player2Name = localStorage.getItem("player2Name");

  function nextDragon() {
    let nextIndex;
    if (index === dragons.length - 1) {
      nextIndex = 0;
      setIndex(nextIndex);
    } else {
      nextIndex = index + 1;
      setIndex(nextIndex);
    }
  }

  function prevDragon() {
    let prevIndex;
    if (index === 0) {
      prevIndex = dragons.length - 1;
      setIndex(prevIndex);
    } else {
      prevIndex = index - 1;
      setIndex(prevIndex);
    }
  }

  function select() {
    if (currentPlayer === 2) {
      setPlayer2Img(dragonImgSrc.current.getAttribute("src"));
    } else {
      setCurrentplayer(2);
      setPlayer1Img(dragonImgSrc.current.getAttribute("src"));
    }

    const dragon = new Dragon(
      dragons[index].name,
      dragons[index].health,
      dragons[index].mana,
      dragons[index].abilities,
      dragons[index].img
    );
    selectDragon(dragon);
    setIndex(0);
  }

  function start() {
    startGame();
  }

  return (
    <div className={classes["select-page"]}>
      {player2Img ? (
        <button className={classes["select-button"]} onClick={start}>
          Начать игру
        </button>
      ) : (
        <h1 className="players-name">
          Игрок "{currentPlayer === 1 ? player1Name : player2Name}" выбирает
          дракона.
        </h1>
      )}

      <div className={classes.player1}>
        <h1 className={classes["player-name"]}>
          Дракон игрока "{player1Name}".
        </h1>
        <div className={classes["player-dragon__container"]}>
          {player1Img ? (
            <img
              src={`${player1Img}`}
              alt="player1-dragon"
              className={classes["player-dragon"]}
            />
          ) : (
            <h3 className={classes["dragon-is-not-slected"]}>
              Дракон еще не выбран.
            </h3>
          )}
        </div>
      </div>
      <div className={classes.container}>
        <img
          src="/dragon-zames/static/media/arrow.png"
          alt=""
          onClick={prevDragon}
          className={classes.prev}
        />
        <div className={classes["dragons-container"]}>
          <img src={dragons[index].img} alt="" ref={dragonImgSrc} />
        </div>
        <img
          src="/dragon-zames/static/media/arrow.png"
          alt="arrow"
          onClick={nextDragon}
          className={classes.next}
        />
        <DragonInfo
          dragons={dragons}
          index={index}
          abilityIndex={abilityIndex}
          setAbilityIndex={setAbilityIndex}
        />
      </div>
      <div className={classes.player2}>
        <h1 className={classes["player-name"]}>
          Дракон игрока "{player2Name}".
        </h1>
        <div className={classes["player-dragon__container"]}>
          {player2Img ? (
            <img
              src={`${player2Img}`}
              alt="player2-dragon"
              className={classes["player-dragon"]}
            />
          ) : (
            <h3 className={classes["dragon-is-not-slected"]}>
              Дракон еще не выбран.
            </h3>
          )}
        </div>
      </div>
      {player2Img ? (
        ""
      ) : (
        <button className={classes["select-button"]} onClick={select}>
          Выбрать этого дракона
        </button>
      )}
    </div>
  );
};

export default SelectPage;
