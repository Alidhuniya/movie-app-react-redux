
import { FETCH_MOVIES, FETCH_MOVIES_FAILURE } from './actionTypes';
 const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

// regular async await


export const fetchMovies = (text) => {
   
  return async (dispatch) => {
      try {
      
     const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`;
     const data = await fetch(endpoint);
      const response = await data.json();
          const result = response.data
          dispatch(fetchMoviesSuccess(result))

      }
      catch(error) {
        dispatch(fetchMoviesFailure(error.message))
      }
  }
}
  
 
  
  export const fetchMoviesSuccess = id => {
    return {
      type: FETCH_MOVIES,
      payload: id
    }
  }
  
  export const fetchMoviesFailure = error => {
    return {
      type: FETCH_MOVIES_FAILURE,
      payload: error
    }
  }

