import { createSlice } from "@reduxjs/toolkit";
import { getIsDarkThemeFromLocalStorage } from "./isDarkThemeLocalStore";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: getIsDarkThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: state => {
            state.isDarkTheme = !state.isDarkTheme;
        },
    },
});

export const {
    toggleTheme,
} = themeSlice.actions;

export const selectIsDarkTheme = state => state.theme.isDarkTheme;

export default themeSlice.reducer;