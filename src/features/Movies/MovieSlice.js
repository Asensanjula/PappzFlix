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

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetails",
  async (id) => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&i=${id}&plot=full`
    );

    return response.data
  }
);

const initialState = {
  movies: [],
  selectedMovieOrSHow: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow : (state) => {
        state.selectedMovieOrSHow = {};
    }
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
      console.log("Rejected")
    },

    [fetchAsyncMovieOrShowDetails.fulfilled] : (state, {payload}) => {
      console.log("fetchAsyncMovieOrShowDetails Fulfiled!")
      return {
        ...state,
        selectedMovieOrSHow: payload
      }
    },
  }
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrSHow;
export default movieSlice.reducer;
