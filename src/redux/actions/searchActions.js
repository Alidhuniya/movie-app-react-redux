import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE_ID, LOADING } from "./actionTypes";
// const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
import axios from "axios";


export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=c951ff1&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=c951ff1&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE_ID,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
