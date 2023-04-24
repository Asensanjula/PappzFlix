import React, { useEffect } from 'react';
import './Home.scss'
import { MovieListing } from '../MovieListing/MovieListing';
import MovieApi from '../../common/apis/MovieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/Movies/MovieSlice';

const Home = () => {

  let movieText = "harry";
  const dispatch = useDispatch();

  useEffect( ()=> {
    const fetchMovies = async () => {
      const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log(err);
      });

      console.log("The response for Movie API ", response);
      // @ts-ignore
      dispatch(addMovies(response.data));
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