import { combineReducers } from 'redux';
import { search } from './searchReducer';
import { movies } from './moviesReducer';
import { movie } from './movieReducer';
import { loading } from './loadingReducer';

const allReducers =  combineReducers(
    {
    search,
    movies,
    movie,
    loading,
    }
);

export default allReducers;