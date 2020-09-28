
import { FETCH_MOVIE_ID, FETCH_MOVIE_FAILURE } from './actionTypes';
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const fetchMovie = (id) => {
   
    return async (dispatch) => {
        try {
        
       const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
       const data = await fetch(endpoint);
        const response1 = await data.json();
            const result1 = response1.data
            dispatch(fetchMovieSuccess(result1))
  
        }
        catch(error) {
          dispatch(fetchMovieFailure(error.message))
        }
    }
  }
    
   
    
    export const fetchMovieSuccess = id => {
      return {
        type: FETCH_MOVIE_ID,
        payload: id
      }
    }
    
    export const fetchMovieFailure = error => {
      return {
        type: FETCH_MOVIE_FAILURE,
        payload: error
      }
    }
  
  