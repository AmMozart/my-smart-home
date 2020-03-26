import headerReducer from './headerReducer'
import statusReducer from './statusReducer'
import { combineReducers } from 'redux'

let reducers = combineReducers({ headerReducer, statusReducer })

export default reducers