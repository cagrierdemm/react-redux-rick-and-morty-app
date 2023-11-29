import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocations = createAsyncThunk('locations/getLocations', async (pageNum) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/location?page=${pageNum}`);
    return res.data;
})

export const locationsSlice = createSlice({
    name: 'locations',
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
            .addCase(fetchLocations.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchLocations.fulfilled, (state, action) => {
                state.items = [...state.items, ...action.payload.results];
                state.status = "succeeded";
                state.num += 1;

                if(action.payload.results.length < 20){
                    state.hasNextPage = false;
                } 
            })
            .addCase(fetchLocations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})

export default locationsSlice.reducer;