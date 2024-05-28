import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Time {
    time: number;
}

const initialState: Time = {
    time: 30,
};

export const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: (create) => ({
        updateTime: create.reducer((state, action: PayloadAction<number>) => {
            state.time = action.payload;
        }),
    }),
    selectors: {
        selectTime: (timer) => timer.time,
    },
});

export const { updateTime } = timeSlice.actions;
export const { selectTime } = timeSlice.selectors;
