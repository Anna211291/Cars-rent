import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsList = action.payload;
        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carSlice.reducer;
