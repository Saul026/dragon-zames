import { Route, Routes } from 'react-router-dom';
import './styles/reset.css';
import './styles/index.css';
import type { DragonInterface } from './types/Dragon';
import Game from './classes/Game';
import { DragonFactory } from './classes/DragonFactory';
import { useAppSelector } from 'shared/store/hooks';
import { selectPlayer1, selectPlayer2 } from 'widgets/player/model/PlayersSlice';
import { SelectDragons } from 'pages/selectDragons';
import { Start } from 'pages/start';
import { Fight } from 'pages/game';
import { dragonsArray } from 'shared/const/Dragons';
import background from 'shared/assets/images/backgroud.jpg';

const App = () => {
    let game = new Game(dragonsArray);
    let dragonFactory = new DragonFactory();

    const player1Selector: DragonInterface = useAppSelector(selectPlayer1);
    const player2Selector: DragonInterface = useAppSelector(selectPlayer2);

    const player1 = dragonFactory.createDragon(player1Selector, 1);
    const player2 = dragonFactory.createDragon(player2Selector, 1);

    return (
        <div
            className='App'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${background}')` }}
        >
            <Routes>
                <Route element={<Start />} path='*' />
                <Route
                    element={
                        <SelectDragons
                            dragons={dragonsArray}
                            selectDragon={(dragon) => game.selectDragon(dragon)}
                            startGame={() => game.startGame()}
                        />
                    }
                    path='dragon-zames/select-page'
                />
                <Route
                    element={
                        <Fight
                            player1={player1!}
                            player2={player2!}
                            switchPlayer={() => game.switchPlayer()}
                            gameOver={() => game.gameOver()}
                        />
                    }
                    path='dragon-zames/game-page'
                />
            </Routes>
        </div>
    );
};

export default App;
