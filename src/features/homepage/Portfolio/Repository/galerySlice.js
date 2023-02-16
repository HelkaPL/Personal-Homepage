import { createSlice } from "@reduxjs/toolkit"

const galerySlice = createSlice({
    name: 'galery',
    initialState: {
        repositories: null,
        status: "loading",
    },
    reducers: {
        fetchRepos: (state) => {
            state.status = "loading";
        },
        fetchReposSuccess: (_, {payload: repositories}) => ({
            repositories,
            status: "success",
        }),
        fetchReposError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchRepos,
    fetchReposSuccess,
    fetchReposError,
} = galerySlice.actions;

const selectGaleryState = (state) => state.galery;

export const selectRepos = (state) => selectGaleryState(state).repositories;
export const selectReposStatus = (state) => selectGaleryState(state).status;

export default galerySlice.reducer;