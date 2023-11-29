import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import locationsSlice from "./locationsSlice";
import episodesSlice from "./episodesSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        locations: locationsSlice,
        episodes: episodesSlice,
    }
})