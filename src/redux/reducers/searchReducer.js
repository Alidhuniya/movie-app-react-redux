import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE_ID,
  LOADING
} from './../actions/actionTypes';

const initialState = {
  text: '',
  // movies: [],
  loading: false,
  // movie: []
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    
    default:
      return state;
  }
}
