import {
    FETCH_MOVIE_ID
  } from './../actions/actionTypes';
  
  const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
  };
  
  export const movie = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_ID:
            return {
                ...state,
                movie: action.payload,
                loading: false
              };
      
      default:
        return state;
    }
  }
  