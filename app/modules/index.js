import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import home from './home'
import search from './search'

export default combineReducers({
    routing: routerReducer,
    home,
    search
})