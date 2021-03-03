
import {combineReducers} from 'redux';
let initialState ={
  username:''
}
export const geod = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // case 'ACTIVATE_GEOD':
    //   return {...state,geod:action.data};
    // case 'CLOSE_GEOD':
      // return {};
    case 'USER_GET':
      return {...state,username:action.data}
    default:
      return state;
  }
};

export const reducers = combineReducers({
geod,
});