import { combineReducers } from 'redux'
import modalReducer from './modalSlice';
import loginReducer from './loginSlice';

const reducer = combineReducers({
  // here we will be adding reducers
  modal:modalReducer,
  login:loginReducer

})

export default reducer;