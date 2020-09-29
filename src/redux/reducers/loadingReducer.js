import {
    LOADING
  } from './../actions/actionTypes';
  
  const initialState = {
   
    text: '',
    movies: [],
    loading: false,
    movie: []
    
  };
  
  export const loading = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                
                loading: true
              };
      
      default:
        return state;
    }
  }
  