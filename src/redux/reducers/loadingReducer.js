import {
    LOADING
  } from './../actions/actionTypes';
  
  const initialState = {
   
    loading: false,
    
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
  