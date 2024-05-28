import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Turn {
    turn: number;
}

const initialState: Turn = {
    turn: 1,
};

export const turnSlice = createSlice({
    name: 'turn',
    initialState,
    reducers: (create) => ({
        updateTurn: create.reducer((state, action: PayloadAction<number>) => {
            state.turn = action.payload;
        }),
    }),
    selectors: {
        selectTurn: (turn) => turn.turn,
    },
});

export const { updateTurn } = turnSlice.actions;
export const { selectTurn } = turnSlice.selectors;
