import { applyMiddleware, createStore, } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/login.reducers';


// export const store ;
export function configureStore(initialState = {}) {
    const middlewares = [thunk];
    const store = createStore(reducers,applyMiddleware(...middlewares));
    return store;
  };
  
  export const store = configureStore();
