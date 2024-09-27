import { configureStore } from '@reduxjs/toolkit';

import favoriteReducer from './favorites';     // You can call it favoriteReducer, favoriteSlice, etc.


export const store = configureStore({
    reducer: {
        favoriteMeals : favoriteReducer
    }
});