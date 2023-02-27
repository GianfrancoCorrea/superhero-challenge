import { configureStore } from '@reduxjs/toolkit';
import superheroReducer from '../reducers/superhero/superheroSlice';
export const store = configureStore({
  reducer: {
    superhero: superheroReducer,
  },
});
