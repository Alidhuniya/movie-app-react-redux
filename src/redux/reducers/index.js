import { combineReducers } from 'redux';
// import { search } from './searchReducer';
// import { movies } from './moviesReducer';
// import { movie } from './movieReducer';
// import { loading } from './loadingReducer';

import searchReducers from "./searchReducers"

// const allReducers =  combineReducers(
//     {
//     search,
//     movies,
//     movie,
//     loading,
//     }
// );

// export default allReducers;



export default combineReducers({
  movies: searchReducers
});