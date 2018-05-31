import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import countdown from './countdown'

export default combineReducers({
    routing: routerReducer,
    countdown
})