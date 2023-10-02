import { configureStore } from '@reduxjs/toolkit';
import carReducer from './Carslice';

export const store = configureStore({
    reducer: {
        cars: carReducer, // Combining the carReducer with other reducers if any
    },
});
