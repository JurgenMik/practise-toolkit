import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
import apiMiddleware from "../middleware/api";
import logMiddleware from "../middleware/log";

const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware, logMiddleware));

export default store;