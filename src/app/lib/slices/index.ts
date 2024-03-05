import { combineReducers } from 'redux'
import modalReducer from './modalSlice';

const reducer = combineReducers({
  // here we will be adding reducers
  modals:modalReducer
})

export default reducer;