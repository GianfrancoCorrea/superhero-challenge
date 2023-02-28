import { configureStore } from '@reduxjs/toolkit';
import superheroReducer from '../reducers/superhero/superheroSlice';

export default configureStore({
    reducer: {
        superhero: superheroReducer,
    },
});
