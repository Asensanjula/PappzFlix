import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/Movies/MovieSlice";
import "./MovieDetails.scss";

export const MovieDetails = () => {
  let { imdbId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    console.log(imdbId);
    // @ts-ignore
    dispatch(fetchAsyncMovieOrShowDetails(imdbId));
    return () => {
      dispatch(removeSelectedMovieOrShow()); // cleanup function
    };
  }, [dispatch, imdbId]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <>...Loading</>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data?.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"> : </i> {data.imdbRating}
              </span>
              <span>
                IMDB Vptes <i className="fa fa-thumbs-up"> : </i>{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"> : </i> {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"> : </i> {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>

            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>

              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>

              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};
