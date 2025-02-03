import { createSlice } from "@reduxjs/toolkit";

const pointsSlice = createSlice({
    name: "points",
    initialState: { value: 0 },
    reducers: {
        addPoint: (state) => {
            state.value = state.value + 1;
        },
        removePoint: (state) => {
            state.value = state.value - 1;
        },
        resetPoint: (state) => {
            state.value = 0;
        }
    }

});

export const { addPoint, removePoint, resetPoint } = pointsSlice.actions;

export default pointsSlice.reducer;