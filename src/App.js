import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import Game from "./classes/Game";

function App() {
  const dragons = [
    {
      name: "Спайро",
      health: 80,
      mana:30,
      abilities: [
        {
          abilityName: "Огненный шар",
          abilityDamage: 1,
          abilityMana: 0,
          imgClassName: 'fireball',
          img: "/dragon-zames/static/media/fireball.svg",
        },
        {
          abilityName: "Метеор",
          abilityDamage: 2,
          abilityMana: 2,
          imgClassName: 'meteorite',
          img: "/dragon-zames/static/media/meteorite.svg",
        },
        {
          abilityName: "Legendary Wind",
          abilityDamage: 4,
          abilityMana: 3,
          imgClassName: 'tornado',
          img: "/dragon-zames/static/media/tornado.svg",
        },
      ],
      img: "/dragon-zames/static/media/0.png",
    },
    {
      name: "Электро",
      health: 50,
      mana: 60,
      abilities: [
        {
          abilityName: "Огненный шар",
          abilityDamage: 1,
          abilityMana: 0,
          imgClassName: 'fireball',
          img: "/dragon-zames/static/media/fireball.svg",
        },
        {
          abilityName: "Молниеносный удар",
          abilityDamage: 3,
          abilityMana: 3,
          imgClassName: 'tornado',
          img: "/dragon-zames/static/media/tornado.svg",
        },
        {
          abilityName: "Гроза",
          abilityDamage: 6,
          abilityMana: 5,
          imgClassName: 'tornado',
          img: "/dragon-zames/static/media/lightning.png",
        },
      ],
      img: "/dragon-zames/static/media/1.png",
    },
    {
      name: "Лава",
      health: 60,
      mana: 40,
      abilities: [
        {
          abilityName: "Огненный шар",
          abilityDamage: 1,
          abilityMana: 0,
          imgClassName: 'fireball',
          img: "/dragon-zames/static/media/fireball.svg",
        },
        {
          abilityName: "Шаровый удар",
          abilityDamage: 3,
          abilityMana: 2,
          imgClassName: 'tornado',
          img: "/dragon-zames/static/media/lightning.png",
        },
        {
          abilityName: "Метеоритный дождь",
          abilityDamage: 5,
          abilityMana: 5,
          imgClassName: 'meteorite',
          img: "/dragon-zames/static/media/meteorite.svg",
        },
      ],
      img: "/dragon-zames/static/media/2.png",
    },
  ] 

  const player1Name = localStorage.getItem("player1Name");
  const player2Name = localStorage.getItem("player2Name");

  return (
    <div className="App">
      <Routes>
        <Route element={<StartPage />} path="*" />
        <Route
          element={
            <Game
              dragons={dragons}
              player1Name={player1Name}
              player2Name={player2Name}
            />
          }
          path="dragon-zames/game"
        />
      </Routes>
    </div>
  );
}

export default App;
