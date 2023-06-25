import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreorCategory';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
