import { createSlice } from '@reduxjs/toolkit';

interface GameState {
    gameIsOver: Boolean;
}

const initialState: GameState = {
    gameIsOver: false,
};

export const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: (create) => ({
        setGameIsOver: create.reducer((state) => {
            state.gameIsOver = true;
        }),
    }),
    selectors: {
        selectGameIsOver: (game) => game.gameIsOver,
    },
});

export const { setGameIsOver } = GameSlice.actions;
export const { selectGameIsOver } = GameSlice.selectors;
