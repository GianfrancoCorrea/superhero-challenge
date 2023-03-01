/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fectchData from '../../API';

export const fetchSuperhero = createAsyncThunk(
    'superhero/fetchSuperhero',
    async (value: string) => {
        const response = await fectchData(value);
        return response;
    },
);

interface SuperheroState {
    value: Array<any>;
    pending: boolean;
}

const superheroSlice = createSlice({
    name: 'superhero',
    initialState: {
        value: [],
        pending: false,
    } as SuperheroState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuperhero.pending, (state) => {
                state.pending = true;
            })
            .addCase(fetchSuperhero.fulfilled, (state, action) => {
                state.pending = false;
                state.value = action.payload;
            });
    },
});

export default superheroSlice.reducer;
