import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DragonInterface } from '../../../app/types/Dragon';

interface PlayersState {
    player1: DragonInterface;
    player2: DragonInterface;
}

const initialState: PlayersState = {
    player1: {
        id: 1,
        name: 'player1',
        maxHealth: 0,
        maxMana: 0,
        health: 0,
        mana: 0,
        abilities: [],
        img: 'img1',
    },
    player2: {
        id: 2,
        name: 'player2',
        maxHealth: 0,
        maxMana: 0,
        health: 0,
        mana: 0,
        abilities: [],
        img: 'img2',
    },
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: (create) => ({
        selectPlayer1Dragon: create.reducer((state, action: PayloadAction<DragonInterface>) => {
            state.player1 = action.payload;
        }),
        selectPlayer2Dragon: create.reducer((state, action: PayloadAction<DragonInterface>) => {
            state.player2 = action.payload;
        }),
    }),
    selectors: {
        selectPlayer1: (player) => player.player1,
        selectPlayer2: (player) => player.player2,
    },
});

export const { selectPlayer1Dragon, selectPlayer2Dragon } = playersSlice.actions;
export const { selectPlayer1, selectPlayer2 } = playersSlice.selectors;
