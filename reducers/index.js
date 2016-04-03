import { combineReducers } from 'redux'
import {counter,content }from './counter'

const rootReducer = combineReducers({
  counter,content

})

export default rootReducer
