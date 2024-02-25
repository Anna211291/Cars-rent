import { carsReducer } from './cars/carsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
