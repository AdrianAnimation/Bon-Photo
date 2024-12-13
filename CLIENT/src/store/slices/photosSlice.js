import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const UNSPLASH_API = 'https://api.unsplash.com';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (page = 1) => {
    const response = await axios.get(`${UNSPLASH_API}/photos`, {
      params: {
        page,
        per_page: 30,
        client_id: ACCESS_KEY,
      },
    });
    return response.data;
  }
);

export const searchPhotos = createAsyncThunk(
  'photos/searchPhotos',
  async (query) => {
    const response = await axios.get(`${UNSPLASH_API}/search/photos`, {
      params: {
        query,
        per_page: 30,
        client_id: ACCESS_KEY,
      },
    });
    return response.data.results;
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  searchQuery: '',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchPhotos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(searchPhotos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery } = photosSlice.actions;
export default photosSlice.reducer;