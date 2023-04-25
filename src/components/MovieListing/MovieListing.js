import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/Movies/MovieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import './MovieListing.scss'

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  // console.log("list ",movies);
  // console.log("val ",movies.Response === "True");

  let renderMovies =
    movies.Response === "True" ? 
      movies?.Search?.map((movie, index) => (
        (<MovieCard key={index} movie={movie} />)
      ))
     : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
    
    // console.log(renderMovies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  );
};
