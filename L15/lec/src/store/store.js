import {legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import {counterreducer} from "./counterreducer"
import {todoreducer} from "./todoreducer"
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({counter: counterreducer, todo: todoreducer})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))
