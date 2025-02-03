import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';
import pointsReducer from './pointsSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        points: pointsReducer
    }
});

export default store;