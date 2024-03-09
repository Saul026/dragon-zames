import React from "react";
import classes from "./DragonInfo.module.css";

const DragonInfo = ({ dragons, index, abilityIndex, setAbilityIndex }) => {
  function nextAbility() {
    let nextIndex;
    if (abilityIndex === dragons[index].abilities.length - 1) {
      nextIndex = 0;
      setAbilityIndex(nextIndex);
    } else {
      nextIndex = abilityIndex + 1;
      setAbilityIndex(nextIndex);
    }
  }

  function prevAbility() {
    let prevIndex;
    if (abilityIndex === 0) {
      prevIndex = dragons[index].abilities.length - 1;
      setAbilityIndex(prevIndex);
    } else {
      prevIndex = abilityIndex - 1;
      setAbilityIndex(prevIndex);
    }
  }

  return (
    <div className={classes.info}>
      <h1 className={classes.name}>
        <span className={classes["bold"]}>Имя:</span> {dragons[index].name}
      </h1>
      <p className={classes.health}>
        <span className={classes["bold"]}>Здоровье:</span>{" "}
        {dragons[index].health} ед.
      </p>
      <p className={classes.mana}>
        <span className={classes["bold"]}> Начальная мана:</span>{" "}
        {dragons[index].mana} ед.
      </p>
      <div className={classes.abilities}>
        <span className={classes["bold"]}>Способности:</span>
        <h2>Способность {abilityIndex + 1}:</h2>
        <div className={classes["abilities-container"]}>
          <img
            src="/dragon-zames/static/media/arrow.png"
            alt=""
            onClick={prevAbility}
            className={classes.prevAbility}
          />
          <div className={classes["abilities-info"]}>
            <span>
              Название: {dragons[index].abilities[abilityIndex].abilityName}
            </span>
            <span>
              Урон: {dragons[index].abilities[abilityIndex].abilityDamage} ед.
            </span>
            <span>
              Потребление маны:{" "}
              {dragons[index].abilities[abilityIndex].abilityMana} ед.
            </span>
          </div>
          <img
            src="/dragon-zames/static/media/arrow.png"
            alt=""
            onClick={nextAbility}
            className={classes.nextAbility}
          />
        </div>
      </div>
    </div>
  );
};

export default DragonInfo;
