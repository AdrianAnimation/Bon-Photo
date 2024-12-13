import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const UNSPLASH_API = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotographerPhotos = createAsyncThunk(
  'photographers/fetchPhotos',
  async (username) => {
    const response = await axios.get(`${UNSPLASH_API}/users/${username}/photos`, {
      params: {
        per_page: 30,
        client_id: ACCESS_KEY,
      },
    });
    return { username, photos: response.data };
  }
);

const initialState = {
  items: [],
  photographerPhotos: {},
  status: 'idle',
  error: null,
};

const photographersSlice = createSlice({
  name: 'photographers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotographerPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhotographerPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.photographerPhotos[action.payload.username] = action.payload.photos;
      })
      .addCase(fetchPhotographerPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default photographersSlice.reducer;