
import { FETCH_MOVIES, FETCH_MOVIES_FAILURE } from './actionTypes';
 const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

// regular async await


export const fetchMovies = (text) => {
   
  return async (dispatch) => {
      try {
      
     const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`;
     const ftch = await fetch(endpoint);
      const response = await ftch.json();
          const result = response.data
          dispatch(fetchMoviesSuccess(result))

      }
      catch(error) {
        dispatch(fetchMoviesFailure(error.message))
      }
  }
}
  
 
  
  export const fetchMoviesSuccess = (payload) => {
    return {
      type: FETCH_MOVIES,
      payload
      
    }
  }
  
  export const fetchMoviesFailure = error => {
    return {
      type: FETCH_MOVIES_FAILURE,
      payload: error
    }
  }

