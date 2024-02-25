import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6562fddbee04015769a6aed7.mockapi.io/advert';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/', { params: { page: 1, limit: 12 } });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchCarById = createAsyncThunk(
//   'cars/fetchCarById',
//   async (carId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/advert/${carId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
