import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {MovieState} from '../movieState';

const MovieDetail = () => {
    const historty = useHistory();
    // console.log(historty);
    const url = historty.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
   
   //useeffect
   useEffect(() => {
       const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
       setMovie(currentMovie);
   },[movies,url]) //run everytime when movies or url updates
  return (
    <>
      <h1>Movie Detail</h1>
    </>
  );
};

export default MovieDetail
