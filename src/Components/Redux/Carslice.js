import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [], // Array to store car data fetched from API
        currentPage: 1,
        totalPages: 10, // Total number of pages for pagination (hardcoded to 10)
        searchQuery: '',
    },
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },

        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setCars, setCurrentPage, setSearchQuery } = carSlice.actions;
export const selectCars = (state) => state.cars.cars;
export const selectCurrentPage = (state) => state.cars.currentPage;
export const selectSearchQuery = (state) => state.cars.searchQuery;
export const selectTotalPages = (state) => state.cars.totalPages;
export default carSlice.reducer;
