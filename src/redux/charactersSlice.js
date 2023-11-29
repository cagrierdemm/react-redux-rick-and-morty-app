import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (pageNum) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character?page=${pageNum}`);
    return res.data;
})


export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        status: "idle",
        error: null,
        num: 1,
        hasNextPage: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.items = [...state.items, ...action.payload.results];
                state.status = "succeeded";
                state.num += 1;

                if(action.payload.results.length < 20){
                    state.hasNextPage = false;
                } 
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });

    }
})

export default charactersSlice.reducer;