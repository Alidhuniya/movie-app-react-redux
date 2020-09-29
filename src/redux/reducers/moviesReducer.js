import {FETCH_MOVIES} from "../actions/actionTypes";
  const initialState = {
    text: "",
  movies: [],
  loading: false,
  movie: []
  };
  
  export const movies = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
      
      default:
        return state;
    }
  }
  