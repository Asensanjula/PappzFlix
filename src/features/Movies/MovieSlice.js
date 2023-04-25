// @ts-nocheck
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    let movieText = "harry";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );

    return response.data
  }
);

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending] : () => {
      console.log("Pending")
    },
    [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
      console.log("Fulfiled!")
      return {
        ...state,
        movies: payload
      }
    },
    [fetchAsyncMovies.rejected] : () => {
      console.log("Rejected")}
  }
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
