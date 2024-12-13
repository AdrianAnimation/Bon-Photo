import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './slices/photosSlice';
import photographersReducer from './slices/photographersSlice';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    photographers: photographersReducer,
  },
});