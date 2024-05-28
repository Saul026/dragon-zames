import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CurrentPlayer {
    currentPlayer: number;
}

const initialState: CurrentPlayer = {
    currentPlayer: 1,
};

export const currentPlayerSlice = createSlice({
    name: 'currentPlayer',
    initialState,
    reducers: (create) => ({
        switchCurrentPlayer: create.reducer((state, action: PayloadAction<number>) => {
            state.currentPlayer = action.payload;
        }),
    }),
    selectors: {
        selectCurrentPlayer: (currentPlayer) => currentPlayer.currentPlayer,
    },
});

export const { switchCurrentPlayer } = currentPlayerSlice.actions;
export const { selectCurrentPlayer } = currentPlayerSlice.selectors;
