import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fectchData from '../../API';

const initialState = {
    value: [],
    status: 'idle',
};

export const fetchSuperhero = createAsyncThunk(
    'superhero/fetchSuperhero',
    async () => {
        const response = await fectchData();
        return response;
    }
);

export const superheroSlice = createSlice({
    name: 'superhero',
    initialState,
    reducers: {
        savehero: (state, action) => {
            state.value = action.payload;
        },

    },
    additionalReducers: (builder) => {
        builder
            .addCase(fetchSuperhero.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSuperhero.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            });
    },
});

export const { savehero } = superheroSlice.actions;

export default superheroSlice.reducer;