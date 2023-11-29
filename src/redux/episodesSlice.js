import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEpisodes = createAsyncThunk('episodes/getEpisodes', async (pageNum) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episode?page=${pageNum}`);
    return res.data;
})

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        hasNextPage: true,
        num: 1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodes.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.items = [...state.items, ...action.payload.results];
                state.status = "succeeded";
                state.num += 1;

                if(action.payload.results.length < 20){
                    state.hasNextPage = false;
                } 
            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})

export default episodesSlice.reducer;