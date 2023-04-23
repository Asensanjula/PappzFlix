import React, { useEffect } from 'react';
import './Home.scss'
import { MovieListing } from '../MovieListing/MovieListing';
import MovieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

const Home = () => {

  useEffect( ()=> {
    let movieText = "harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log(err);
      });

      console.log("The response for Movie API ", response);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <div className='banner'></div>
      <MovieListing/>
    </>
  )
}

export default Home