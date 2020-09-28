import {SEARCH_MOVIE} from "./actionTypes";
export const searchMovie = text =>  {
    return {
        type: SEARCH_MOVIE,
        payload: text
    }
  };