import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { timeSlice } from '../../widgets/timer/model/TimerSlice';
import { playersSlice } from '../../widgets/player/model/PlayersSlice';
import { currentPlayerSlice } from '../../pages/game/model/CurrentPlayerSlice';
import { turnSlice } from '../../pages/game/model/TurnSlice';
import { GameSlice } from '../../pages/game/model/GameIsOverSlice';

const rootReducer = combineSlices(timeSlice, playersSlice, currentPlayerSlice, turnSlice, GameSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
    });
    setupListeners(store.dispatch);
    return store;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
