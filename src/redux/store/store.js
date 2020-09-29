
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from "./../reducers/index";



// const store = createStore(
//     allReducers,
//     compose(applyMiddleware(thunk),   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//   )

  const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk) )
  )

  export default store;
