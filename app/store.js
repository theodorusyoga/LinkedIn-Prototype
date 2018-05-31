import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware }from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

if(process.env.NODE_ENV === 'development'){
    const devToolsExt = window.devToolsExtension

    if(typeof devToolsExt === 'function'){
        enhancers.push(devToolsExtension())
    }
}

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composer(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store